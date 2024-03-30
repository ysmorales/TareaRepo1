<script lang="ts" setup>
import {
  predefinedClasses,
  sizeTextAreaClasses,
} from "../../../common/propsStyle";
import type { ISizeText } from "../../../interfaces/elements";
import { filterClass } from "../../../utils/filterClass";
import generateUniqueId from "../../../utils/generateUniqueId";
import useFocus from "../../../composables/useFocus";
import { translateError } from "../../../utils/translateErrorMessage";
import buildAriaLabels from "../../../utils/buildAriaLabels";
import {computed} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },

  error: {
    type: String,
    default: null,
  },

  label: {
    type: String,
    default: "Default label",
  },
  id: {
    type: String,
  },

  size: {
    type: String as () => ISizeText,
    default: "normal",
  },

  radius: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  readOnly: {
    type: Boolean,
    default: false,
  },

  required: {
    type: Boolean,
    default: false,
  },

  placeholder: {
    type: String as PropType<string | null>,
  },

  focus: {
    type: Boolean,
    default: false,
  },

  helpMessage: {
    type: String as PropType<string | null>,
    default: null,
  },

  class: {
    type: String,
    default: "",
  },
});

const inputId = computed(() => generateUniqueId("textarea"));
const labelId = computed(() => `${inputId.value}-label`);
const errorMessageId = computed(() => `${inputId.value}-error-message`);
const helpMessageId = computed(() => `${inputId.value}-help-message`);
const elementSizeComputed = computed(() => {
  const size = props.size || 'normal'; // Si props.size es undefined, usamos 'normal'
  return sizeTextAreaClasses[size];
});
const emit = defineEmits(["update:modelValue"]);

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const { elementRef: textAreaRef } = useFocus(
  () => props.focus,
  () => props.error,
);

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}

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
  <label v-if="label" :id="labelId" :for="inputId" class="mb-2">
    {{ label }}
    <span v-if="required" aria-hidden="true" class="required-marker">*</span>
  </label>

  <textarea
    :id="id ?? inputId"
    ref="textAreaRef"
    :aria-invalid="hasError"
    :aria-labelledby="ariaLabels"
    :aria-required="required"
    :class="[
      { error: hasError },
      filterClassComp,
      'border',
      'block',
      { rounded: radius },
      elementSizeComputed
    ]"

    :disabled="disabled"
    :placeholder="placeholder ?? 'Textarea'"
    :readonly="readOnly"
    :value="modelValue"
    @input="handleInput"
  />

  <label v-if="hasError" :id="errorMessageId" class="error-message block mb-0">
    {{ errorMessage }}
  </label>

  <label v-if="helpMessage" :id="helpMessageId" class="help-message block">
    {{ helpMessage }}
  </label>
</template>
