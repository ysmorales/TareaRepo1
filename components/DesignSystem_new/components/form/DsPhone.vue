<script lang="ts" setup>
import { computed, type Ref } from "vue";
import { translateError } from "../../utils/translateErrorMessage";
import generateUniqueId from "../../utils/generateUniqueId";
import { inputSizes } from "../../common/propsStyle";
import type { ISize } from "../../interfaces/elements";
import { ref, onMounted } from "vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

const model = defineModel({
  type: String,
  default: "",
});

const props = defineProps({
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

  dropdownOptions: {
    type: Object,
    default: () => ({
      showSearchBox: true,
      showFlags: true,
    }),
  },

  inputOptions: {
    type: Object,
    default: () => ({ showDialCode: true }),
  },

  label: {
    type: String,
    default: "",
  },

  defaultCountry: {
    type: String,
    default: "cl",
  },

  mode: {
    type: String,
    default: "international",
  },

  placeholder: {
    type: String,
    default: "",
  },

  helpMessage: {
    type: String,
    default: "",
  },

  size: {
    type: String as () => ISize,
    default: "full",
  },

  class: {
    type: String,
    default: "",
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  onlyCountries: {
    type: Array as () => string[],
    default: () => [],
  },

  error: {
    type: String as () => string | null | undefined | Ref<string>,
    default: null,
  },
});

const uniqueID = ref("");

onMounted(() => {
  uniqueID.value = generateUniqueId("phone");
});
const hasError = computed(() => !!props.error);
const errorMessage = computed(() => translateError(props.error));

const containerSize = computed(() => {
  return inputSizes[props.size];
});
const filterClassComp = computed(() => {
  return props.class;
});

const emit = defineEmits(["input", "valid"]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function handleInput(value: string, phoneObject: object) {
  emit("input", value);
}

function handleValidate(phoneObject: { valid: boolean }) {
  emit("valid", phoneObject.valid);
}

const defaultClasses = "hover:border-dark-500 border p-2 block ";

const cssClasses = computed(() => [
  inputSizes[props.size],
  {
    rounded: props.rounded,
    error: hasError.value,
  },
  defaultClasses,
]);
</script>

<template>
  <div :class="['mb-4', containerSize, filterClassComp]">
    <label v-if="label" :for="uniqueID" class="mb-2">
      {{ label
      }}<span v-if="required" aria-hidden="true" class="required-marker"
        >*</span
      >
    </label>
    <vue-tel-input
      :id="uniqueID"
      v-model="model"
      :default-country="defaultCountry"
      :disabled="disabled"
      :dropdown-options="dropdownOptions"
      :input-options="{
        ...inputOptions,
        styleClasses: cssClasses,
        required: required,
        placeholder: placeholder,
        readonly: readOnly,
      }"
      :mode="mode"
      :only-countries="onlyCountries"
      @validate="handleValidate"
      @on-input="handleInput"
    />
    <p v-if="hasError" class="error-message block mb-0">
      {{ errorMessage }}
    </p>
    <p v-if="helpMessage" class="help-message block">
      {{ helpMessage }}
    </p>
  </div>
</template>
