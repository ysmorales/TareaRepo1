<script lang="ts" setup>
import { DsAccordion, DsIcon, DsTypography } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import CardFieldOptions from "./CardFieldOptions.vue";
const store = useBuilderStore();
const { itemsPageList } = toRefs(store);

const getAllLeafNodes = (trees) => {
  let leaves = [];
  function traverse(node) {
    if (!node?.items || node?.items.length === 0) {
      leaves.push(node);
    } else {
      if (node?.item) {
        leaves.push({ id: node.id, item: node.item, settings: node.settings });
      }
      node?.items?.forEach(traverse);
    }
  }
  trees.forEach(traverse);
  return leaves;
};

const allModules = computed(() => {
  const dd: any[] = [];
  const listModules = getAllLeafNodes(itemsPageList.value);
  listModules?.forEach((module) => {
    if (module.item) {
      dd.push(getInfoFieldsComponent(module));
    }
  });
  return dd;
});
</script>

<template>
  <div class="mt-5">
    <CardFieldOptions
      v-for="(item, index) in allModules"
      :item="item"
      :index="index"
    />
  </div>
</template>
