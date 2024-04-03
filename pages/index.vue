<script lang="ts" setup>
import DsTable from "~/components/DesignSystem/components/basic/table/DsTable.vue";
</script>

<template>
  <div class="flex flex-col">
    <h1>Listado de prototipos</h1>
    <DsTable
        :columns="[{title:'Name',key:'name',filter:true},{title:'Email',key:'email'},{title:'RUN',key:'run',filter:true}]"
        :data="[{0:{name:'John Doe',email:'john.doe@example.com',run:'12345'},1:{name:'Jane Doe',email:'jane.doe@example.com',run:'67890'},2:{name:'Bill Smith',email:'bill.smith@example.com',run:'98765'},3:{name:'Larry Johnson',email:'larry.johnson@example.com',run:'11123'},4:{name:'Sarah Connor',email:'sarah.connor@example.com',run:'22234'},5:{name:'Michael Jordan',email:'michael.jordan@example.com',run:'33345'},6:{name:'John Doe',email:'john.doe@example.com',run:'12345'},7:{name:'Jane Doe',email:'jane.doe@example.com',run:'67890'},8:{name:'Bill Smith',email:'bill.smith@example.com',run:'98765'},9:{name:'Larry Johnson',email:'larry.johnson@example.com',run:'11123'},10:{name:'Sarah Connor',email:'sarah.connor@example.com',run:'22234'},11:{name:'Michael Jordan',email:'michael.jordan@example.com',run:'33345'}}]"
        :pagination="{
          totalItems: 200,
          currentPage: 1,
          itemsPerPage: 5,
          itemsPerPageOptions: [5, 10, 50],
          }" checkboxSelection sort striped/>
  </div>
</template>

