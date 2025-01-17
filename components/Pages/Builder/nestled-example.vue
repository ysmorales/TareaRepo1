<script setup>
import NesteDraggable from "./nestled.vue";

const store = useBuilderStore();
const { itemsPageList } = toRefs(store);
</script>
<template>
  <div class="row">
    <div class="col-8">
      <h3>Nested draggable</h3>
      {{ itemsPageList }}
      <NesteDraggable :tasks="itemsPageList" />
    </div>
  </div>
</template>

<style scoped></style>
