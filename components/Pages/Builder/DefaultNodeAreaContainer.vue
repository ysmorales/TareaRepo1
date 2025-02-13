<script lang="ts" setup>
import TreeNode from "./DefaultAreaContainer.vue";
import ModuleComponent from "./moduleComponent.vue";
import { getErrorMessage } from "./helpers";

interface IProp {
  node?: any;
  validateForm: any;
}
const props = withDefaults(defineProps<IProp>(), {
  node: {},
});
</script>

<template>
  <ModuleComponent
    v-if="node.type === 'module'"
    :element="node"
    seeOnly
    v-model="node.data"
    :error="
      validateForm ? getErrorMessage(validateForm[node.id]?.$errors[0]) : null
    "
  />
  <TreeNode
    v-if="node.items && node.items.length && !node.item"
    :items="node.items"
  />
</template>
