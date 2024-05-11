<script lang="ts" setup>
import DsPagination from "../pagination/DsPagination.vue";
import DsEmptyComponent from "../empty-component/DsEmptyComponent.vue";
import TableFilter from "./components/TableFilter.vue";
import TableMultiAction from "./components/TableMultiAction.vue";
import TableLoading from "./components/TableLoading.vue";
import TableActions from "./components/TableActions.vue";
import TableThSorting from "./components/TableThSorting.vue";
import type { IPagination, ITableColumnData } from "./interface";

import DsAvatar from "../avatar/DsAvatar.vue";
import DsLink from "../../navigation/link/DsLink.vue";

import { onMounted, onUpdated, ref, watch, watchEffect, computed } from "vue";
import {exampleColumn} from "./exampleColumn";

const props = defineProps({
  columns: {
    type: Array as () => ITableColumnData[],
    default: () => [...exampleColumn],
  },
  border: {
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
  striped: {
    type: Boolean,
    default: false,
  },
  sort: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array as any,
    default: () => [
      {
        dessert: "Dessert 1",
        calories: 100,
        fat: 5,
        carbs: 50,
        protein: 3,
      },
      {
        dessert: "Dessert 2",
        calories: 200,
        fat: 10,
        carbs: 80,
        protein: 6,
      },
    ],
  },
  pagination: {
    type: Object as () => IPagination,
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
    default: () => ({ one: "Eliminar", many: "Eliminar todas" }),
  },
});
const totalItems = ref(props.pagination?.totalItems);
const currentPage = ref(props.pagination?.currentPage);
const itemsPerPage = ref(props.pagination?.itemsPerPage);
const itemsPerPageOptions = ref(props.pagination?.itemsPerPageOptions);
const rowsSelected = ref<any[]>([]);
const allRowsSelected = ref<boolean | null>(false);
const indeterminate = ref(false);

function handleClickCheckbox() {
  const selected = !allRowsSelected.value;
  rowsSelected.value = new Array(props.data.length).fill(selected);
  allRowsSelected.value = selected;
}

watchEffect(() => {
  // Whenever props.data changes, recreate rowsSelected array with the updated length
  rowsSelected.value = new Array(props.data.length).fill(false);
});
watch(
  rowsSelected,
  (newRowsSelected) => {
    const allSelected = newRowsSelected.every(Boolean);
    const someSelected = newRowsSelected.some(Boolean);
    allRowsSelected.value = someSelected ? (allSelected ? true : null) : false;
    indeterminate.value = someSelected && !allSelected;
  },
  { deep: true },
);
const checkboxRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  if (checkboxRef && checkboxRef.value) {
    checkboxRef.value.indeterminate = indeterminate.value;
  }
});

onUpdated(() => {
  if (checkboxRef && checkboxRef.value) {
    checkboxRef.value.indeterminate = indeterminate.value;
  }
});
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
]);

watch(
  () => props.pagination,
  (newVal) => {
    totalItems.value = newVal?.totalItems;
    currentPage.value = newVal?.currentPage;
    itemsPerPage.value = newVal?.itemsPerPage;
    itemsPerPageOptions.value = newVal?.itemsPerPageOptions;
  },
);

function itemsPerPageChange(value: number) {
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

function handleFilter(value: number) {
  emit("filter", value);
}

function handleMultiDelete() {
  emit(
    "multiDelete",
    props.data.filter((_: any, index: number) => rowsSelected.value[index]),
  );
}

function handleSortClick(value: string) {
  emit("sort", value);
}

function handleAddRow() {
  emit("addRow");
}

const hasFilter = computed(() => props.columns.some((column) => column.filter));

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
</script>
<template>
  <TableFilter v-if="hasFilter" :columns="columns" @filter="handleFilter" />
  <TableMultiAction
    v-if="checkboxSelection"
    :add-button-label="addButtonLabel"
    :delete-all-button-label="deleteAllButtonLabel"
    :rows-selected="rowsSelected"
    @multiDelete="handleMultiDelete"
    @add-row="handleAddRow"
  />
  <table
    :class="[
      'w-full divide-y divide-gray-300',
      { 'border border-gray-300': border },
    ]"
  >
    <thead class="bg-gray-50">
      <tr :class="['h-[60px]', { 'bg-gray-500': striped }]">
        <th v-if="checkboxSelection" class="px-2 py-2 w-[2%]">
          <input
            ref="checkboxRef"
            v-model="allRowsSelected"
            type="checkbox"
            @change="handleHeadCheckChange"
            @click="handleClickCheckbox"
          />
        </th>
        <TableThSorting
          v-for="(column, index) in columns"
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
      <tr v-if="!(data.length > 0)">
        <td
          :colspan="columns.length"
          class="px-2 py-2 text-sm font-medium text-gray-900 w-full"
        >
          <DsEmptyComponent :loading="loading" @reload="handleReload" />
        </td>
      </tr>
      <tr
        v-for="(row, i) in data"
        :key="'row' + i"
        :class="[
          'mb-2',
          {
            'bg-gray-300': i % 2 === 1 && striped,
            'bg-white': i % 2 === 0 && striped,
          },
        ]"
      >
        <td v-if="checkboxSelection" class="px-2 py-2">
          <input
            v-model="rowsSelected[i]"
            type="checkbox"
            @change="handleCheckChange"
          />
        </td>
        <td
          v-for="(column, j) in columns"
          :key="'cell' + i + '-' + j"
          :class="['px-1', 'py-1', 'text-sm', 'font-medium', 'text-gray-900']"
        >
          <div v-if="!column.actions">
            {{ !column.type ? row[column.key!] : "" }}
            <DsLink v-if="column.type === 'link'" :href="row[column.key!].url"
              >{{ row[column.key!].name }}
            </DsLink>
            <div v-if="column.type === 'avatar'" class="flex items-center">
              <DsAvatar :src="row[column.key!].url" size="small" />
              {{ row[column.key!].name }}
            </div>
          </div>
          <div v-else class="flex justify-end">
            <TableActions
              :column="column"
              :row="row"
              @delete="handleDelete(row)"
              @edit="handleEdit(row)"
              @view="handleView(row)"
            />
            <slot :row="row" name="actions"></slot>
          </div>
        </td>
      </tr>
      <TableLoading v-if="loading" />
    </tbody>
  </table>
  <div
    v-if="pagination"
    :class="[
      'flex p-2 justify-end ',
      { 'border border-gray-300': paginationBorder },
    ]"
  >
    <DsPagination
      :current-page="currentPage"
      :items-per-page="itemsPerPage"
      :items-per-page-options="itemsPerPageOptions"
      :total-items="totalItems"
      @change="handlePage"
      @itemsPerPageChange="itemsPerPageChange"
    />
  </div>
</template>
