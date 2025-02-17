<script lang="ts" setup>
import {competitionStage} from "~/components/Pages/user-list/tableColumn";
import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";
import TableWrapper from "~/components/Pages/tableWrapper.vue";
import type {IMeta} from "~/interfaces/interfaces";
import {DsModal} from "~/components/DesignSystem";
import UserForm from "~/components/Pages/user-list/UserForm.vue";
import useApplications from '~/api-services/applications';

defineProps({
    data: {
        type: Object,
        required: true
    }
})
const loading = ref(false)
const showModal = ref(false)
const applicationsService = useApplications();
const emit = defineEmits(['deleteSuccess'])


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

async function handleMultiDelete(items: { id: number }[]) {
    loading.value = true;
    try {
        const parseIds = items.map(item => item.id);
        const response = await applicationsService.procedure.deleteMulti("/api/users", {ids: parseIds});
        if (response.codigoRetorno == 204) {
            emit('deleteSuccess')
            // Aquí puedes agregar lógica para actualizar la lista de usuarios después de la eliminación
            // Por ejemplo, podrías volver a cargar los datos de la tabla
            // response.value = await applicationsService.procedure.getAll(
            //     "/api/users",
            //     "users",
            //     [query],
            //     false,
            //     {},
            //     true
            // );
        } else {
            console.log('Error al eliminar usuarios');
        }
    } catch (e) {
        console.log('Error al comunicarse con el servidor.');
        console.log('Viendo error en consola.', e);
    } finally {
        loading.value = false;
    }
}

</script>

<template>
    <!--    <DsTable :data="data" checkbox-selection :columns="competitionStage" add-button-label="Nuevo usuario(a)"/>-->
    <DsModal v-model="showModal" :show-footer="false" title="Nuevo usuario(a)">
        <UserForm @cancel="()=>showModal=false" @success="()=>showModal=false"/>
    </DsModal>
    <TableWrapper
        :columns="competitionStage as ITableColumnData[]"
        :data="data"
        :getData="getData"
        :getPaginator="getPaginator"
        :itemsPerPageOptions="[10]"
        :loading="loading"
        :others-props="othersProps"
        @addRow="handleAddRow"
        @edit="handleEdit"
        @multi-delete="handleMultiDelete"
    />
</template>
