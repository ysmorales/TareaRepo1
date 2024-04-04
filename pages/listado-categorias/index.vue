<script lang="ts" setup>

import {columns} from "./categoryColumns";
import {dataTable} from "./data";
import DsTable from "~/components/DesignSystem/components/basic/table/DsTable.vue";
import CategoryForm from "~/pages/listado-categorias/form/CategoryForm.vue";

const view = ref<'table' | 'form'>('table')

function handleAdd() {
  view.value = 'form'
}
</script>

<template>
  <h1>Listado de categorías</h1>
  <DsTable
      v-if="view=='table'"
      :columns="columns"
      :data="dataTable"
      :pagination="{
          totalItems: 200,
          currentPage: 1,
          itemsPerPage: 5,
          itemsPerPageOptions: [5, 10, 50],
          }"
      add-button-label="Nueva categoría"
      checkboxSelection sort striped @add-row="handleAdd"/>
  <div v-if="view=='form'">
    <CategoryForm/>
  </div>
</template>

