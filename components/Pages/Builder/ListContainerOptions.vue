<script lang="ts" setup>
import {
  DsAccordion,
  DsIcon,
  DsTypography,
  DsInput,
} from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import FieldContainerLayout from "./FormBuilder/ContainerLayout/FieldContainerLayout.vue";
import SidesNums from "./FormBuilder/SidesNums/index.vue";
import Color from "./FormBuilder/Color/index.vue";

const store = useBuilderStore();
const {
  itemOnSelect,
  handlerChangeLayout,
  handlerChangeContainerPaddingMargin,
  handlerChangeContainerSettings,
} = toRefs(store);

const handlerChange = (change) => {
  console.log({ change });
  if (change.layout) {
    handlerChangeLayout.value(itemOnSelect.value, change.layout);
  }
  if (change.margin || change.padding) {
    handlerChangeContainerPaddingMargin.value(itemOnSelect.value, change);
  }
  if (change.backgroundColor) {
    handlerChangeContainerSettings.value(itemOnSelect.value, change);
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
      <div class="flex flex-col gap-1" v-if="itemOnSelect.type">
        <div v-if="itemOnSelect.type === 'row'">
          <div>
            <DsTypography class="text-ms mb-0" variant="span"
              >Diseño de contenedores tipo:</DsTypography
            >
            <div>
              <FieldContainerLayout @handlerChange="handlerChange" />
            </div>
          </div>
        </div>
        <SidesNums @handlerChange="handlerChange" />
        <SidesNums
          @handlerChange="handlerChange"
          label="Marging"
          key-name="margin"
        />
        <Color @handlerChange="handlerChange" />
      </div>
      <div v-else>selecciona contenedor</div>
    </DsAccordion>
  </div>
</template>
