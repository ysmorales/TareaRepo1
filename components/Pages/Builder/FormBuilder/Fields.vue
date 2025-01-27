<script lang="ts" setup>
import { DsInput, DsSelect, DsIcon, DsCheck } from "~/components/DesignSystem";

import DsTooltip from "~/components/DesignSystem/components/basic/tooltip/DsTooltip.vue";
import { useBuilderStore } from "~/stores/builderStore";

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
</script>

<template>
  <div class="flex items-end w-full" v-if="fieldInfo?.control">
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
        v-model="valueField"
        :label="fieldKey"
      />
    </div>

    <div class="mb-4 ml-2">
      <DsTooltip
        :text="fieldInfo.description ?? 'no found description'"
        position="right"
      >
        <DsIcon name="info-circle" size="default" />
      </DsTooltip>
    </div>
  </div>
</template>
