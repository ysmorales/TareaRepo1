<script lang="ts" setup>
import type { Ref, PropType } from "vue";
import { computed, ref, onMounted } from "vue";
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
import { createObjectUrl } from "../../../../DesignSystem/utils/createObjectUrl";

// new change defile
type FileInputRef = Ref<HTMLInputElement | null>;

const props = defineProps({
  modelValue: {
    type: Object as () => { name: string } | object | File | null,
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
    type: String as () => string | null | undefined | Ref<string>,
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
  enablePreview: {
    type: Boolean,
    default: false,
  },
  onlyView: {
    type: Boolean,
    default: false,
  },
  externPreviewUrl: {
    type: String,
    default: null,
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

const emit = defineEmits(["fileSelected", "update:modelValue", "change"]);
const selectedFileName = ref<string | null>(null);
const refFileName: FileInputRef = ref(null);
const previewUrl = ref<string | null>(null);

const { elementRef: fileRef } = useFocus(
  () => props.focus,
  () => props.error,
);

const openFilePicker = () => {
  refFileName.value?.click();
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;
  if (file) {
    selectedFileName.value = file.name;
    if (props.enablePreview) {
      previewUrl.value = URL.createObjectURL(file);
    }
    emit("change", event);
    emit("fileSelected", previewUrl.value);
    emit("update:modelValue", file);
  }
};

function handleKeyEvent(event: KeyboardEvent) {
  if (event.key !== "Tab") event.preventDefault();
}

const hasError = computed(() => !!props.error);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorMessage = computed(() => translateError(props.error as any));

const ariaLabels = computed(() =>
  buildAriaLabels(props, {
    label: labelId.value,
    error: errorMessageId.value,
    helpMessage: helpMessageId.value,
  }),
);

const isImageFile = computed(() => {
  return (
    props.modelValue instanceof File &&
    props.modelValue.type.startsWith("image/")
  );
});
</script>

<template>
  <div :class="filterClassComp" class="w-full">
    <label v-if="!hideLabel" :id="labelId" :for="uniqueID" class="block mb-1">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="required-marker">*</span>
    </label>

    <div v-if="!props.onlyView" class="flex">
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
          :value="modelValue && 'name' in modelValue ? modelValue.name : ''"
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
        start-image="file"
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

    <label
      v-if="helpMessage"
      :id="helpMessageId"
      class="help-message block"
      v-html="helpMessage"
    />
  </div>
  <img
    v-if="(enablePreview && isImageFile) || onlyView"
    :src="createObjectUrl(modelValue as File)"
    alt="Image Preview"
    class="mt-4 max-w-[200px] h-auto"
  />
</template>
