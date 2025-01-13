<script lang="ts" setup>
import { DsAccordion, DsIcon, DsTypography } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import FieldOptions from "./FieldOptions.vue";
const store = useBuilderStore();
const { changeModal, builderItems, currentEditItem } = toRefs(store);
</script>

<template>
  <div class="mt-5">
    <DsAccordion
      class="mt-2"
      :title="item.title ?? 'some'"
      v-for="(item, index) in builderItems"
      :key="`itm${index}-${item.id}`"
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
