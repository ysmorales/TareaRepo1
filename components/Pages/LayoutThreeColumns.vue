<script lang="ts" setup>
interface IProp {
  showLeft?: boolean;
}

const props = withDefaults(defineProps<IProp>(), {
  showLeft: true,
});
</script>

<template>
  <div class="grid grid-cols-8 h-full">
    <div class="bg-white h-full" v-if="showLeft">
      <slot name="sideLeft">left side</slot>
    </div>
    <div
      :class="[
        'h-full',
        showLeft ? 'col-span-5 min-h-[calc(100vh-70px)' : 'col-span-6',
      ]"
    >
      <slot name="container">container </slot>
    </div>
    <div class="col-span-2 bg-white h-full">
      <slot name="sideRight">right side</slot>
    </div>
  </div>
</template>
