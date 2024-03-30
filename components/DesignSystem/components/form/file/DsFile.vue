<script lang="ts" setup>
import DsButton from "../../basic/button/DsButton.vue";
import generateUniqueId from "../../../utils/generateUniqueId";
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import type { ISizeText } from "../../../interfaces/elements";
import { sizeSelect } from "../select/library";
import useFocus from "../../../composables/useFocus";
import type { IButtonColor } from "../../basic/button/interfaces";
import { translateError } from "../../../utils/translateErrorMessage";
import buildAriaLabels from "../../../utils/buildAriaLabels";
import type { Ref } from "vue";
import { computed, ref, onMounted } from "vue";

//new change defile
interface FileInputRef extends Ref<HTMLInputElement | null> {}

const props = defineProps({
  modelValue: {
    type: Object as () => { name: string },
    default: null,
  },
  hideLabel: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as () => ISizeText,
    default: "full",
  },
  id: {
    type: String,
  },

  required: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  focus: {
    type: Boolean,
    default: false,
  },

  error: {
    type: String,
    default: null,
  },

  showPlaceholder: {
    type: Boolean,
    default: true,
  },

  buttonColor: {
    type: String as () => IButtonColor,
    default: "primary",
  },

  label: {
    type: String,
    default: "Attach document",
  },

  placeholder: {
    type: String,
    default: "No hay archivo seleccionado",
  },

  buttonText: {
    type: String,
    default: "Examinar",
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
const elementSizeComputed = computed(() => {
  const size = props.size || "normal"; // Si props.size es undefined, usamos 'normal'
  return sizeSelect[size];
});
const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("typography");
});
const labelId = computed(() => `${uniqueID.value}-label`);
const errorMessageId = computed(() => `${uniqueID.value}-error-message`);
const helpMessageId = computed(() => `${uniqueID.value}-help-message`);

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const emit = defineEmits(["fileSelected", "update:modelValue"]);
const selectedFileName = ref<string | null>(null);
const refFileName: FileInputRef = ref(null);

const { elementRef: fileRef } = useFocus(
  () => props.focus,
  () => props.error,
);

const openFilePicker = () => {
  // document.getElementById("file").click();
  refFileName.value?.click();
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;
  if (file) {
    selectedFileName.value = file.name;
    emit("fileSelected", file);
    emit("update:modelValue", file);
  }
};

function handleKeyEvent(event: KeyboardEvent) {
  if (event.key !== "Tab") event.preventDefault();
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
  <h1>Holaaaa!!!</h1>
  <div :class="filterClassComp">
    <label v-if="!hideLabel" :id="labelId" :for="uniqueID" class="block mb-1">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="required-marker">*</span>
    </label>

    <div class="flex">
      <input
        ref="refFileName"
        :disabled="disabled"
        class="hidden"
        name="file"
        type="file"
        @change="handleFileChange"
      />
      <div class="w-full">
        <input
          :id="id ?? uniqueID"
          ref="fileRef"
          :aria-invalid="hasError"
          :aria-labelledby="ariaLabels"
          :aria-required="required"
          :class="[
            'rounded rounded-e-none mb-0',
            { error: hasError },
            elementSizeComputed,
          ]"
          :placeholder="showPlaceholder ? placeholder : ''"
          :value="modelValue?.name"
          tabindex="0"
          @click="openFilePicker"
          @keydown="handleKeyEvent"
          @keydown.enter.prevent="openFilePicker"
        />
      </div>

      <DsButton
        :color="buttonColor"
        :rounded="false"
        :text="buttonText"
        startImage="file"
        text-color="white"
        variant="buttonFile"
        @click="openFilePicker"
      />
    </div>

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
