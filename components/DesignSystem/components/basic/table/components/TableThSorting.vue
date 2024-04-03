<script lang="ts" setup>
import {ref} from "vue";
import DsIcon from "../../icon/DsIcon.vue";

defineProps({
  title: {
    type: String,
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
</script>

<template>
  <th
      :key="'col' + index"
      :class="[
      'px-2 py-2 text-left text-sm uppercase group cursor-pointer',
      { 'text-white': striped },
      { 'text-gray-500': !striped },
    ]"
      @click="handleClick"
  >
    {{ title }}
    <DsIcon
        v-if="sort"
        :class="{
  'opacity-0 group-hover:opacity-50': stateSort === 'default',
  'opacity-100': stateSort === 'up' || stateSort === 'down',
}"
        :name="
        {
          default: 'arrow-up',
          up: 'arrow-up',
          down: 'arrow-down',
        }[stateSort]
      "
    />
  </th>
</template>
