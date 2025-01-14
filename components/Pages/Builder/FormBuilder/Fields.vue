<script lang="ts" setup>
import { DsInput, DsSelect, DsIcon, DsCheck } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";

interface IProp {
  fieldKey: string;
  fieldInfo: any;
  name: string;
  id: number;
}

const props = withDefaults(defineProps<IProp>(), {
  fieldKey: "",
  fieldInfo: {},
});

const store = useBuilderStore();
const { currentEditItem, updateItemInForm } = toRefs(store);

const emit = defineEmits(["input", "update:modelValue"]);

const valueField = ref("");

function handleChange() {
  console.log(props.id, props.fieldKey, valueField);
  updateItemInForm.value(props?.id, props.fieldKey, valueField);
}
</script>

<template>
  {{ fieldKey }}
  {{ fieldInfo }}

  <div class="flex items-end w-full">
    <div class="flex-1">
      <DsInput
        v-if="fieldInfo?.control === 'text'"
        v-model="valueField"
        :label="fieldKey"
        @input="handleChange()"
      />

      <DsSelect
        v-if="fieldInfo?.control === 'select'"
        v-model="valueField"
        :option="fieldInfo?.options.map((d) => ({ value: d, text: d }))"
        :label="fieldKey"
        :placeholder="`Select ${fieldKey}`"
        @select="handleChange()"
      />

      <DsCheck
        v-if="fieldInfo?.control === 'boolean'"
        v-model="labelValue"
        :label="fieldKey"
      />
    </div>

    <div class="mb-4 ml-2">
      <DsIcon name="info-circle" size="default" />
    </div>
  </div>
</template>
