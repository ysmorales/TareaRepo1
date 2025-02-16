<script lang="ts" setup>
import Field from "./Field.vue";
import { getSchemaInfoRecord, getSchemaDefinition } from "./utils";

interface IProp {
  schema: any;
  modelValue: any;
  refType: string;
}

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<IProp>(), {});
const properties = getSchemaInfoRecord(props.schema, props.refType).properties;
const model = computed({
  get() {
    if (!isNotEmpty(props.modelValue)) {
      const dd = {};
      Object.keys(properties).forEach((d) => {
        dd[d] = "";
      });
      return dd;
    }

    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});

const handlerUpdate = ({ field, newState, index }) => {
  model.value[field] = newState;
};
</script>

<template>
  <div v-for="ii in Object.keys(properties)">
    <Field
      @handlerUpdate="handlerUpdate"
      :type="properties[ii].type ?? []"
      :anyOf="properties[ii].anyOf"
      :refTypeSub="getSchemaDefinition(properties[ii]?.items?.$ref)"
      :valueField="model[ii]"
      :fieldKey="ii"
      :schema="schema"
    />
  </div>
</template>
