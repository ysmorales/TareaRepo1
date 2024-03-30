<script lang="ts" setup>
import { inject, type Ref } from "vue";
import { filterClass } from "../../../utils/filterClass";
import {
  elementSizes,
  predefinedClasses,
} from "../../../common/propsStyle";
import type { ISize } from "../../../interfaces/elements";
import useFocus from "../../../composables/useFocus";
import {computed} from "vue";

const props = defineProps({
  value: {
    type: String,
    defaultValue: "default-value",
  },
  name: {
    type: String,
    defaultValue: "radio",
  },
  size: {
    type: String as () => ISize,
    default: "normal",
  },
  error: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  focus: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
});
const { elementRef: radioRef } = useFocus(
  () => props.focus,
  () => props.error,
);
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
const selectedRadio = inject("selectedRadio") as Ref<string>;
const initialValue = inject("initialValue") as Ref<string>;
const disabledParent = inject("disabled") as Ref<boolean>;
const handleChange = () => {
  selectedRadio.value = props.value ?? "defaultValue";
};
const defaultClasses = "hover:border-dark-500 border p-2 w-auto mr-1";
const hasError = computed(() => !!props.error);
const cssClasses = computed(() => [
  elementSizes[props.size],
  {
    error: hasError.value,
  },
  defaultClasses,
]);
</script>

<template>
  <label :class="filterClassComp">
    <input
      ref="radioRef"
      :checked="value == (selectedRadio ?? initialValue)"
      :class="cssClasses"
      :disabled="disabled || disabledParent"
      :name="name"
      tabindex="0"
      type="radio"
      @change="handleChange"
    />
    <slot></slot>
  </label>
</template>
