<script lang="ts" setup>
import { DsButton } from "../../../../index.ts";
import { Ref } from "vue";

defineProps({
  rowsSelected: {
    type: Array<Ref<any[]>>,
    required: true,
  },
});
const emit = defineEmits(["multiDelete"]);

function multiDelete() {
  emit("multiDelete");
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
    <DsButton
      :disabled="!(rowsSelected.filter((row) => row).length > 0)"
      color="danger"
      @click="multiDelete"
      >Eliminar todas
    </DsButton>
  </div>
</template>

<style scoped></style>
