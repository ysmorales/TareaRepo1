<script lang="ts" setup>
import {computed, onMounted, ref, watch, watchEffect} from "vue";
import DsPagination from "../pagination/DsPagination.vue";
import DsEmptyComponent from "../empty-component/DsEmptyComponent.vue";
import DsAvatar from "../avatar/DsAvatar.vue";
import DsLink from "../../navigation/link/DsLink.vue";
import {formatRut} from "../../../utils/isValidRut";
import TableFilter from "./components/TableFilter.vue";
import TableMultiAction from "./components/TableMultiAction.vue";
import TableLoading from "./components/TableLoading.vue";
import TableActions from "./components/TableActions.vue";
import TableThSorting from "./components/TableThSorting.vue";
import type {IFilterInfo, IPagination, ITableColumnData} from "./interface";
import {exampleColumn} from "./exampleColumn";
import TableConnectionError from "./components/TableConnectionError.vue";
import ModalDelete from "./components/ModalDelete.vue";

const props = defineProps({
    columns: {
        type: Array as () => ITableColumnData[],
        default: () => [...exampleColumn],
    },
    border: {
        type: Boolean,
        default: false,
    },
    cardMode: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    addButtonLabel: {
        type: String,
        default: "Nueva Fila",
    },
    addButtonIconHide: {
        type: Boolean,
        default: true,
    },
    striped: {
        type: Boolean,
        default: false,
    },
    sort: {
        type: Boolean,
        default: false,
    },
    data: {
        type: Array as () => unknown[],
        default: () => [],
    },
    pagination: {
        type: Object as () => IPagination,
        default: null,
    },
    paginationBorder: {
        type: Boolean,
        default: false,
    },
    checkboxSelection: {
        type: Boolean,
        default: false,
    },
    deleteAllButtonLabel: {
        type: Object,
        default: () => ({one: "Eliminar", many: "Eliminar todas"}),
    },
    deleteAllButtonHide: {
        type: Boolean,
        default: false,
    },
    addButtonHide: {
        type: Boolean,
        default: false,
    },
    disabledPagination: {
        type: Boolean,
        default: false,
    },
    itemsPerPageOptions: {
        type: Array as () => number[],
        default: () => [10, 20, 30],
    },
    messageEmptyComponent: {
        type: String,
        default: "No hay datos disponibles",
    },
    iconEmptyComponent: {
        type: String,
        default: "box",
    },
    hideCheckBox: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    class: {
        type: String,
        default: "",
    },
    filterInfo: {
        type: Object as () => IFilterInfo,
        default: () => ({}),
    },
    modalDelete: {
        type: Object as () => { title?: string; message?: string } | null,
        default: null,
    },
    rowRender: {
        type: Object,
        default: () => ({}),
    },
    multiActionsRender: {
        type: Object,
        default: () => ({}),
    },
    showIconDeleteAllMultiAction: {
        type: Boolean,
        default: false,
    },
});

const totalItems = ref(0);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const rowsSelected = ref<unknown[]>([]);
const allRowsSelected = ref<boolean | null>(false);
const indeterminate = ref(false);
const filterData = ref<[] | null>(null);
const itemDelete = ref({});
const showModalDelete = ref(false);
const filterClassComp = computed(() => props.class);

const reloadButton = computed(() => !!filterData.value);
const calculateTotalItems = computed(() => props.data?.length || 0);
const calculateCurrentPage = computed(() => 1);
const calculateItemsPerPage = computed(() => 10);

const isFetchUpdateFromExternal = () =>
    props.pagination && props.pagination?.noUpdateDataOnPagination !== "yes";

const paginatedData = computed(() => {
    if (isFetchUpdateFromExternal()) {
        return props.data;
    } else {
        const start = (currentPage.value - 1) * parseInt(itemsPerPage.value, 10);
        const end = start + parseInt(itemsPerPage.value, 10);
        return filterData.value
            ? filterData.value.slice(start, end)
            : props.data.slice(start, end);
    }
});

