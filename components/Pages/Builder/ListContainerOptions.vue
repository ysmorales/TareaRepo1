<script lang="ts" setup>
import { DsAccordion, DsIcon, DsTypography } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import FieldContainerLayout from "./FormBuilder/ContainerLayout/FieldContainerLayout.vue";
const store = useBuilderStore();
const { itemOnSelect, handlerChangeLayout } = toRefs(store);

const handlerChange = (change) => {
  console.log({ change });
  if (change.layout) {
    handlerChangeLayout.value(itemOnSelect.value, change.layout);
  }
};
</script>

<template>
  <div class="mt-5">
    <DsAccordion class="mt-2">
      <template v-slot:header>
        <div class="flex w-full items-center">
          <div class="flex-none">
            <DsIcon name="edit" size="default" />
          </div>

          <div class="flex-1">
            <DsTypography class="text-lg ml-4 mb-0" variant="h4">{{
              itemOnSelect.type
            }}</DsTypography>
          </div>

          <div class="flex-none">
            <DsIcon name="copy" size="default" class="mr-4" />
            <DsIcon name="trash" size="default" class="mr-4" />
          </div>
        </div>
      </template>
      <div>
        <div v-if="itemOnSelect.type === 'row'">
          <FieldContainerLayout @handlerChange="handlerChange" />
        </div>
      </div>
    </DsAccordion>
  </div>
</template>
