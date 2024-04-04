<script lang="ts" setup>

import {columns} from "./columns";
import {data} from "./data";
import DsTable from "~/components/DesignSystem/components/basic/table/DsTable.vue";
</script>

<template>
  <h1>Listado subsitios</h1>
  <DsTable
      :columns="columns"
      :data="data"
      :pagination="{
          totalItems: 200,
          currentPage: 1,
          itemsPerPage: 5,
          itemsPerPageOptions: [5, 10, 50],
          }" checkboxSelection sort striped/>
</template>

<style scoped>

</style>