const parseRun = computed(() => {
    if (isFetchUpdateFromExternal()) {
        return paginatedData.value;
    }

    const columnWithRunFilter = props.columns.find(
        (column) => column.filter?.filterType === "run",
    );
    const key = columnWithRunFilter ? columnWithRunFilter.key : null;

    if (key) {
        const parsedData = [...paginatedData.value];
        parsedData.forEach((row) => {
            if (row.hasOwnProperty(key)) {
                row[key] = formatRut(row[key]);
            }
        });
        return parsedData;
    }
    return paginatedData.value;
});

const hasFilter = computed(() => props.columns.some((column) => column.filter));

const emit = defineEmits([
    "pageChange",
    "itemsPerPageChange",
    "reload",
    "view",
    "edit",
    "delete",
    "multiDelete",
    "filter",
    "sort",
    "addRow",
    "checkboxChange",
    "parentAllCheckBoxChange",
    "clean",
]);

onMounted(() => {
    if (isFetchUpdateFromExternal()) {
        totalItems.value = props.pagination.totalItems;
        currentPage.value = props.pagination.currentPage;
        itemsPerPage.value = props.pagination.itemsPerPage;
    } else {
        totalItems.value = calculateTotalItems.value;
        currentPage.value = calculateCurrentPage.value;
        itemsPerPage.value = calculateItemsPerPage.value;
    }
});

watchEffect(() => {
    rowsSelected.value = new Array(props.data?.length || 0).fill(false);
});

watch(
    rowsSelected,
    (newRowsSelected) => {
        const allSelected = newRowsSelected.every(Boolean);
        const someSelected = newRowsSelected.some(Boolean);
        allRowsSelected.value = someSelected ? (allSelected ? true : null) : false;
        indeterminate.value = someSelected && !allSelected;
    },
    {deep: true},
);

watch(
    () => props.pagination,
    (newVal) => {
        totalItems.value = newVal?.totalItems;
        currentPage.value = newVal?.currentPage;
        itemsPerPage.value = newVal?.itemsPerPage;
    },
);

watch(
    () => props.data,
    () => {
        totalItems.value = calculateTotalItems.value;
        currentPage.value = calculateCurrentPage.value;
        itemsPerPage.value = calculateItemsPerPage.value;
    },
);

function handleClickCheckbox() {
    const selected = !allRowsSelected.value;
    rowsSelected.value = new Array(props.data?.length || 0).fill(selected);
    allRowsSelected.value = selected;
}

function itemsPerPageChange(value: number) {
    if (!props.pagination) {
        itemsPerPage.value = value;
    }
    emit("itemsPerPageChange", value);
}

function handleReload() {
    emit("reload");
}

function handleView(row: any) {
    emit("view", row);
}

function handleEdit(row: any) {
    emit("edit", row);
}

function handleDelete(row: any) {
    emit("delete", row);
}

function handlePage(value: number) {
    currentPage.value = value;
    emit("pageChange", value);
}

function handleFilter(value: Record<string, string>) {
    if (isFetchUpdateFromExternal()) {
        emit("filter", value);
    } else {
        filterData.value = props.data.filter((row: any) => {
            return Object.keys(value).every((key) => {
                return String(row[key])
                    .toLowerCase()
                    .includes(String(value[key]).toLowerCase());
            });
        });
        totalItems.value = filterData.value?.length!;
        currentPage.value = 1;
    }
}

function handleMultiDelete() {
    if (!props.modalDelete) {
        emit(
            "multiDelete",
            props.data.filter((_: any, index: number) => rowsSelected.value[index]),
        );
    } else {
        showModalDelete.value = true;
    }
}

function handleMultiDeleteFromModal() {
    emit(
        "multiDelete",
        props.data.filter((_: any, index: number) => rowsSelected.value[index]),
    );
    showModalDelete.value = false;
}

