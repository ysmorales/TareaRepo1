<script lang="ts" setup>
import DsAccordion from '../../container/accordion/DsAccordion.vue';

const props = defineProps({
  title: {
    type: String,
    default: "No title defined",
  },
});
</script>

<template>
  <DsAccordion :title="props.title">
    <slot />
  </DsAccordion>
</template>
