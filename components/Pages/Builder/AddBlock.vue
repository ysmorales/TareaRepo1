<script lang="ts" setup>
import { DsIcon, DsButton } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import FieldContainerLayout from "./FormBuilder/ContainerLayout/FieldContainerLayout.vue";
import AddFieldOptions from "./FormBuilder/addFieldOptions.vue";

const props = defineProps({
  type: String,
  id: String,
});

const store = useBuilderStore();
const { handlerChangeLayout, handlerAddEmptyContainerRow } = toRefs(store);

const handleAdd = (toAdd) => {
  console.log("aquiiiii", { id: props.id, type: props.type }, toAdd);
  if (toAdd.layout) {
    handlerChangeLayout.value({ id: props.id, type: props.type }, toAdd.layout);
  }
  if (toAdd.row) {
    handlerAddEmptyContainerRow.value(props);
  }
};
const dicTypesSectionInnerToAddLabeL = {
  section: "Add row",
  column: "Add module",
  row: "Add columns",
};
</script>

<template>
  <div class="relative flex justify-center w-full">
    <div class="absolute mt-4">
      <FieldContainerLayout v-if="type === 'row'" @handlerChange="handleAdd">
        <template v-slot:action>
          <AddFieldOptions :label="dicTypesSectionInnerToAddLabeL[type]" />
        </template>
      </FieldContainerLayout>
      <AddFieldOptions
        v-if="type !== 'row'"
        :label="dicTypesSectionInnerToAddLabeL[type]"
        @add="() => handleAdd({ row: true })"
      />
    </div>
  </div>
</template>
