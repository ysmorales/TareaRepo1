<script lang="ts" setup>
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import type { IButtonColor, IButtonSize, IButtonType } from "./interfaces";
import { colorButtonClass, sizeButtonClass } from "./library";
import useFocus from "../../../composables/useFocus";
import DsIcon from "../../basic/icon/DsIcon.vue";
import DsSpinner from "../spinner/DsSpinner.vue";
import { computed } from "vue";
//resolve conflict and refactor
const props = defineProps({
  text: {
    type: String,
    default: "default text",
  },

  color: {
    type: String as () => IButtonColor,
    default: "primary",
  },
  variant: {
    type: String as () => "buttonFile" | "button",
    default: "button",
  },

  size: {
    type: String as () => IButtonSize,
    default: "default",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingColor: {
    type: String as () => "white" | "red" | "blue" | "gray",
    value: "white",
  },
  startImage: {
    type: String,
    default: "",
  },

  endImage: {
    type: String,
    default: "",
  },

  type: {
    type: String as () => IButtonType,
    default: "button",
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  // rounded: {
  //   type: Boolean,
  //   default: true,
  // },

  focus: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{
  (event: "click", value: MouseEvent): void;
}>();
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class, ["max-h-[50px]"]);
});

const { elementRef: buttonRef } = useFocus(
  () => props.focus,
  () => "",
);

const buttonClasses = computed(() => {
  let classes = [
    colorButtonClass[props.color],
    props.variant !== "buttonFile" ? sizeButtonClass[props.size] : "",
    filterClassComp.value,
  ];
  //
  // if (props.rounded) {
  //   classes.push("rounded");
  // } else {
  //   classes.push("rounded-none");
  // }

  if (props.disabled) {
    classes.push("opacity-50");
  }

  return classes;
});
</script>

<template>
  <button
    ref="buttonRef"
    :class="[
      'flex items-center',
      buttonClasses,
      { 'btn-file': variant === 'buttonFile' },
    ]"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
  >
    <DsIcon v-if="startImage" :name="startImage" class="mr-1" size="base" />

    <slot>{{ text }}</slot>
    <DsSpinner v-if="loading" :color="loadingColor" />
    <DsIcon v-if="endImage" :name="endImage" class="ml-1" size="base" />
  </button>
</template>
