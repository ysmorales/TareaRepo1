<script lang="ts" setup>
import { DsAccordion, DsIcon, DsTypography } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import FieldContainerLayout from "./FormBuilder/ContainerLayout/FieldContainerLayout.vue";
import SidesNums from "./FormBuilder/SidesNums/index.vue";
import Color from "./FormBuilder/Color/index.vue";
import FormConfig from "./FormBuilder/FormContainer/FormConfig.vue";

const store = useBuilderStore();
const {
  itemOnSelect,
  handlerChangeLayout,
  handlerChangeContainerPaddingMargin,
  handlerChangeContainerSettings,
  itemsPageList,
} = toRefs(store);

const handlerChange = (change) => {
  console.log({ change });
  if (change.layout) {
    handlerChangeLayout.value(itemOnSelect.value, change.layout);
  } else {
    handlerChangeContainerSettings.value(itemOnSelect.value, change);
  }
};

const item = computed(() => {
  if (itemOnSelect.value.id) {
    const ruta = encontrarRutaPorIndice(
      itemsPageList.value,
      itemOnSelect.value.id
    );
    const nodo = getNodeByPath(itemsPageList.value, ruta);
    return { settings: nodo.settings, type: nodo.type, id: nodo.id };
  }
});
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
        <SidesNums
          @handlerChange="handlerChange"
          :sides-default="item?.settings?.padding"
        />
        <SidesNums
          @handlerChange="handlerChange"
          label="Marging"
          key-name="margin"
          :sides-default="item?.settings.margin"
        />
        <Color
          @handlerChange="handlerChange"
          :color-default="item?.settings.backgroundColor"
        />
        <FormConfig
          v-if="itemOnSelect.type === 'section'"
          @handlerChange="handlerChange"
          :form-default="item?.settings?.form"
        />
      </div>
      <div v-else>selecciona contenedor</div>
    </DsAccordion>
  </div>
</template>
