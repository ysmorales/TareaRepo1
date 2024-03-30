<script lang="ts" setup>
import { elementSizes, predefinedClasses } from "../../../common/propsStyle";
import type { ISize, ITextType } from "../../../interfaces/elements";
import { filterClass } from "../../../utils/filterClass";
import generateUniqueId from "../../../utils/generateUniqueId";
import useFocus from "../../../composables/useFocus";
import { translateError } from "../../../utils/translateErrorMessage";
import buildAriaLabels from "../../../utils/buildAriaLabels";
import { type PropType, ref } from "vue";
import {onMounted,computed} from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },

  type: {
    type: String as () => ITextType,
    default: "text",
  },
  id: {
    type: String,
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

  readOnly: {
    type: Boolean,
    default: false,
  },

  required: {
    type: Boolean,
    default: false,
  },

  focus: {
    type: Boolean,
    default: false,
  },

  label: {
    type: String,
    default: "Default label",
  },

  placeholder: {
    type: String as PropType<string | null>,
    default: null,
  },

  helpMessage: {
    type: String as PropType<string | null>,
    default: null,
  },

  error: {
    type: String,
    default: null,
  },

  class: {
    type: String,
    default: "",
  },
});

const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("typography");
});
const labelId = computed(() => `${uniqueID.value}-label`);
const errorMessageId = computed(() => `${uniqueID.value}-error-message`);
const helpMessageId = computed(() => `${uniqueID.value}-help-message`);

const defaultClasses = "hover:border-dark-500 border p-2 block ";

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => [
  filterClassComp.value,
  elementSizes[props.size],
  {
    rounded: props.rounded,
    error: hasError.value,
  },
  defaultClasses,
]);

const { elementRef: inputRef } = useFocus(
  () => props.focus,
  () => props.error,
);

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});

const placeholderText = computed(() => props.placeholder ?? "");
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
  <div class="mb-4">
    <label v-if="label" :id="labelId" :for="uniqueID" class="mb-2">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="required-marker">*</span>
    </label>

    <input
      :id="id ?? uniqueID"
      ref="inputRef"
      v-model="model"
      :aria-invalid="hasError"
      :aria-labelledby="ariaLabels"
      :aria-required="required"
      :class="cssClasses"
      :disabled="disabled"
      :placeholder="placeholderText"
      :readonly="readOnly"
      :type="`${type}`"
    />

    <label
      v-if="hasError"
      :id="errorMessageId"
      class="error-message block mb-0"
    >
      {{ errorMessage }}
    </label>

    <label v-if="helpMessage" :id="helpMessageId" class="help-message block">
      {{ helpMessage }}
    </label>
  </div>
</template>
