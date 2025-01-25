<script lang="ts" setup>
import { DsAccordion, DsIcon, DsTypography } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import FieldOptions from "./FieldOptions.vue";
const store = useBuilderStore();
const { itemsPageList } = toRefs(store);

const getAllLeafNodes = (trees) => {
  let leaves = [];
  function traverse(node) {
    if (!node.items || node.items.length === 0) {
      leaves.push(node);
    } else {
      node.items.forEach(traverse);
    }
  }
  trees.forEach(traverse);
  return leaves;
};

const allModules = computed(() => {
  const dd: any[] = [];
  const listModules = getAllLeafNodes(itemsPageList.value);
  listModules?.forEach((module) => {
    dd.push({
      id: module.id,
      component: getComponentKey(module.item),
    });
  });
  return dd;
});
</script>

<template>
  <div class="mt-5">
    <DsAccordion
      class="mt-2"
      :title="item.title ?? 'some'"
      v-for="(item, index) in allModules"
      :key="`itm${index}-${item.id}`"
    >
      <template v-slot:header>
        <div class="flex w-full items-center">
          <div class="flex-none">
            <DsIcon name="edit" size="default" />
          </div>

          <div class="flex-1">
            <DsTypography class="text-lg ml-4 mb-0" variant="h4">{{
              item?.component?.__name ?? "name"
            }}</DsTypography>
          </div>

          <div class="flex-none">
            <DsIcon name="copy" size="default" class="mr-4" />
            <DsIcon name="trash" size="default" class="mr-4" />
          </div>
        </div>
      </template>
      <FieldOptions :item="item" />
    </DsAccordion>
  </div>
</template>
