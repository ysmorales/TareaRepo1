<script lang="ts" setup>
import { DsAccordion, DsIcon, DsTypography } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import FieldOptions from "./FieldOptions.vue";
const store = useBuilderStore();
const { itemsPageList } = toRefs(store);

const allModules = computed(() => {
  const dd: any[] = [];

  itemsPageList.value.forEach((section) => {
    section.items?.forEach((row) => {
      row.items?.forEach((column) => {
        column.items?.forEach((module) => {
          dd.push({
            idS: section.id,
            idR: row.id,
            idC: column.id,
            idM: module.id,
            component: getComponentKey(module.item),
          });
        });
      });
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
      :key="`itm${index}-${item.idM}`"
    >
      <template v-slot:header>
        <div class="flex w-full items-center">
          <div class="flex-none">
            <DsIcon name="edit" size="default" />
          </div>

          <div class="flex-1">
            <DsTypography class="text-lg ml-4 mb-0" variant="h4">{{
              item?.component?.__name ??
              item.title.split("/")[item.title.split("/").length - 1] ??
              item.title
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
