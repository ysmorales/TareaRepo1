<script lang="ts" setup>


import type {ITableColumnData} from "../interface";
import {exampleColumn} from "../exampleColumn";
import DsButton from "../../button/DsButton.vue";

defineProps({
  column: {
    type: Object as () => ITableColumnData,
    default: () => [...exampleColumn],
  },
  row: {
    required: true,
  },
});
const emit = defineEmits(["delete", "edit", "view"]);

function handleClick(type: "edit" | "view" | "delete") {
  switch (type) {
    case "delete":
      emit("delete");
      break;
    case "edit":
      emit("edit");
      break;
    case "view":
      emit("view");
      break;
  }
}
</script>

<template>
  <div class="flex justify-end">
    <DsButton
        v-if="column.actions?.view"
        class="mr-1"
        color="tertiary"
        @click="handleClick('view')"
    >Ver
    </DsButton>
    <DsButton
        v-if="column.actions?.edit"
        class="mr-1"
        color="tertiary"
        @click="handleClick('edit')"
    >Editar
    </DsButton>
    <DsButton
        v-if="column.actions?.delete"
        class="mr-1"
        color="tertiary"
        @click="handleClick('delete')"
    >Borrar
    </DsButton>
  </div>
</template>

<style scoped></style>
