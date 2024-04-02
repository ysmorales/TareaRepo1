<script lang="ts" setup>

import VerticalMenu from "~/components/builder-components/verticalMenu/VerticalMenu.vue";
</script>

<template>
  <div class="flex">
    <VerticalMenu/>
    <slot/>
  </div>
</template>
