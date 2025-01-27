<script lang="ts" setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";
import { DsButton, DsIcon } from "~/components/DesignSystem";

const props = defineProps({
  items: {
    type: Array as () => { id: number; name: string }[],
    default: () => [
      { id: 1, name: "Gestionar resultados" },
      { id: 2, name: "Editar antecedentes" },
    ],
  },
  icon: {
    type: String,
    default: "ellipsis-v",
  },
});

const menuOpen = ref(false);
const buttonRef = ref<HTMLElement | null>(null);
const toastRef = ref<HTMLElement | null>(null);
const rect = ref({ top: 0, left: 0, bottom: 0, right: 0 });
const emit = defineEmits(["clickMenu"]);

function handleAction(event: MouseEvent) {
  menuOpen.value = !menuOpen.value;
  buttonRef.value = event.currentTarget as HTMLElement;
  nextTick(() => {
    if (buttonRef.value && toastRef.value) {
      rect.value = buttonRef.value.getBoundingClientRect();
    }
  });
}

function handleClickOutside(event: MouseEvent) {
  if (
    toastRef.value &&
    !toastRef.value.contains(event.target as Node) &&
    buttonRef.value !== event.target &&
    !buttonRef.value?.contains(event.target as Node)
  ) {
    menuOpen.value = false;
  }
}

function handleScroll() {
  menuOpen.value = false;
}

function handleButtonClick(item: { id: number; name: string }) {
  menuOpen.value = false;
  emit("clickMenu", item);
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="relative flex">
    <DsButton color="tertiary" @click="handleAction">
      <DsIcon :name="props.icon" />
    </DsButton>
    <div
      v-if="menuOpen"
      id="myToast"
      ref="toastRef"
      :style="{ top: `${rect.top + 50}px`, left: `${rect.left - 155}px` }"
      class="fixed max-w-sm w-[100px] rounded-lg shadow-md border border-gray-200 space-y-2 z-50 bg-white"
    >
      <div class="flex flex-col w-[200px]">
        <DsButton
          v-for="(item, index) in props.items"
          :key="index"
          color="tertiary"
          @click="handleButtonClick(item)"
        >
          {{ item.name }}
        </DsButton>
      </div>
    </div>
  </div>
</template>
