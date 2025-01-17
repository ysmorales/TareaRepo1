<script lang="ts" setup>
import LayoutThreeColumns from "../LayoutThreeColumns.vue";
import DraggableArea from "./DraggableArea.vue";

import ListComponents from "./ListComponents.vue";
import FieldTabsOptions from "./FieldTabsOptions.vue";
import NestledExample from "./nestled-example.vue";

const area = ref<"view" | "edit" | "code">("edit");
</script>

<template>
  <LayoutThreeColumns>
    <template v-slot:sideLeft>
      <ListComponents />
    </template>
    <template v-slot:sideRight>
      <FieldTabsOptions />
    </template>
    <template v-slot:container>
      <NestledExample />
      <DraggableArea v-if="area == 'edit'" />
    </template>
  </LayoutThreeColumns>
</template>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(11, 20, 26, 0.2) transparent;
}

*::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(11, 20, 26, 0.2);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: rgba(10, 11, 11, 0.2);
}

*::-webkit-scrollbar-track {
  background: rgba(141, 147, 147, 0.1);
}
</style>
