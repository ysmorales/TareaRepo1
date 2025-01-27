<script lang="ts" setup>
import DsFile from "../../form/file/DsFile.vue";
import { computed, type Ref } from "vue";
import { translateError } from "../../../../DesignSystem/utils/translateErrorMessage";

const props = defineProps({
  label: {
    type: String,
    default: "label",
  },
  modelValue: {
    type: Array as () => File[],
    required: true,
  },
  viewMode: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String as () => string | null | undefined | Ref<string>,
    default: null,
  },
  helpMessage: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  let newValue;
  if (target.files) {
    newValue = [...props.modelValue, ...Array.from(target.files)];
  }
  emit("update:modelValue", newValue);
}

function clearFiles() {
  emit("update:modelValue", []);
}

function removeFile(index: number) {
  const newFiles = [...props.modelValue];
  newFiles.splice(index, 1);
  emit("update:modelValue", newFiles);
}

const errorMessage = computed(() => translateError(props.error));
const hasError = computed(() => !!props.error);
</script>

<template>
  <div class="p-4 border border-gray-300 rounded-lg">
    <div v-if="!viewMode" class="flex w-full">
      <DsFile
        :button-text="modelValue.length == 0 ? undefined : 'Agregar'"
        :help-message="helpMessage"
        :label="label"
        :placeholder="
          modelValue.length == 0
            ? undefined
            : modelValue.length.toString() + ' Archivo(s) seleccionado(s)'
        "
        size="full"
        @change="handleFileChange"
      />
    </div>
    <div
      v-if="modelValue.length > 1 && !viewMode"
      class="flex justify-between mt-4"
    >
      <button
        class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        @click="clearFiles"
      >
        Limpiar Todo
      </button>
    </div>
    <ul class="mt-4 space-y-2">
      <li
        v-for="(file, index) in modelValue"
        :key="index"
        class="flex justify-between items-center text-sm text-gray-700"
      >
        {{ file.name }}
        <button
          v-if="!viewMode"
          class="ml-4 px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
          @click="removeFile(index)"
        >
          Eliminar
        </button>
      </li>
    </ul>
    <label v-if="hasError" class="error-message block mb-0">
      {{ errorMessage }}
    </label>
  </div>
</template>
