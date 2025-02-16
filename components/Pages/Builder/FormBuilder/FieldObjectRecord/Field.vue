<script lang="ts" setup>
import { DsInput, DsCheck } from "~/components/DesignSystem";
import EditionRecord from "./EditionRecord.vue";

import Field from "./Field.vue";

interface IProp {
  valueField: any;
  type: string;
  fieldKey: string;
  refTypeSub: string;
  schema: any;
  anyOf?: any;
}

const props = withDefaults(defineProps<IProp>(), {
  type: "text",
});

const emit = defineEmits(["handlerUpdate"]);

const model = computed({
  get() {
    return props.valueField;
  },

  set(value) {
    emit("handlerUpdate", { field: props.fieldKey, newState: value });
  },
});

const handlerUpdate = ({ index, newState, field }) => {
  try {
    if (index || (field && model.value)) {
      model.value[field ?? index] = newState;
    } else {
      model.value = newState;
    }
  } catch (error) {
    model.value = newState;
  }
};
</script>

<template>
  <DsInput
    v-if="
      type && Array.isArray(type) ? type?.includes('string') : type === 'string'
    "
    v-model="model"
    :label="`${fieldKey}:`"
  />

  <DsCheck v-if="type === 'boolean'" v-model="model" :label="`${fieldKey}`" />

  <div v-if="anyOf">
    <Field
      :type="anyOf[0].type"
      :fieldKey="fieldKey"
      :schema="schema"
      :valueField="valueField"
      @handlerUpdate="handlerUpdate"
    />
  </div>

  <div v-if="type === 'array'" class="">
    <label>{{ fieldKey }}:</label>
    <EditionRecord
      :schema="schema"
      :refType="refTypeSub"
      @handlerUpdate="handlerUpdate"
      :defaultValues="model"
      is-array
    />
  </div>
</template>
