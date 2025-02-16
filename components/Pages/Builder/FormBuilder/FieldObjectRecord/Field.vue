<script lang="ts" setup>
import { DsInput } from "~/components/DesignSystem";
import FieldLayout from "../fieldLayout.vue";

interface IProp {
  valueField: any;
  type: string;
  fieldKey: string;
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
</script>

<template>
  <DsInput
    v-if="type.includes('string')"
    v-model="model"
    :label="`${fieldKey}:`"
  />
</template>
