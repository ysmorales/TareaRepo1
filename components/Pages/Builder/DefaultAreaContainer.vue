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
</script>

<template>
  <div
    v-for="(node, index) in items"
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
    <DefaultNodeAreaContainer
      :node="node"
      v-if="indexShow === 'all' || indexShow === index"
    />
  </div>
</template>
