<script lang="ts" setup>
import { DsInput } from "~/components/DesignSystem";

interface IProp {
  label?: string;
  keyName?: string;
  modelValue: any;
  side: string;
}

const props = withDefaults(defineProps<IProp>(), {
  side: "left",
});

const emit = defineEmits(["update:modelValue", "blur", "input"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <DsInput type="range" v-model="model" :label="side" />
  </div>
</template>
