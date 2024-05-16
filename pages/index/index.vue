<script lang="ts" setup>
import DsTable from "~/components/DesignSystem/components/basic/table/DsTable.vue";
import {dataTable} from "./data";
import {prototipeColumns} from "~/pages/index/prototipeColumns";


const addRow = () => {
    navigateTo('/builder')
}
</script>

<template>
    <div class="flex flex-col">
        <h1>Listado de prototipos</h1>
        <DsTable
            :columns="prototipeColumns"
            :data="dataTable"
            :pagination="{
          totalItems: 200,
          currentPage: 1,
          itemsPerPage: 5,
          itemsPerPageOptions: [5, 10, 50],
          }"
            add-button-label="Agregar prototipo"
            border
            checkboxSelection
            pagination-border sort striped @addRow="addRow"/>
    </div>
</template>

