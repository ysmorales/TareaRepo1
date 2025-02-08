<script setup lang="ts">

import {DsTable} from "~/components/DesignSystem";
import {competitionStage} from "~/components/Pages/user-list/tableColumn";

</script>

<template>
    <DsTable checkbox-selection :columns="competitionStage" add-button-label="Nuevo usuario(a)"/>
</template>
