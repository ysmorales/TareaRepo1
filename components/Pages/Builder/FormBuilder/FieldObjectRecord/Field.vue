<script lang="ts" setup>
import { DsInput, DsCheck, DsIcon } from "~/components/DesignSystem";
import EditionRecord from "./EditionRecord.vue";
import FieldAdvanceEdition from "./FieldAdvanceEdition.vue";

import Field from "./Field.vue";

interface IProp {
  valueField: any;
  type: string;
  fieldKey: string;
  refTypeSub: string;
  schema: any;
  anyOf?: any;
  fieldInfo: any;
  index: number;
  path: any;
  handlerUpdateSettings: any;
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
  <FieldAdvanceEdition
    v-if="
      type && Array.isArray(type) ? type?.includes('string') : type === 'string'
    "
    :path="path"
    :handlerUpdateSettings="handlerUpdateSettings"
  >
    <DsInput v-model="model" :label="`${fieldKey}:`" />
  </FieldAdvanceEdition>

  <DsCheck v-if="type === 'boolean'" v-model="model" :label="`${fieldKey}`" />

  <div v-if="anyOf">
    <Field
      :type="anyOf[0].type"
      :fieldKey="fieldKey"
      :schema="schema"
      :valueField="valueField"
      @handlerUpdate="handlerUpdate"
      :handler-update-settings="handlerUpdateSettings"
      :index="index"
      :path="path ?? []"
    />
  </div>

  <div v-if="type === 'array'">
    <label>{{ fieldKey }}:</label>
    <EditionRecord
      :schema="schema"
      :refType="refTypeSub"
      @handlerUpdate="handlerUpdate"
      :handlerUpdateSettings="handlerUpdateSettings"
      :defaultValues="model"
      :index="index"
      :path="path ?? []"
      is-array
    />
  </div>
</template>
