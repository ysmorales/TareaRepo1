<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import FieldContainerLayout from "./FormBuilder/ContainerLayout/FieldContainerLayout.vue";
import AddFieldOptions from "./FormBuilder/addFieldOptions.vue";
import { DsModal } from "~/components/DesignSystem";
import ListComponents from "./ListComponents.vue";

const props = defineProps({
  type: String,
  id: String,
  emptyList: Boolean,
});

const store = useBuilderStore();
const {
  handlerChangeLayout,
  handlerAddEmptyContainerRow,
  handlerAddEmptyContainerSectionInSlot,
  handlerAddModule,
} = toRefs(store);

const showModalModules = ref(false);
const prevSelectModule = ref("");

const handlerPrevSelect = (keyName: string) => {
  prevSelectModule.value = keyName;
};

const handlerSelect = (keyName: string) => {
  handlerPrevSelect(keyName);
  addModule();
};

const addModule = () => {
  handlerAddModule.value({ id: props.id }, prevSelectModule.value);
};

const handleAdd = (toAdd) => {
  console.log({ toAdd });
  if (toAdd.layout) {
    handlerChangeLayout.value({ id: props.id, type: props.type }, toAdd.layout);
  }
  if (toAdd.type === "section") {
    handlerAddEmptyContainerRow.value(props);
  }
  if (toAdd.type === "slotSection") {
    handlerAddEmptyContainerSectionInSlot.value(props);
  }
  if (toAdd.type === "column") {
    showModalModules.value = true;
  }
};
const dicTypesSectionInnerToAddLabeL = {
  section: "Add row",
  column: "Add module",
  row: "Add columns",
};
</script>

<template>
  <div class="flex justify-center w-full z-10">
    <div class="mt-4">
      <FieldContainerLayout v-if="type === 'row'" @handlerChange="handleAdd">
        <template v-slot:action>
          <AddFieldOptions :label="dicTypesSectionInnerToAddLabeL[type]" />
        </template>
      </FieldContainerLayout>
      <AddFieldOptions
        v-if="type !== 'row'"
        :label="
          emptyList ? 'Add section' : dicTypesSectionInnerToAddLabeL[type]
        "
        @add="() => handleAdd({ type })"
      />
    </div>
  </div>
  <DsModal
    v-if="showModalModules"
    title="Adiciona un componente"
    :model-value="showModalModules"
    accept-text="Adicionar"
    color-button-ok="primary"
    @close="showModalModules = false"
    @accept="addModule"
  >
    <div class="mt-2 p-2">
      <ListComponents
        inModal
        :selected="prevSelectModule"
        @handlerClick="handlerPrevSelect"
        @handlerSelect="handlerSelect"
      />
    </div>
  </DsModal>
</template>
