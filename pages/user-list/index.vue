<script lang="ts" setup>
import {DsIcon, DsTypography} from "~/components/DesignSystem";
import UserListTable from "~/components/Pages/user-list/UserListTable.vue";
import useApplications from '~/api-services/applications';
import {useRoute} from 'vue-router';
import {ref, computed, onBeforeMount} from 'vue';

interface UserResponse {
    headers: Record<string, any>;
    data: {
        data: Array<{
            id: number;
            name: string;
            email: string;
            email_verified_at: string | null;
            created_at: string;
            updated_at: string;
            role: string | null;
            empresa: string | null;
        }>;
        respuesta: {
            original: Array<{
                id: number;
                name: string;
                email: string;
                email_verified_at: string | null;
                created_at: string;
                updated_at: string;
                role: string | null;
                empresa: string | null;
            }>;
        }
    }

    exception: any;
}

const route = useRoute();
const query = computed(() => route.query);
const router = useRouter();
const applicationsService = useApplications();
const response = ref<UserResponse | null>(null);

const fetchData = async () => {
    response.value = await applicationsService.procedure.getAll(
        "/api/users",
        "users",
        [query],
        false,
        {},
        true
    );
};

onBeforeMount(async () => {
    if (!query.value.paginate || !query.value.page) {
        await router.replace({
            query: {
                ...query.value,
                paginate: query.value.paginate || '10',
                page: query.value.page || '1',
            },
        });
    }
    await fetchData();
});

function handleDeleteSuccess() {
    fetchData();
}

function handleUpdate() {
    fetchData()
}
</script>

<template>
    <div class="p-5">
        <div class="flex">
            <DsIcon class="mr-5" name="arrow-right" size="medium"/>
            <DsTypography variant="h1">Listado de usuario(a)</DsTypography>
        </div>
        <DsTypography>Gestiona roles y edita usuarios.</DsTypography>
        <div class="mt-10">
            <UserListTable :data="response?.data!" @update="handleUpdate" @delete-success="handleDeleteSuccess"/>
        </div>
    </div>
</template>