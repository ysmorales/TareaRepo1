<script lang="ts" setup>
interface IProp {
  type?: string;
}

const props = withDefaults(defineProps<IProp>(), {});
</script>

<template>
  <div
    :class="[
      'containerd',
      type,
      {
        'col-span-6': type === 'column',
      },
    ]"
  >
    <slot>some </slot>
  </div>
</template>
