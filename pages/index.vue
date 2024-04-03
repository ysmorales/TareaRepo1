<script lang="ts" setup>
import DsTable from "~/components/DesignSystem/components/basic/table/DsTable.vue";
</script>

<template>
  <div class="flex flex-col">
    <h1>Listado de prototipos</h1>
    <DsTable
        :columns="[{title:'Name',key:'name',filter:true},{title:'Email',key:'email'},{title:'RUN',key:'run',filter:true}]"
        :data="[{name:'John Doe',email:'john.doe@example.com',run:'12345'},{name:'Jane Doe',email:'jane.doe@example.com',run:'67890'},{name:'Bill Smith',email:'bill.smith@example.com',run:'98765'},{name:'Larry Johnson',email:'larry.johnson@example.com',run:'11123'},{name:'Sarah Connor',email:'sarah.connor@example.com',run:'22234'},{name:'Michael Jordan',email:'michael.jordan@example.com',run:'33345'},{name:'John Doe',email:'john.doe@example.com',run:'12345'},{name:'Jane Doe',email:'jane.doe@example.com',run:'67890'},{name:'Bill Smith',email:'bill.smith@example.com',run:'98765'},{name:'Larry Johnson',email:'larry.johnson@example.com',run:'11123'},{name:'Sarah Connor',email:'sarah.connor@example.com',run:'22234'},{name:'Michael Jordan',email:'michael.jordan@example.com',run:'33345'}]"
        :pagination="{
          totalItems: 200,
          currentPage: 1,
          itemsPerPage: 5,
          itemsPerPageOptions: [5, 10, 50],
          }" checkboxSelection sort striped/>
  </div>
</template>

