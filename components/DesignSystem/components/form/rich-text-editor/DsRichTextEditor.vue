<script lang="ts" setup>
import { ref, watch, onMounted, type Ref, computed } from "vue";
import { translateError } from "../../../../DesignSystem/utils/translateErrorMessage";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  error: {
    type: String as () => string | null | undefined | Ref<string>,
    default: null,
  },
  viewMode: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: null,
  },
});
const uniqueID = ref("");
const hasError = computed(() => !!props.error);
const errorMessage = computed(() =>
  translateError(props.error as string | null | undefined | Ref<string>),
);
const errorMessageId = computed(() => `${uniqueID.value}-error-message`);
const emit = defineEmits(["update:modelValue"]);

const editor = ref<HTMLElement | null>(null);
const rawHtmlMode = ref(false);

function execCmd(command: string, value: string | undefined = undefined) {
  if (!editor.value) return;

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  switch (command) {
    case "bold":
      document.execCommand("bold", false, value);
      break;
    case "italic":
      document.execCommand("italic", false, value);
      break;
    case "underline":
      document.execCommand("underline", false, value);
      break;
    case "foreColor":
      document.execCommand("foreColor", false, value);
      break;
    case "fontSize":
      document.execCommand("fontSize", false, value);
      break;
    default:
      return;
  }
}

function toggleRawHtmlMode() {
  rawHtmlMode.value = !rawHtmlMode.value;
}

function handlePaste(event: ClipboardEvent) {
  event.preventDefault();
  const text = event.clipboardData?.getData("text/plain");
  if (text && editor.value) {
    document.execCommand("insertText", false, text);
  }
}

onMounted(() => {
  if (editor.value) {
    editor.value.innerHTML = props.modelValue;
    editor.value.addEventListener("paste", handlePaste);
  }
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (editor.value && editor.value.innerHTML !== newValue) {
      editor.value.innerHTML = newValue;
    }
  },
);

watch(editor, () => {
  if (editor.value) {
    editor.value.addEventListener("input", () => {
      emit("update:modelValue", editor.value?.innerHTML || "");
    });
  }
});

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <div v-if="!props.viewMode && !rawHtmlMode" class="flex space-x-2 mb-4">
      <button
        aria-label="Negrita"
        class="px-2 py-1 rounded hover:bg-gray-300 bg-gray-200"
        @click="execCmd('bold')"
      >
        Negrita
      </button>
      <button
        aria-label="Cursiva"
        class="px-2 py-1 rounded hover:bg-gray-300 bg-gray-200"
        @click="execCmd('italic')"
      >
        Cursiva
      </button>
      <button
        aria-label="Subrayado"
        class="px-2 py-1 rounded hover:bg-gray-300 bg-gray-200"
        @click="execCmd('underline')"
      >
        Subrayado
      </button>
      <input
        aria-label="Color de texto"
        class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 w-[100px] h-[40px]"
        type="color"
        @input="
          (event) => {
            const target = event.target as HTMLInputElement;
            if (target) {
              execCmd('foreColor', target.value);
            }
          }
        "
      />
      <select
        aria-label="Tamaño de texto"
        class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 w-[100px] h-[40px]"
        @change="
          (event) => {
            const target = event.target as HTMLSelectElement;
            if (target) {
              execCmd('fontSize', target.value);
            }
          }
        "
      >
        <option value="3">14</option>
        <option value="4">16</option>
        <option value="5">18</option>
        <option value="6">20</option>
        <option value="7">22</option>
        <option value="8">24</option>
        <option value="9">26</option>
      </select>
      <button
        aria-label="Toggle Raw HTML"
        class="px-2 py-1 rounded hover:bg-gray-300 bg-gray-200"
        @click="toggleRawHtmlMode"
      >
        HTML
      </button>
    </div>
    <label>{{ label }}</label>
    <div v-if="rawHtmlMode" class="bg-white ">
      <textarea
        v-model="model"
        class="w-full h-[200px] border-4 border-gray-500 shadow-lg p-4 bg-white "
      />
      <button
        aria-label="Apply HTML"
        class="px-2 py-1 mt-2 rounded hover:bg-gray-300 bg-gray-200"
        @click="toggleRawHtmlMode"
      >
        Apply HTML
      </button>
    </div>
    <div
      v-show="!rawHtmlMode"
      ref="editor"
      :class="{
        'border-4 border-gray-500 shadow-lg p-4 min-h-[200px] focus:outline-none bg-white ' :
          !props.viewMode,
      }"
      :contenteditable="!props.viewMode"
      aria-label="Editor de texto enriquecido"
    />
  </div>
  <label v-if="hasError" :id="errorMessageId" class="error-message block mb-0">
    {{ errorMessage }}
  </label>
</template>

<style scoped>
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid #4a90e2;
}
</style>