function handleSortClick(value: string) {
    emit("sort", value);
}

function handleAddRow() {
    emit("addRow");
}

function handleCheckChange() {
    emit(
        "checkboxChange",
        props.data.filter((_: any, index: number) => rowsSelected.value[index]),
    );
}

function handleHeadCheckChange() {
    emit(
        "parentAllCheckBoxChange",
        props.data.filter((_: any, index: number) => rowsSelected.value[index]),
    );
}

function handleClean() {
    if (isFetchUpdateFromExternal()) {
        emit("clean");
    } else {
        filterData.value = null;
        totalItems.value = calculateTotalItems.value;
    }
}
</script>
<template>
    <ModalDelete
        v-model="showModalDelete"
        :item="itemDelete"
        :modalDelete="modalDelete"
        @delete="handleMultiDeleteFromModal"
    />
    <div :class="[filterClassComp, 'flex flex-col space-y-2']">
        <TableFilter
            v-if="hasFilter"
            :columns="columns"
            :filter-info="filterInfo"
            @clean="handleClean"
            @filter="handleFilter"
        />
        <TableMultiAction
            v-if="checkboxSelection || Object.keys(multiActionsRender).length > 0"
            :add-button-hide="addButtonHide"
            :add-button-icon-hide="addButtonIconHide"
            :add-button-label="addButtonLabel"
            :custom-render="multiActionsRender"
            :delete-all-button-hide="deleteAllButtonHide"
            :delete-all-button-label="deleteAllButtonLabel"
            :hide-check-box="hideCheckBox"
            :rows-selected="rowsSelected"
            :show-icon-delete-all-multi-action="showIconDeleteAllMultiAction"
            @multi-delete="handleMultiDelete"
            @add-row="handleAddRow"
        />

        <slot v-if="cardMode && loading" name="card-loader">
            <div class="w-full">
                <div
                    v-for="idx in 3"
                    class="shadow rounded-md p-4 w-full mt-4 bg-slate-50"
                >
                    <div class="animate-pulse flex space-x-4">
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-9 bg-slate-200 rounded w-[40%]"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4 w-[50%]">
                                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                </div>
                                <div class="h-2 bg-slate-200 rounded w-[20%]"></div>
                                <div class="h-2 bg-slate-200 rounded w-[40%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </slot>

        <div
            v-for="(row, i) in parseRun"
            v-if="cardMode && !loading"
            :key="'row' + i"
        >
            <div
                v-if="checkboxSelection && !hideCheckBox"
                class="px-2 py-2 w-[30px] relative mb-[-38px] z-10"
            >
                <input
                    v-model="rowsSelected[i]"
                    type="checkbox"
                    @change="handleCheckChange"
                />
            </div>
            <slot :row="row" name="card"/>
        </div>
        <div
            v-if="parseRun.length == 0 && cardMode && !loading"
            class="p-4 border-2 border-gray-200 mb-5 mt-5"
        >
            <DsEmptyComponent class="mt-5 mb-5"/>
        </div>

        <div v-if="!cardMode" class="overflow-x-scroll">
            <table
                :class="[
          'w-full divide-y divide-gray-100 outline-0 shadow-[0_0px_0px_1px_rgba(0,0,0,0.1)]',
          { 'border border-transparent': border },
        ]"
            >
                <thead class="bg-white">
                <tr :class="['py-4', { 'bg-white': striped }]">
                    <th
                        v-if="checkboxSelection && !hideCheckBox"
                        class="px-2 py-2 w-[2%]"
                    >
                        <input
                            ref="checkboxRef"
                            v-model="allRowsSelected"
                            type="checkbox"
                            @change="handleHeadCheckChange"
                            @click="handleClickCheckbox"
                        />
                    </th>
                    <TableThSorting
                        v-for="(column, index) in columns.filter((d) => !d.noShow)"
                        :key="index"
                        :column="column"
                        :column-with="column.size"
                        :index="index"
                        :sort="sort"
                        :striped="striped"
                        :title="column.title"
                        @click="handleSortClick"
                    />
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-300 relative">
                <tr v-if="paginatedData.length == 0">
                    <td
                        :colspan="
                columns.length + (checkboxSelection && !hideCheckBox ? 1 : 0)
              "
                        class="px-2 py-2 text-sm font-medium text-gray-900 w-full h-[200px]"
                    >
                        <DsEmptyComponent
                            v-if="!loading && !error"
                            :icon="iconEmptyComponent"
                            :is-reload-button="reloadButton"
                            :loading="loading"
                            :message="messageEmptyComponent"
                            @reload="handleReload"
                        />
                        <TableConnectionError v-if="error"/>
                    </td>
                </tr>
                <tr
                    v-for="(row, i) in parseRun"
                    :key="'row' + i"
                    :class="[
              'mb-2',
              {
                'bg-gray-100': i % 2 === 1 && striped,
                'bg-white': i % 2 === 0 && striped,
              },
            ]"
                >
                    <td v-if="checkboxSelection && !hideCheckBox" class="px-2 py-2">
                        <input
                            v-model="rowsSelected[i]"
                            type="checkbox"
                            @change="handleCheckChange"
                        />
                    </td>
                    <td
                        v-for="(column, j) in columns.filter((d) => !d.noShow)"
                        :key="'cell' + i + '-' + j"
                        :class="[
                'px-1',
                'py-1',
                'text-sm',
                'font-medium',
                'text-gray-900',
              ]"
                    >
                        <slot
                            v-if="column.customComponent"
                            :row="row"
                            name="customComponent"
                        />
                        <div v-if="!column.actions">
                            {{
                                !column.type && !(rowRender && rowRender[column.key!])
                                    ? row[column.key!]
                                    : ""
                            }}

                            <DsLink
                                v-if="column.type === 'link'"
                                :href="row[column.key!].url"
                            >
                                {{ row[column.key!].name }}
                            </DsLink>
                            <div v-if="column.type === 'avatar'" class="flex items-center">
                                <DsAvatar :src="row[column.key!].url" size="small"/>
                                {{ row[column.key!].name }}
                            </div>
                            <component
                                :is="rowRender[column.key!].component"
                                v-if="
                    rowRender &&
                    rowRender[column.key!] &&
                    rowRender[column.key!]?.component
                  "
                                v-bind="rowRender[column.key!].getProps(row, parseRun)"
                            />
                            <div
                                v-if="rowRender && rowRender[column.key!]?.render"
                                class="flex items-center"
                            >
                                {{ rowRender[column.key!]?.render(row) }}
                            </div>
                        </div>
                        <div v-else :class="['flex', column.customStyle || 'justify-start']">
                            <component
                                :is="rowRender[column.key!].component"
                                v-if="
                    rowRender &&
                    rowRender[column.key!] &&
                    rowRender[column.key!]?.component
                  "
                                v-bind="rowRender[column.key!].getProps(row, parseRun)"
                            />
                            <TableActions
                                v-else
                                :column="column"
                                :row="row"
                                @delete="handleDelete(row)"
                                @edit="handleEdit(row)"
                                @view="handleView(row)"
                            />
                            <slot :row="row" name="actions"/>
                        </div>
                    </td>
                </tr>
                <TableLoading v-if="loading"/>
                </tbody>
            </table>
        </div>

        <div
            v-if="!disabledPagination"
            :class="['flex py-2 justify-end ', { '': paginationBorder }]"
        >
            <DsPagination
                :current-page="currentPage"
                :items-per-page="itemsPerPage"
                :items-per-page-options="itemsPerPageOptions"
                :total-items="totalItems"
                @change="handlePage"
                @items-per-page-change="itemsPerPageChange"
            />
        </div>
    </div>
</template>
