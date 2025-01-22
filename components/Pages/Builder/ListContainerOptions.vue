<script lang="ts" setup>
import {
  DsAccordion,
  DsIcon,
  DsTypography,
  DsDropdown,
} from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import FieldContainerLayout from "./FormBuilder/FieldContainerLayout.vue";
const store = useBuilderStore();
const { itemOnSelect } = toRefs(store);
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
          <FieldContainerLayout />
        </div>
      </div>
    </DsAccordion>
  </div>
</template>
