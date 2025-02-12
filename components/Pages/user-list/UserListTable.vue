<script setup lang="ts">
import {DsTable} from "~/components/DesignSystem";
import {competitionStage} from "~/components/Pages/user-list/tableColumn";
defineProps({
    data:{
        type: Array,
        required: true
    }
})




</script>

<template>
    <DsTable :data="data" checkbox-selection :columns="competitionStage" add-button-label="Nuevo usuario(a)"/>
</template>
