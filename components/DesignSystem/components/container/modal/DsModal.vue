<script lang="ts" setup>
import DsIcon from "../../basic/icon/DsIcon.vue";
import { computed, ref, nextTick, onMounted, onUnmounted, type Ref ,watch } from "vue";

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
    closeModal.value();
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

const closeModal: any = computed(() => {
  emit("update:modelValue", !props.modelValue);
  emit("close");
});

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
            ></div>

            <div
              ref="closeButton"
              aria-labelledby="modal-title"
              class="max-h-fit relative flex flex-col w-full md:my-0 md:mx-auto max-w-screen-md overflow-visible"
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
                    <h3
                      id="modal-title"
                      class="font-bold text-primary-500 text-xl"
                    >
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
                class="bg-neutral-100 border border-t-neutral-300 text-center md:text-right p-5"
              >
                <div v-if="!$slots.footer">
                  <button
                    aria-labelledby="form_modal_example1"
                    class="modal-close font-roboto border border-primary-500 text-primary-500 bg-white px-3 py-2 hover:bg-primary-900 hover:text-white m-2"
                    title="Cancelar los cambios realizados y cerrar modal"
                    type="reset"
                    @click="closeModal"
                  >
                    Cancelar
                  </button>

                  <button
                    :title="acceptTooltip"
                    aria-labelledby="form_modal_example1"
                    class="font-roboto border border-primary-500 bg-primary-500 text-white px-3 py-2 hover:bg-primary-900"
                    type="submit"
                    @click="onAccept"
                    @keydown.tab="loopFocus"
                  >
                    {{ acceptText }}
                  </button>
                </div>

                <slot name="footer"></slot>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </teleport>
  </transition>
</template>
