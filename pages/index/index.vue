<script lang="ts" setup>
import DsTable from "~/components/DesignSystem/components/basic/table/DsTable.vue";
import {dataTable} from "./data";
</script>

<template>
  <div class="flex flex-col">
    <h1>Listado de prototipos</h1>
    <DsTable
        :columns="[{title:'Name',key:'name',filter:true},{title:'Email',key:'email'},{title:'RUN',key:'run',filter:true},{title:'Actions',actions:{edit:true,delete:true,view:true}}]"
        :data="dataTable"
        :pagination="{
          totalItems: 200,
          currentPage: 1,
          itemsPerPage: 5,
          itemsPerPageOptions: [5, 10, 50],
          }" checkboxSelection sort striped/>
  </div>
</template>

