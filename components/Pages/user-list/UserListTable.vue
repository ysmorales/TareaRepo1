<script setup lang="ts">
import {competitionStage} from "~/components/Pages/user-list/tableColumn";
import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";
import TableWrapper from "~/components/Pages/tableWrapper.vue";
import type {IMeta} from "~/interfaces/interfaces";
defineProps({
    data:{
        type: Object,
        required: true
    }
})
const loading=ref(false)

function getData(data:any){
    return data?.data
}
const othersProps = {
    checkboxSelection: true,
    addButtonLabel:"Nuevo usuario(a)",
};
function getPaginator(detail: any): IMeta {
    return detail?.meta
}
function handleEdit() {
    alert('Hello world!!!')
}
function handleAddRow() {
    alert('Adicionar fila')
}

</script>

<template>
<!--    <DsTable :data="data" checkbox-selection :columns="competitionStage" add-button-label="Nuevo usuario(a)"/>-->
    <TableWrapper
        :columns="competitionStage as ITableColumnData[]"
        :data="data"
        :getData="getData"
        :getPaginator="getPaginator"
        :loading="loading"
        :others-props="othersProps"
        @edit="handleEdit"
        @addRow="handleAddRow"
    />
</template>
