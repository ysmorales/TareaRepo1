<script lang="ts" setup>
import { DsDropdown } from "~/components/DesignSystem";
import Item from "./ItemTypeLayout.vue";
const typesRowsLayouts = [
  {
    mode: "12",
  },
  {
    mode: "6,6",
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
        <Item
          v-if="selected?.mode"
          :data="selected"
          @onSelect="handlerSelect"
        />
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
</template>
