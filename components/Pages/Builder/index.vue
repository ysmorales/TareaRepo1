<script lang="ts" setup>
import LayoutThreeColumns from "../LayoutThreeColumns.vue";
import DraggableArea from "~/components/builder-components/dragable-area/DraggableArea.vue";

import ListComponents from "./ListComponents.vue";
import FieldOptions from "./FieldOptions.vue";

const showModal = ref(false);

const store = useBuilderStore();
const { clearStore, changeModal, modalType, builderItems, currentEditItem } =
  toRefs(store);

const area = ref<"view" | "edit" | "code">("edit");
const handle = {
  code: () => (area.value = "code"),
  edit: () => (area.value = "edit"),
  clear: () => clearStore.value(),
  removeItem: () => (showModal.value = false),
  save: () => {
    changeModal.value("save");
    showModal.value = true;
  },
  validate: () => {
    changeModal.value("validate");
    showModal.value = true;
  },
  view: () => (area.value = "view"),
};
</script>

<template>
  <LayoutThreeColumns>
    <template v-slot:sideLeft>
      <ListComponents />
    </template>
    <template v-slot:sideRight>
      <FieldOptions />
    </template>
    <template v-slot:container>
      <DraggableArea
        v-if="area == 'edit'"
        @property="showModal = true"
        @remove="handle.removeItem"
        @validate="handle.validate"
      />
    </template>
  </LayoutThreeColumns>
</template>
