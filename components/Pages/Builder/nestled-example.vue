<script setup>
import NesteDraggable from "./nestled.vue";

const store = useBuilderStore();
const { itemsPageList } = toRefs(store);
</script>
<template>
  {{ itemsPageList }}
  <NesteDraggable :tasks="itemsPageList" />
</template>

<style scoped></style>
