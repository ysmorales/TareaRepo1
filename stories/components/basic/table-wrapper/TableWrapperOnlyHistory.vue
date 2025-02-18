<script lang="ts" setup>
import DsTable from "../../../../components/DesignSystem/components/basic/table/DsTable.vue";
import {defaultItemsPerPage} from "../../../../components/DesignSystem/utils/constants";
import type {IMeta, IError, IQuery} from "../../../../components/DesignSystem/interfaces/elements";
import type {IPagination} from "../../../../components/DesignSystem/components/basic/table/interface";
import {goTo, goToNewQuery} from "../../../../components/DesignSystem/utils/query";
import {computed, defineProps, defineEmits} from "vue";

interface IProp {
    data: any[] | any;
    columns?: any;
    error?: Partial<IError>;
    loading: boolean;
    othersProps?: Object;
    eventsProps?: Object;
    noUpdateDataOnPagination?: String;
    getData: (detail: any) => any[];
    getPaginator: (detail: any) => IMeta;
}

const $props = withDefaults(defineProps<IProp>(), {});

const emit = defineEmits([
    "view",
    "pageChange",
    "itemsPerPageChange",
    "edit",
    "addRow",
    "multiDelete",
]);

const handlerGoTo = (newQuery: Partial<IQuery>) => {
    const route = {
        query: {
            page: '1',
            paginate: '10'
        }
    };
    const router = {
        push: (location: any) => {
            console.log('Navigating to:', location);
        },
        replace: (location: any) => {
            console.log('Replacing with:', location);
        },
        currentRoute: {
            path: '/mock-path',
            query: {}
        }
    };
    goTo(newQuery, router, route);
};

const handlerFilter = (newQuery: Partial<IQuery>) => {
    const route = {
        query: {
            page: '1',
            paginate: '10'
        }
    };
    const router = {
        push: (location: any) => {
            console.log('Navigating to:', location);
        },
        replace: (location: any) => {
            console.log('Replacing with:', location);
        },
        currentRoute: {
            path: '/mock-path',
            query: {}
        }
    };
    goTo({...newQuery, page: 1}, router, route);
};

const cleanQuery = () => {
    const router = {
        push: (location: any) => {
            console.log('Navigating to:', location);
        },
        replace: (location: any) => {
            console.log('Replacing with:', location);
        },
        currentRoute: {
            path: '/mock-path',
            query: {}
        }
    };
    goToNewQuery({}, router);
};

function handleView(item: string) {
    emit("view", item);
}

function handleEdit(item: string) {
    emit("edit", item);
}

function handleAddRow(item: object) {
    emit("addRow", item);
}

function handleMultiDelete(item: object) {
    emit("multiDelete", item);
}

const pagination = computed(() => {
    const route = {
        query: {
            page: '1',
            paginate: '10'
        }
    };
    return {
        currentPage: Number(route.query.page) || 1,
        totalItems: parseInt(
            $props.getPaginator($props.data)?.total as unknown as string,
            10
        ),
        itemsPerPage: parseInt(
            (route.query.paginate || defaultItemsPerPage) as string,
            10
        ),
        noUpdateDataOnPagination: $props.noUpdateDataOnPagination ?? "no",
    } as unknown as IPagination;
});

const defaultEventProps = {
    addRow: handleAddRow,
    edit: handleEdit,
    filter: handlerFilter,
    clean: cleanQuery,
    multiDelete: handleMultiDelete,
    view: handleView,
    ...$props.eventsProps,
};
</script>

<template>
    <DsTable
        :columns="columns"
        :data="getData(data)"
        :error="error as unknown as boolean"
        :loading="loading"
        :pagination="pagination"
        pagination-border
        striped
        v-bind="othersProps"
        @itemsPerPageChange="(paginate) => handlerGoTo({ paginate })"
        @pageChange="(page) => handlerGoTo({ page })"
        v-on="defaultEventProps"
    >
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData"/>
        </template>
    </DsTable>
</template>
