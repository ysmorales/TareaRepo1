<script lang="ts" setup>
import Field from "./Field.vue";
import { getSchemaInfoRecord } from "./utils";

interface IProp {
  schema: any;
  modelValue: any;
  refType: string;
}

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});

const props = withDefaults(defineProps<IProp>(), {});
const properties = getSchemaInfoRecord(props.schema, props.refType).properties;

const handlerUpdate = ({ field, newState }) => {
  model.value[field] = newState;
};
</script>

<template>
  <div v-for="ii in Object.keys(properties)">
    <Field
      @handlerUpdate="handlerUpdate"
      :type="properties[ii].type"
      :valueField="model[ii]"
      :fieldKey="ii"
    />
  </div>
</template>
