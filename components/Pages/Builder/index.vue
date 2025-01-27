<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import { toRefs } from "vue";
import LayoutThreeColumns from "../LayoutThreeColumns.vue";
import DraggableArea from "./DraggableArea.vue";
import DefaultArea from "./DefaultArea.vue";

import ListComponents from "./ListComponents.vue";
import FieldTabsOptions from "./FieldTabsOptions.vue";

const store = useBuilderStore();
const { viewMode } = toRefs(store);
</script>

<template>
  <LayoutThreeColumns :showLeft="viewMode === 'edition'">
    <template v-slot:sideLeft>
      <ListComponents />
    </template>
    <template v-slot:sideRight>
      <FieldTabsOptions />
    </template>
    <template v-slot:container>
      <DraggableArea v-if="viewMode === 'edition'" />
      <DefaultArea v-if="viewMode === 'default'" />
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
