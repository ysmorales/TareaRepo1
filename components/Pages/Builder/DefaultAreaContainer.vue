<script lang="ts" setup>
import { getClassRow, getCustomStyleRow } from "./helpers";
import DefaultNodeAreaContainer from "./DefaultNodeAreaContainer.vue";

interface IProp {
  items?: any;
  indexShow: number | string;
}
const props = withDefaults(defineProps<IProp>(), {
  items: [],
  indexShow: "all",
});

const getTypeVariant = (node) =>
  node?.settings?.form?.isForm
    ? "form"
    : node?.type === "section"
    ? "section"
    : "div";
</script>

<template>
  <component
    v-for="(node, index) in items"
    :is="getTypeVariant(node)"
    :key="node.id"
    :class="[
      {
        grid: node.type === 'row',
      },
      getClassRow(node),
      node.type === 'column' ? node.settings.columnSpan ?? 'col-span-12' : '',
      node.type,
    ]"
    :style="[getCustomStyleRow(node)]"
  >
    <DefaultNodeAreaContainer
      :node="node"
      v-if="indexShow === 'all' || indexShow === index"
    />
  </component>
</template>
