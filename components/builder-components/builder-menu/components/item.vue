<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";

const emit = defineEmits(["dragStart"]);

defineProps({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  draggable: {
    type: Boolean,
    default: true,
  },
});

function dragStart(type: string) {
  emit("dragStart", type);
}
</script>

<template>
  <div
    :class="[
      { 'opacity-50 cursor-not-allowed': !draggable },
      { 'cursor-pointer': draggable },
    ]"
    :draggable="draggable"
    class="flex transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg rounded-lg bg-white hover:shadow-2xl"
    role="option"
    tabindex="-1"
    @dragstart="dragStart('DsConfirmationButton')"
  >
    <div class="p-2">
      <DsIcon :name="icon" size="medium" />
    </div>
    <div class="vfb-element-text-container ml-4">
      <div class="font-bold">{{ name }}</div>
      <div class="text-sm text-gray-500">{{ description }}</div>
    </div>
  </div>
</template>
