<!-- @vue-docgen-ignore -->
<script lang="ts" setup>
import {computed, inject, type Ref,ref } from "vue";
import { filterClass } from "../../../utils/filterClass";
import {
  elementSizes,
  predefinedClasses,
} from "../../../common/propsStyle";
import type { ISize } from "../../../interfaces/elements";
import useFocus from "../../../composables/useFocus";

const props = defineProps({
  value: {
    type: String,
    default: "default-value",
  },
  name: {
    type: String,
    default: "radio",
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
const { elementRef: checkRef } = useFocus(
  () => props.focus,
  () => props.error,
);
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
const checkGroup = inject("checkGroup") as Ref<string[]>;
const disabledParent = inject("disabled") as Ref<boolean>;
const checked = ref<boolean>(checkGroup?.value.includes(props.value as string));
const handleChange = () => {
  checked.value = !checked.value;
  if (checked.value) {
    checkGroup.value.push(props.value!);
  } else {
    checkGroup.value = checkGroup.value.filter((val) => val !== props.value);
  }
};
const defaultClasses = "hover:border-dark-500 border p-2 mb-2 w-auto mr-1";
const hasError = computed(() => !!props.error);

const elementSizeComputed = computed(() => {
  const size = props.size || 'normal'; // Si props.size es undefined, usamos 'normal'
  return elementSizes[size];
});

// console.log("Viendo valor inicial", initialValue.value);
</script>

<template>
  <label :class="filterClassComp">
    <input
      ref="checkRef"
      :checked="checked"
      :class="[
        {
          error: hasError,
        },
        defaultClasses,
        elementSizeComputed,
      ]"
      :disabled="disabled || disabledParent"
      :name="name"
      type="checkbox"
      @change="handleChange"
    />
    <slot></slot>
  </label>
</template>
