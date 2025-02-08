<script setup lang="ts">

import {DsIcon, DsTypography} from "~/components/DesignSystem";
import UserListTable from "~/components/Pages/user-list/UserListTable.vue";
</script>

<template>
<div class="p-5">
    <div class="flex">
        <DsIcon class="mr-5" name="arrow-right" size="medium"/>
        <DsTypography variant="h1">Listado de usuario(a)</DsTypography>
    </div>
    <DsTypography>Gestiona roles y edita usuarios.</DsTypography>
    <div class="mt-10">
   <UserListTable/>
    </div>

</div>
</template>

