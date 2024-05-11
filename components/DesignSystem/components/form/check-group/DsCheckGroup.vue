<!-- @vue-docgen-ignore -->
<script lang="ts" setup>
import { ref } from "vue";
import generateUniqueId from "../../../utils/generateUniqueId";
import useFocus from "../../../composables/useFocus";
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import { computed, onMounted, provide, watch } from "vue";

const props = defineProps({
  modelValue: {
    default: [],
  },
  id: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Default label",
  },
  error: {
    type: String,
    default: null,
  },
  helpMessage: {
    type: String as () => string | null,
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
const { elementRef: selectRef } = useFocus(() => props.focus);
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("check");
});
const initialValue = ref(props.modelValue);
const checkGroup = ref(initialValue ?? []);
provide("checkGroup", checkGroup);
provide("disabled", props.disabled);
const emit = defineEmits(["update:modelValue"]);
watch(
  checkGroup,
  (newValue) => {
    emit("update:modelValue", newValue);
  },
  { immediate: true },
);
const hasError = computed(() => !!props.error);
</script>

<template>
  <div
    :id="uniqueID"
    ref="selectRef"
    :class="['flex flex-col justify-center', filterClassComp]"
    tabindex="0"
  >
    <label v-if="label" :for="uniqueID" class="mb-2">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="required-marker">*</span>
    </label>
    <slot></slot>
    <label v-if="hasError" class="error-message block mb-0">
      {{ error }}
    </label>

    <label v-if="helpMessage" class="help-message block">
      {{ helpMessage }}
    </label>
  </div>
</template>
