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

const computedClass = computed(() => {
  return stateSort.value === 'default'
      ? 'opacity-0 group-hover:opacity-50'
      : (stateSort.value === 'up' || stateSort.value === 'down')
          ? 'opacity-100'
          : '';
});
</script>

<template>
  <th
      :key="'col' + index"
      :class="[
      'px-2 py-2  text-sm uppercase group cursor-pointer',{'text-center':title==='Actions'},
      { 'text-white': striped },
      { 'text-gray-500': !striped },
    ]"
      @click="handleClick"
  >
    {{ title }}
    <DsIcon
        v-if="sort"
        :class="computedClass"
        :name="
        {
          default: 'arrow-up',
          up: 'arrow-up',
          down: 'arrow-down',
        }[stateSort]|| 'default'
      "
    />
  </th>
</template>
