<script lang="ts" setup>
import {
  ref,
  nextTick,
  onMounted,
  onUnmounted,
  type Ref,
  watch,
  computed,
} from "vue";
import DsIcon from "../../basic/icon/DsIcon.vue";
import DsButton from "../../../../DesignSystem/components/basic/button/DsButton.vue";
import type { IButtonColor } from "../../basic/button/interfaces";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: "Default title",
  },

  acceptText: {
    type: String,
    default: "Guardar",
  },

  acceptTooltip: {
    type: String,
    default: "Guardar los cambios realizados",
  },

  showHeader: {
    type: Boolean,
    default: true,
  },

  showFooter: {
    type: Boolean,
    default: true,
  },

  okOnly: {
    type: Boolean,
    default: false,
  },
  cancelOnly: {
    type: Boolean,
    default: false,
  },
  buttonModalLoading: {
    type: Boolean,
    default: false,
  },
  colorButtonOk: {
    type: String as () => IButtonColor,
    default: "primary",
  },
  class: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
  },
});

const filterClassComp = computed(() => {
  // return filterClass(predefinedClasses, props.class, otherStyle);
  return props.class;
});
const closeButton = ref<Ref | null>(null);
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && props.modelValue === true) {
    closeModal();
  }
}

watch(
  () => props.modelValue,
  async (newValue) => {
    if (newValue === true) {
      await nextTick();
      closeButton.value?.focus();
    }
  },
);

const emit = defineEmits(["update:modelValue", "accept", "close"]);

function closeModal() {
  emit("update:modelValue", !props.modelValue);
  emit("close");
}

const onAccept = () => emit("accept");

function loopFocus() {
  closeButton.value?.focus();
}
</script>

<template>
  <transition name="fade">
    <teleport to="body">
      <div
        v-if="modelValue"
        class="modal flex items-center flex-col justify-center overflow-hidden fixed z-40 bottom-0 left-0 right-0 top-0"
      >
        <section class="my-4">
          <div
            id="modal-js-example"
            :class="[
              'flex modal items-center flex-col justify-center overflow-hidden fixed z-40 bottom-0 left-0 right-0 top-0 ',
            ]"
            aria-modal="true"
            role="dialog"
          >
            <div
              class="modal-background bg-black/80 absolute bottom-0 left-0 right-0 top-0"
            />

            <div
              ref="closeButton"
              :class="filterClassComp"
              aria-labelledby="modal-title"
              class="max-h-fit relative flex flex-col w-full md:my-0 md:mx-auto max-w-screen-md overflow-hidden rounded"
              tabindex="0"
            >
              <section
                v-if="showHeader"
                class="p-5 bg-white grow shrink overflow-auto"
              >
                <slot name="header">
                  <header
                    class="p-2 text-left border-b border-b-primary-500 flex items-center justify-between"
                  >
                    <h3 id="modal-title" class="font-bold">
                      {{ title }}
                    </h3>

                    <button
                      aria-label="Cerrar"
                      class="close-modal border border-primary-500 p-2 bg-white rounded-lg text-sm"
                      @click="closeModal"
                    >
                      <DsIcon
                        aria-hidden="true"
                        class="block text-primary-500"
                        name="times"
                      />
                    </button>
                  </header>
                </slot>
              </section>

              <section class="px-5 bg-white grow shrink overflow-auto">
                <slot>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </slot>
              </section>

              <footer
                v-if="showFooter"
                class="bg-white text-center md:text-right p-5"
              >
                <div v-if="!$slots.footer" class="flex justify-end space-x-2">
                  <DsButton
                    v-show="!okOnly"
                    class="btn-large"
                    color="secondary"
                    text="Cancelar"
                    title="Cancelar los cambios realizados y cerrar modal"
                    @click="closeModal"
                  />
                  <DsButton
                    v-if="!cancelOnly"
                    :color="colorButtonOk"
                    :disabled="buttonModalLoading"
                    :loading="buttonModalLoading"
                    :text="acceptText"
                    :title="acceptTooltip"
                    class="btn-large"
                    type="submit"
                    @click="onAccept"
                    @keydown.tab="loopFocus"
                  />
                </div>

                <slot name="footer" />
              </footer>
            </div>
          </div>
        </section>
      </div>
    </teleport>
  </transition>
</template>
