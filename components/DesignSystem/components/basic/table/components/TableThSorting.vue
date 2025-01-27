<script lang="ts" setup>
import {ref, computed} from "vue";
import DsIcon from "../../icon/DsIcon.vue";
import type {ITableColumnData} from "../interface";
import {exampleColumn} from "../exampleColumn";

defineProps({
    title: {
        type: String,
    },
    columnWith: {
        type: String,
        default: "",
    },
    index: {
        type: Number,
    },
    striped: {
        type: Boolean,
        default: false,
    },
    sort: {
        type: Boolean,
        default: false,
    },
    column: {
        type: Object as () => ITableColumnData,
        default: () => [...exampleColumn],
    },
});
const emits = defineEmits(["click"]);
const stateSort = ref("default");

function handleClick() {
    switch (stateSort.value) {
        case "default":
            stateSort.value = "up";
            emits("click", stateSort.value);
            break;
        case "down":
            stateSort.value = "default";
            emits("click", stateSort.value);
            break;
        case "up":
            stateSort.value = "down";
            emits("click", stateSort.value);
            break;
    }
}

const computedClass = computed(() => {
    return stateSort.value === "default"
        ? "opacity-0 group-hover:opacity-50"
        : stateSort.value === "up" || stateSort.value === "down"
            ? "opacity-100"
            : "";
});
</script>

<template>
    <th
        :key="'col' + index"
        :class="[
      columnWith,
      'px-2 py-2 group cursor-pointer',
      { [column.customStyle as string]: column.customStyle },
      { 'text-dark-500': striped },
      { 'text-gray-500': !striped },
    ]"
        @click="handleClick"
    >
        <div :class="['flex',{ [column.customStyle as string]: column.customStyle },
        { 'justify-start': !column.customStyle && column.actions }]">
            {{ title }}
        </div>
        <DsIcon
            v-if="sort"
            :class="computedClass"
            :name="
        {
          default: 'arrow-up',
          up: 'arrow-up',
          down: 'arrow-down',
        }[stateSort] || 'default'
      "
        />
    </th>
</template>
