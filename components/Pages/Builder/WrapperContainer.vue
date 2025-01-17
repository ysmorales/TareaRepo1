<script lang="ts" setup>
interface IProp {
  type?: string;
  id: string;
}

const props = withDefaults(defineProps<IProp>(), {
  type: "module",
});
</script>

<template>
  <div>
    <slot>some</slot>
  </div>
</template>
