<script lang="ts" setup>
import type { IIconColor, IIconSize } from "../../../interfaces/elements";
import {
  predefinedClasses,
  textColorClasses,
  iconSizeClasses,
} from "../../../common/propsStyle";
import { filterClass } from "../../../utils/filterClass";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },

  prefix: {
    type: String,
    default: "las",
  },

  color: {
    type: String as () => IIconColor,
    default: null,
  },

  size: {
    type: String as () => IIconSize,
    default: "default",
  },

  rotate: {
    type: Number,
    default: null,
  },

  class: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["click"]);

function handleClick() {
  emit("click");
}

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class, [
    "cursor-pointer",
    "opacity-0",
    "group-hover:opacity-50",
  ]);
});

const cssClasses = computed(() => {
  let result = [filterClassComp.value, iconSizeClasses[props.size]];

  if (props.color) {
    result.push(textColorClasses[props.color]);
  }

  if (props.rotate) {
    result.push(`transform la-rotate-${props.rotate}`);
  }

  return result;
});

const isImageUrl = computed((): boolean | null => {
  return props.name.endsWith(".svg");
});

const iconClasses = computed(() => `${props.prefix} la-${props.name}`);
</script>

<template>
  <i
    v-if="!isImageUrl"
    :class="[cssClasses, iconClasses]"
    @click="handleClick"
  />

  <img
    v-else
    :class="['w-6 mr-2 icon-blue', cssClasses]"
    :src="name"
    alt="icon image"
    aria-hidden="true"
    @click="handleClick"
  />
</template>
