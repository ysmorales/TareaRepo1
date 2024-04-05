<script lang="ts" setup>

import {columns} from "./columns";
import {data} from "./data";
import DsTable from "~/components/DesignSystem/components/basic/table/DsTable.vue";
import ProjectForm from "~/pages/listado-subsitios/form/ProjectForm.vue";

const view = ref<'table' | 'form'>('table')

function handleAdd() {
  view.value = 'form'
}

function handleCancelForm() {
  view.value = 'table'
}
</script>

<template>
  <h1>{{ view == 'table' ? 'Listado proyectos' : 'Nuevo proyecto' }}</h1>
  <DsTable
      v-if="view=='table'"
      :columns="columns"
      :data="data"
      :pagination="{
          totalItems: 200,
          currentPage: 1,
          itemsPerPage: 5,
          itemsPerPageOptions: [5, 10, 50],
          }"
      add-button-label="Nuevo Proyecto" checkboxSelection sort striped @add-row="handleAdd"/>
  <div v-if="view=='form'">
    <ProjectForm @cancelar="handleCancelForm"/>
  </div>
</template>

<style scoped>

</style>