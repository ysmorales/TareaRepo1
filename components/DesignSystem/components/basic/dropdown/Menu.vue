<script lang="ts" setup>
defineProps({
  classMenu: {
    type: String,
    default: "",
  },
  show: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div v-if="show" :class="classMenu" aria-hidden="true" role="menu">
    <div class="bg-primary-500 text-white" role="list">
      <slot>No items defined</slot>
    </div>
  </div>
</template>
