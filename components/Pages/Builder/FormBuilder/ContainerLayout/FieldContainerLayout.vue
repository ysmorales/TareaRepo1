<script lang="ts" setup>
import { DsDropdown } from "~/components/DesignSystem";
import Item from "./ItemTypeLayout.vue";
const typesRowsLayouts = [
  {
    mode: "12",
  },
  {
    mode: "6,6",
    row: 12,
  },
  {
    mode: "1,1,1",
    row: 3,
  },
  {
    mode: "3,3,3,3",
  },
  {
    mode: "5,7",
  },
  {
    mode: "7,5",
  },
  {
    mode: "1,2",
    row: 3,
  },
  {
    mode: "2,1",
    row: 3,
  },
  {
    mode: "1,3",
    row: 4,
  },
  {
    mode: "3,1",
    row: 4,
  },
  {
    mode: "3,6,3",
  },
  {
    mode: "3,3,6",
  },
  {
    mode: "6,3,3",
  },
  {
    mode: "1,1,2",
    row: 4,
  },
  {
    mode: "2,1,1",
    row: 4,
  },
  {
    mode: "2,2,2,6",
  },
  {
    mode: "6,2,2,2",
  },

  {
    mode: ["row-span-3", "col-span-2", "row-span-2 col-span-2"],
    row: 3,
    extraClass: "grid-flow-col",
  },
  {
    mode: ["row-span-2 col-span-2", "row-span-3", "col-span-2"],
    row: 3,
    extraClass: "grid-flow-col",
  },
];
const selected = ref({});

const emit = defineEmits(["handlerChange"]);
const handlerSelect = (select) => {
  selected.value = select;
  emit("handlerChange", { layout: select });
};
</script>

<template>
  <DsDropdown label="somee">
    <template v-slot:button>
      <div class="min-w-[200px] hover:cursor-pointer">
        <Item v-if="selected?.mode" :data="selected" />
        <label v-if="!selected?.mode">Selecciona</label>
      </div>
    </template>
    <div class="p-2">
      <div
        v-for="rowOption in typesRowsLayouts"
        class="p-1 hover:bg-blue-200 hover:cursor-pointer min-w-[300px]"
      >
        <Item :data="rowOption" @onSelect="handlerSelect" />
      </div>
    </div>
  </DsDropdown>
  <div
    class="grid grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8 grid-cols-12"
  >
    <div
      class="col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12"
    ></div>
    <div class="row-span-2 col-span-2 grid-flow-col row-span-3"></div>
  </div>
</template>
