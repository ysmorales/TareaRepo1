<script lang="ts" setup>
import type { ISizeText } from "../../../interfaces/elements";
import { sizeSelect } from "./library";
import type { ISelect } from "./interfaces";
import generateUniqueId from "../../../utils/generateUniqueId";
import useFocus from "../../../composables/useFocus";
import { translateError } from "../../../utils/translateErrorMessage";
import buildAriaLabels from "../../../utils/buildAriaLabels";
import { computed, ref, onMounted, type PropType} from "vue";
import type{  Ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "0",
  },
  labelStyle: {
    type: String,
  },
  error: {
    type: String as () => string | null | undefined | Ref<string>,
    default: null,
  },
  id: {
    type: String,
  },

  label: {
    type: String,
    default: "Default label",
  },

  size: {
    type: String as () => ISizeText,
    default: "full",
  },

  rounded: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  required: {
    type: Boolean,
    default: false,
  },

  exampleText: {
    type: Boolean,
    default: true,
  },

  helpMessage: {
    type: String as PropType<string | null>,
    default: null,
  },

  placeholder: {
    type: String,
    default: "Selecciona una opción",
  },

  focus: {
    type: Boolean,
    default: false,
  },

  option: {
    type: Array as () => ISelect[],
    default: [
      { value: "1", text: "option 1" },
      { value: "2", text: "option 2" },
      { value: "3", text: "option 3" },
    ],
  },

  class: {
    type: String,
    default: "",
  },
  addOption: {
    type: Boolean,
    default: false,
  },
});
const elementSizeComputed = computed(() => {
  const size = props.size || "full"; // Si props.size es undefined, usamos 'normal'
  return sizeSelect[size];
});

const { elementRef: selectRef } = useFocus(
  () => props.focus,
  () => props.error,
);

const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("select");
});
const labelId = computed(() => `${uniqueID.value}-label`);
const errorMessageId = computed(() => `${uniqueID.value}-error-message`);
const helpMessageId = computed(() => `${uniqueID.value}-help-message`);

const filterClassComp = computed(() => {
  // return filterClass(predefinedClasses, props.class);
  return props.class;
});

const emit = defineEmits(["update:modelValue", "select"]);

function handleInput(e: Event) {
  emit("select", e);
}

const model = computed({
  get() {
    return props.modelValue == "100" ? "0" : props.modelValue;
  },

  set(value) {
    if (value != "100") {
      emit("update:modelValue", value);
    } else {
      emit("update:modelValue", "0");
    }
  },
});

const hasError = computed(() => !!props.error);
const errorMessage = computed(() => translateError(props.error as any));

const ariaLabels = computed(() =>
  buildAriaLabels(props, {
    label: labelId.value,
    error: errorMessageId.value,
    helpMessage: helpMessageId.value,
  }),
);
</script>

<template>
  <div class="mb-5 w-full">
    <label
      v-if="label"
      :id="labelId"
      :class="labelStyle"
      :for="uniqueID"
      class="m-0"
    >
      {{ label }}
      <span v-if="required" aria-hidden="true" class="required-marker">*</span>
    </label>

    <select
      :id="id ?? uniqueID"
      ref="selectRef"
      v-model="model"
      :aria-invalid="hasError"
      :aria-labelledby="ariaLabels"
      :aria-required="required"
      :class="[
        filterClassComp,
        { error: hasError },
        'block',
        'border',
        elementSizeComputed,
        { rounded: rounded },
      ]"
      :disabled="disabled"
      class="h-[42px]"
      @input="handleInput"
    >
      <slot>
        <option :value="'0'" disabled>
          {{ exampleText ? placeholder : "" }}
        </option>
        <option v-if="addOption" :value="'100'">Agregar opción...</option>
        <option v-for="el in option" :key="el.value" :value="el.value">
          {{ el.text }}
        </option>
      </slot>
    </select>

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
