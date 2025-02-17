<script lang="ts" setup>
import { DsRadioGroup, DsRadio } from "~/components/DesignSystem";
import type { ListOptions } from "~/global-interface/common";
interface IProp {
  error: any;
  items: ListOptions;
  label: string;
}

const props = withDefaults(defineProps<IProp>(), {
  items: [
    {
      id: 1,
      value: "Value 1",
    },
    {
      id: 2,
      value: "Value 2",
    },
  ],
});

const modelValue = ref("");
</script>

<template>
  <DsRadioGroup v-model="modelValue" :label="label" :error="error">
    <DsRadio v-for="item in items" :value="item.id">{{ item.value }} </DsRadio>
  </DsRadioGroup>
</template>
