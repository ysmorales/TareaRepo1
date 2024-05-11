<script lang="ts" setup>
import DsIcon from "../../icon/DsIcon.vue";
import type{ Ref } from "vue";
import DsButton from "../../button/DsButton.vue";

const props = defineProps({
  rowsSelected: {
    type: Array<Ref<any[]>>,
    default: () => [],
    required: true,
  },
  addButtonLabel: {
    type: String,
    default: "Nueva Fila",
  },
  addButtonHide: {
    type: Boolean,
    default: false,
  },
  deleteAllButtonLabel: {
    type: Object,
    default: () => ({ one: "Eliminar", many: "Eliminar todas" }),
  },
});
console.log(
  "viendo filas seleccionadas",
  hasMoreThanOneTrue(props.rowsSelected),
);

function hasMoreThanOneTrue(array: Array<Ref<any[]>>) {
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
  <div
    id="multiAcciones"
    class="flex justify-between p-2 border border-gray-300"
  >
    <div class="flex items-center px-4 py-2 text-[#000000de]">
      {{ rowsSelected.filter((row) => row).length }} fila(s) seleccionada(s)
    </div>
    <div class="flex">
      <DsButton v-if="!addButtonHide" class="mr-1" @click="emitAddButton">
        <DsIcon name="plus" />
        {{ addButtonLabel }}
      </DsButton>
      <DsButton
        :disabled="!(rowsSelected.filter((row) => row).length > 0)"
        color="danger"
        @click="multiDelete"
        >{{
          hasMoreThanOneTrue(props.rowsSelected)
            ? deleteAllButtonLabel.many
            : deleteAllButtonLabel.one
        }}
      </DsButton>
    </div>
  </div>
</template>

<style scoped></style>
