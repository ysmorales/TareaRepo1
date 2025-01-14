<script lang="ts" setup>
import { DsInput, DsSelect } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";

interface IProp {
  fieldKey: string;
  fieldInfo: any;
  name: string;
}

const props = withDefaults(defineProps<IProp>(), {
  fieldKey: "",
  fieldInfo: {},
});

const store = useBuilderStore();
const { currentEditItem, updateItemInForm } = toRefs(store);
const labelValue = ref(currentEditItem.value.props?.label);
const placeHolderValue = ref(currentEditItem.value.props?.placeholder);
const sizeValue = ref(currentEditItem.value.props?.size);

const emit = defineEmits(["input", "update:modelValue"]);

function handleInput(key: string) {
  updateItemInForm.value(currentEditItem.value?.id, key, labelValue);
}

function handlePlaceHolder(key: string) {
  updateItemInForm.value(currentEditItem.value?.id, key, placeHolderValue);
}

async function handleSize(key: string) {
  updateItemInForm.value(currentEditItem.value?.id, key, sizeValue);
}
</script>

<template>
  {{ fieldKey }}
  {{ fieldInfo }}
  <DsInput v-model="labelValue" label="Label" @input="handleInput('label')" />
</template>
