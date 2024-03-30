<script lang="ts" setup>
import { colorClasses, predefinedClasses } from "../../../common/propsStyle";
import type { IColor } from "../../../interfaces/elements";
import { filterClass } from "../../../utils/filterClass";
import { computed } from "vue";

const props = defineProps({
  text: {
    default: "Neutral",
  },

  color: {
    type: String as () => IColor,
    default: "neutral",
  },

  class: {
    default: "",
  },
});

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class, ["font-robotoSlab"]);
});

const cssClasses = computed(() =>
  [
    filterClassComp.value,
    colorClasses[props.color],
    "rounded",
    "text-xs",
    "px-2",
    "py-1",
  ].join(" "),
);
</script>

<template>
  <span :class="cssClasses">
    {{ text }}
  </span>
</template>
