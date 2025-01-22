<script lang="ts" setup>
interface IProp {
  type?: string;
  settings?: any;
}

const props = withDefaults(defineProps<IProp>(), {});
</script>

<template>
  <div
    :class="[
      'containerd',
      type,
      type === 'column' ? settings.columnSpan ?? 'col-span-12' : '',
    ]"
  >
    <slot>some </slot>
  </div>
</template>
