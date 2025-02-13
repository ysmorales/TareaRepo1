<script lang="ts" setup>
import {competitionStage} from "~/components/Pages/user-list/tableColumn";
import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";
import TableWrapper from "~/components/Pages/tableWrapper.vue";
import type {IMeta} from "~/interfaces/interfaces";
import {DsModal} from "~/components/DesignSystem";
import UserForm from "~/components/Pages/user-list/UserForm.vue";

defineProps({
    data: {
        type: Object,
        required: true
    }
})
const loading = ref(false)
const showModal = ref(false)

function getData(data: any) {
    return data?.data
}

const othersProps = {
    checkboxSelection: true,
    addButtonLabel: "Nuevo usuario(a)",
};

function getPaginator(detail: any): IMeta {
    return detail?.meta
}

function handleEdit() {
    alert('Hello world!!!')
}

function handleAddRow() {
    showModal.value = true
}

</script>

<template>
    <!--    <DsTable :data="data" checkbox-selection :columns="competitionStage" add-button-label="Nuevo usuario(a)"/>-->
    <DsModal v-model="showModal" :show-footer="false" title="Nuevo usuario(a)">
        <UserForm @cancel="()=>showModal=false"/>
    </DsModal>
    <TableWrapper
        :columns="competitionStage as ITableColumnData[]"
        :data="data"
        :getData="getData"
        :getPaginator="getPaginator"
        :loading="loading"
        :others-props="othersProps"
        @addRow="handleAddRow"
        @edit="handleEdit"
    />
</template>
