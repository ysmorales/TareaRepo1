<script lang="ts" setup>
import type { IIconColor, IIconSize } from "../../../interfaces/elements";
import {
  textColorClasses,
  iconSizeClasses,
  imageColorClassesSvg,
} from "../../../common/propsStyle";
import { computed } from "vue";
import { iconSizeClass, imagenIconSizeClass } from "./library";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  iconStyle: {
    type: String,
    default: "",
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
    type: String as () => string | (string | any)[],
    default: "",
  },
});
const emit = defineEmits(["click"]);

function handleClick() {
  emit("click");
}

const filterClassComp = computed(() => {
  // return filterClass(predefinedClasses, props.class, [
  //   "cursor-pointer",
  //   "opacity-0",
  //   "group-hover:opacity-50",
  // ]);
  return props.class;
});

const cssClasses = computed(() => {
  let result = [filterClassComp.value, iconSizeClasses[props.size]];

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
    :class="[
      iconStyle,
      cssClasses,
      iconClasses,
      textColorClasses[props.color],
      iconSizeClass[size],
    ]"
    @click="handleClick"
  />

  <img
    v-else
    :class="[
      'w-6 icon-blue',
      cssClasses,
      imageColorClassesSvg[props.color],
      imagenIconSizeClass[size],
    ]"
    :src="name"
    alt="icon image"
    aria-hidden="true"
    @click="handleClick"
  />
</template>
