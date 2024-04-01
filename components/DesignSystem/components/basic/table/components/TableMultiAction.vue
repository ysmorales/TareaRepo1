<script lang="ts" setup>
import { DsButton } from "../../../../index.ts";
import { Ref } from "vue";
import DsIcon from "../../icon/DsIcon.vue";

defineProps({
  rowsSelected: {
    type: Array<Ref<any[]>>,
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
});
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
        >Eliminar todas
      </DsButton>
    </div>
  </div>
</template>

<style scoped></style>
