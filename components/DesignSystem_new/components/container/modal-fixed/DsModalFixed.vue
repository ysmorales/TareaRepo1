<script lang="ts" setup>
import DsButton from "../../../../DesignSystem/components/basic/button/DsButton.vue";

const props = defineProps<{
  modelValue: boolean;
  handlerClose?: () => void;
}>();

const emit = defineEmits(["update:modelValue", "accept", "close"]);

function closeModal() {
  emit("update:modelValue", !props.modelValue);
  emit("close");
}
</script>

<template>
  <div
    v-if="modelValue"
    class="space-y-1 rounded shadow bg-white lg:hidden fixed w-full z-10 h-full top-0 left-0 overflow-y-scroll"
  >
    <div class="bg-white w-full h-full space-y-1 rounded-md">
      <div class="flex justify-end pr-4 pt-4">
        <DsButton class="border-none" color="tertiary" @click="closeModal">
          Cerrar X
        </DsButton>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
