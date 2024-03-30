<script lang="ts" setup>
import { ref, defineEmits } from "vue";
import { ITableColumn } from "../interface.ts";
import DsInput from "../../../form/input/DsInput.vue";
import DsButton from "../../button/DsButton.vue";

defineProps({
  columns: {
    type: Array as () => ITableColumn[],
    default: () => [],
  },
});

const searchValues = ref<Record<string, string>>({});

const emit = defineEmits(["filter", "clean"]);

function handleSearch() {
  emit("filter", searchValues.value);
}

function handleClean() {
  searchValues.value = {};
  emit("clean");
}
</script>
<template>
  <fieldset class="border border-gray-300">
    <legend class="font-bold mb-2 text-gray-500"></legend>
    <div class="flex justify-between">
      <div class="flex p-2">
        <div
          v-for="(column, index) in columns"
          :key="'filter' + index"
          class="mr-2"
        >
          <div v-if="column.filter">
            <DsInput
              :id="column.key"
              v-model="searchValues[column.key as string]"
              :label="column.title"
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center">
        <DsButton
          class="m-1 max-h-[50px]"
          color="tertiary"
          @click="handleSearch"
          >Buscar
        </DsButton>
        <DsButton class="m-1 max-h-[50px]" color="tertiary" @click="handleClean"
          >Limpiar
        </DsButton>
      </div>
    </div>
  </fieldset>
</template>
