<script lang="ts" setup>
import type { Ref } from "vue";
import DsButton from "../../button/DsButton.vue";
import DsIcon from "../../../../../DesignSystem/components/basic/icon/DsIcon.vue";

const props = defineProps({
  rowsSelected: {
    type: Array<Ref<unknown[]>>,
    default: () => [],
    required: true,
  },
  addButtonLabel: {
    type: String,
    default: "Nueva Fila",
  },
  addButtonIconHide: {
    type: Boolean,
    default: true,
  },
  addButtonHide: {
    type: Boolean,
    default: false,
  },
  deleteAllButtonLabel: {
    type: Object,
    default: () => ({ one: "Eliminar", many: "Eliminar todas" }),
  },
  deleteAllButtonHide: {
    type: Boolean,
    default: false,
  },
  hideCheckBox: {
    type: Boolean,
    default: false,
  },
  customRender: {
    type: Object,
    default: () => ({}),
  },
  showIconDeleteAllMultiAction: {
    type: Boolean,
    default: false,
  },
});

function hasMoreThanOneTrue(array: Array<Ref<unknown[]>>) {
  const trueValues = array.filter((value) => value);
  return trueValues.length > 1;
}

const emit = defineEmits(["multiDelete", "addRow"]);

function multiDelete() {
  emit("multiDelete");
}

function emitAddButton() {
  emit("addRow");
}
</script>

<template>
  <div id="multiAcciones" class="flex justify-end align-center md:mt-[-36px]">
    <div class="flex space-x-2">
      <DsButton
        v-if="!deleteAllButtonHide"
        :disabled="!(rowsSelected.filter((row) => row).length > 0)"
        color="danger"
        size="medium"
        @click="multiDelete"
      >
        <DsIcon
          v-if="showIconDeleteAllMultiAction"
          class="mr-1"
          name="trash"
          size="medium"
        />
        {{
          hasMoreThanOneTrue(props.rowsSelected)
            ? deleteAllButtonLabel.many
            : deleteAllButtonLabel.one
        }}
      </DsButton>
      <DsButton
        v-if="!addButtonHide"
        color="success"
        size="medium"
        @click="emitAddButton"
      >
        <DsIcon
          v-if="!addButtonIconHide"
          class="mr-1"
          name="plus"
          size="medium"
        />
        {{ addButtonLabel }}
      </DsButton>

      <component
        :is="customRender?.component"
        v-if="customRender?.component"
        v-bind="customRender?.getProps()"
      />
    </div>
  </div>
  <div class="flex items-center py-3 text-[#000000de]">
    <template v-if="!hideCheckBox">
      {{ rowsSelected.filter((row) => row).length }} fila(s) seleccionada(s)
    </template>
  </div>
</template>

<style scoped></style>
