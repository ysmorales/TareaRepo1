<script lang="ts" setup>
import deepmerge from "deepmerge";
import { DsInput, DsSelect, DsCheck } from "~/components/DesignSystem";

import { useBuilderStore } from "~/stores/builderStore";
import FieldLayout from "./fieldLayout.vue";
import FieldObjectRecord from "./FieldObjectRecord/index.vue";

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
const {
  updateItemInForm,
  handlerChangeContainerSettings,
  itemOnSelect,
  itemsPageList,
} = toRefs(store);

const emit = defineEmits(["input", "update:modelValue"]);

const getDefaulValue = () => {
  return (props.item?.props && props.item?.props[props.fieldKey]) ?? "";
};

const valueField = ref(getDefaulValue());

function handleChange() {
  console.log(props.item, props.fieldKey, valueField);
  updateItemInForm.value(props?.item, props.fieldKey, valueField);
}

function applyPathTransformation(input) {
  let result = {};
  let current = result;

  input.path.forEach((key, index) => {
    if (index === input.path.length - 1) {
      current[key] = { extra: input.newState };
    } else {
      current[key] = current[key] || {};
      current = current[key];
    }
  });

  return result;
}

const handlerUpdateConfig = (newExtraConfig) => {
  const ruta = encontrarRutaPorIndice(
    itemsPageList.value,
    itemOnSelect.value.id
  );
  const nodo = getNodeByPath(itemsPageList.value, ruta);
  handlerChangeContainerSettings.value(itemOnSelect.value, {
    extra: {
      ...(nodo.settings?.extra ?? {}),
      subFields: deepmerge(
        nodo.settings?.extra.subFields,
        applyPathTransformation(newExtraConfig)
      ),
    },
  });
};

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
    <FieldObjectRecord
      v-model="valueField"
      v-if="getType() === 'object'"
      :label="fieldKey"
      :fieldInfo="fieldInfo"
      @handlerUpdateConfig="handlerUpdateConfig"
    />
  </FieldLayout>
</template>
