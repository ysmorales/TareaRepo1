<script lang="ts" setup>
import { DsDropdown } from "~/components/DesignSystem";
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
</script>

<template>
  <DsDropdown label="somee">
    <div class="p-2">
      <div
        v-for="rowOption in typesRowsLayouts"
        class="p-1 hover:bg-blue-200 hover:cursor-pointer min-w-[300px]"
      >
        <div
          :class="[
            `grid grid-cols-${
              rowOption?.row ?? '12'
            } gap-2 place-content-center`,
          ]"
        >
          <div
            v-if="!Array.isArray(rowOption.mode)"
            v-for="columnOption in rowOption.mode.split(',')"
            :class="['p-2 bg-slate-200 ', `col-span-${columnOption}`]"
          ></div>
          <div
            v-if="Array.isArray(rowOption.mode)"
            v-for="columnOption in rowOption.mode"
            :class="[columnOption, 'p-1 bg-slate-200']"
          ></div>
        </div>
      </div>
    </div>
  </DsDropdown>
</template>
