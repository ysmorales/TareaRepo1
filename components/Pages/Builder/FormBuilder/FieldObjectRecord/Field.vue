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

const currentModelValue = ref(props.valueField);
</script>

<template>
  <DsInput
    v-if="type.includes('string')"
    v-model="currentModelValue"
    :label="`${fieldKey}:`"
  />
</template>
