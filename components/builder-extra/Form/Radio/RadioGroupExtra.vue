<script lang="ts" setup>
import { DsRadioGroup, DsRadio } from "~/components/DesignSystem";
interface IProp {
  error: any;
  items: any;
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
  <DsRadioGroup
    v-model="modelValue"
    label="Selecciona la franja*"
    :error="error"
  >
    <DsRadio v-for="item in items" :value="item.id">{{ item.value }} </DsRadio>
  </DsRadioGroup>
</template>
