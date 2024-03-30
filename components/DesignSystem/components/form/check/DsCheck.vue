<script lang="ts" setup>
import { elementSizes, predefinedClasses } from "../../../common/propsStyle";
import type { ISize } from "../../../interfaces/elements";
import { filterClass } from "../../../utils/filterClass";
import generateUniqueId from "../../../utils/generateUniqueId";
import { translateError } from "../../../utils/translateErrorMessage";
import buildAriaLabels from "../../../utils/buildAriaLabels";
import {computed} from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },
  id: {
    type: String,
  },

  class: {
    type: String,
    default: "",
  },

  size: {
    type: String as () => ISize,
    default: "normal",
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  required: {
    type: Boolean,
    default: false,
  },

  label: {
    type: String,
    default: "Default label",
  },

  helpMessage: {
    type: String as PropType<string | null>,
    default: null,
  },

  error: {
    type: String,
    default: null,
  },
});

const inputId = computed(() => generateUniqueId("checkbox"));
const labelId = computed(() => `${inputId.value}-label`);
const errorMessageId = computed(() => `${inputId.value}-error-message`);
const helpMessageId = computed(() => `${inputId.value}-help-message`);

const defaultClasses = "hover:border-dark-500 border p-2 mb-2";

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => [
  filterClassComp,
  elementSizes[props.size],
  {
    rounded: props.rounded,
    error: hasError.value,
  },
  defaultClasses,
]);

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});

const hasError = computed(() => !!props.error);
const errorMessage = computed(() => translateError(props.error));

const ariaLabels = computed(() =>
  buildAriaLabels(props, {
    label: labelId.value,
    error: errorMessageId.value,
    helpMessage: helpMessageId.value,
  }),
);
</script>

<template>
  <div class="flex items-center">
    <input
      :id="id ?? inputId"
      v-model="model"
      :aria-invalid="hasError"
      :aria-labelledby="ariaLabels"
      :aria-required="required"
      :checked="modelValue"
      :class="cssClasses"
      :disabled="disabled"
      class="w-auto mr-1"
      type="checkbox"
    />

    <label v-if="label" :id="labelId" :for="inputId" class="mb-2">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="required-marker">*</span>
    </label>
  </div>

  <label v-if="hasError" :id="errorMessageId" class="error-message block mb-0">
    {{ errorMessage }}
  </label>

  <label v-if="helpMessage" :id="helpMessageId" class="help-message block">
    {{ helpMessage }}
  </label>
</template>
