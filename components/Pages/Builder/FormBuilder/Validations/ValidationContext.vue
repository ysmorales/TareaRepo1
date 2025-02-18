<script lang="ts" setup>
import { useNodeValidator } from "./FormValidationComposable";

interface IProp {
  items?: any;
}

const props = withDefaults(defineProps<IProp>(), {
  items: [],
});

const { validateForm, form, formRules } = useNodeValidator(props.items);
</script>

<template>
  <slot :validateForm="validateForm" name="form" />
</template>
