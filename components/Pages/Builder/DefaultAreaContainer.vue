<script lang="ts" setup>
import TreeNode from "./DefaultAreaContainer.vue";
import ModuleComponent from "./moduleComponent.vue";
import { getClassRow, getCustomStyleRow } from "./helpers";

interface IProp {
  items?: any;
}
const props = withDefaults(defineProps<IProp>(), {
  items: [],
});
</script>

<template>
  <div
    v-for="node in items"
    :key="node.id"
    :class="[
      {
        grid: node.type === 'row',
      },
      getClassRow(node),
      node.type === 'column' ? node.settings.columnSpan ?? 'col-span-12' : '',
    ]"
    :style="[getCustomStyleRow(node)]"
  >
    <ModuleComponent v-if="node.type === 'module'" :element="node" />
    <TreeNode v-if="node.items && node.items.length" :items="node.items" />
  </div>
</template>
