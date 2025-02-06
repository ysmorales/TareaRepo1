<script lang="ts" setup>
import { DsInput, DsSelect, DsIcon, DsCheck } from "~/components/DesignSystem";

import DsTooltip from "~/components/DesignSystem/components/basic/tooltip/DsTooltip.vue";
import { useBuilderStore } from "~/stores/builderStore";
import FieldLayout from "./fieldLayout.vue";

interface IProp {
  fieldKey: string;
  fieldInfo: any;
  name: string;
  item: any;
}

const props = withDefaults(defineProps<IProp>(), {
  fieldKey: "",
  fieldInfo: {},
});

const store = useBuilderStore();
const { updateItemInForm } = toRefs(store);

const emit = defineEmits(["input", "update:modelValue"]);

const valueField = ref("");

function handleChange() {
  console.log(props.item, props.fieldKey, valueField);
  updateItemInForm.value(props?.item, props.fieldKey, valueField);
}

const getType = () =>
  props.fieldInfo?.control?.type
    ? props.fieldInfo?.control?.type
    : isNotEmpty(props.fieldInfo?.control)
    ? props.fieldInfo?.control
    : isNotEmpty(props.fieldInfo?.default)
    ? isBoolean(props.fieldInfo?.default)
      ? "boolean"
      : "text"
    : "text";

let ttm;
watch(valueField, () => {
  clearTimeout(ttm);
  ttm = setTimeout(() => {
    handleChange();
  }, 300);
});
</script>

<template>
  <FieldLayout :description="fieldInfo.description ?? 'no found description'">
    <DsInput
      v-if="getType() === 'text'"
      v-model="valueField"
      :label="fieldKey"
    />

    <DsInput
      v-if="getType() === 'number'"
      type="number"
      v-model="valueField"
      :label="fieldKey"
    />

    <DsSelect
      v-if="getType() === 'select'"
      v-model="valueField"
      :option="fieldInfo?.options.map((d) => ({ value: d, text: d }))"
      :label="fieldKey"
      :placeholder="`Select ${fieldKey}`"
    />

    <DsCheck
      v-if="getType() === 'boolean'"
      v-model="valueField"
      :label="fieldKey"
    />
  </FieldLayout>
</template>
