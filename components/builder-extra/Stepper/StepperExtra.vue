<script lang="ts" setup>
import { DsStepper } from "~/components/DesignSystem";
interface IProp {
  step: number;
  totalSteps: number;
}

const props = withDefaults(defineProps<IProp>(), {
  step: 1,
  totalSteps: 3,
});

const internalStep = ref(props.step);

const handleStep = (newStep) => {
  internalStep.value = newStep;
};

watch(
  () => props.step,
  () => {
    internalStep.value = props.step;
  },
  { deep: true }
);
</script>

<template>
  <DsStepper
    v-model="internalStep"
    @change-step="handleStep"
    :total-steps="totalSteps"
    editor-interactive
  >
    <slot :indexShow="internalStep - 1">
      <div class="flex justify-center mt-10">
        <h1 v-if="step === 1">Componente1</h1>
        <h1 v-if="step === 2">Componente2</h1>
        <h1 v-if="step === 3">Componente3</h1>
        <h1 v-if="step === 4">Componente4</h1>
      </div>
    </slot>
  </DsStepper>
</template>
