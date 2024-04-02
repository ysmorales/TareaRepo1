<script lang="ts" setup>

import VerticalMenu from "~/components/builder-components/verticalMenu/VerticalMenu.vue";
import NavBar from "~/components/builder-components/NavBar/NavBar.vue";
</script>

<template>
  <div class="flex">
    <VerticalMenu/>
    <div class="flex flex-col w-full">
      <NavBar/>
      <slot/>
    </div>
  </div>
</template>
