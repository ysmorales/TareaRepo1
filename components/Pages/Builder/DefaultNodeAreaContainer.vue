<script lang="ts" setup>
import TreeNode from "./DefaultAreaContainer.vue";
import ModuleComponent from "./moduleComponent.vue";

interface IProp {
  node?: any;
}
const props = withDefaults(defineProps<IProp>(), {
  node: {},
});
</script>

<template>
  <ModuleComponent v-if="node.type === 'module'" :element="node" seeOnly />
  <TreeNode
    v-if="node.items && node.items.length && !node.item"
    :items="node.items"
  />
</template>
