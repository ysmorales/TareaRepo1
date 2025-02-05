<script lang="ts" setup>
import { DsStepper } from "~/components/DesignSystem";
interface IProp {
  step: number;
  totalSteps: number;
  inEditor: boolean;
}

const props = withDefaults(defineProps<IProp>(), {
  step: 1,
  totalSteps: 3,
});

const internalStep = ref(props.step);

const handleStep = (newStep) => {
  internalStep.value = newStep;
};

const internalTotalStep = ref(props.totalSteps);

const handlerAddStep = () => {
  internalTotalStep.value = internalTotalStep.value + 1;
};

const handlerRemoveStep = () => {
  internalTotalStep.value = internalTotalStep.value - 1;
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
    @handler-add-new-step="handlerAddStep"
    @handler-remove-step="handlerRemoveStep"
    :total-steps="internalTotalStep"
    :editor-interactive="inEditor"
  >
    <slot :indexShow="internalStep - 1" :numChildrens="internalTotalStep">
      <div class="flex justify-center mt-10">
        <h1 v-if="internalStep === 1">Componente1</h1>
        <h1 v-if="internalStep === 2">Componente2</h1>
        <h1 v-if="internalStep === 3">Componente3</h1>
        <h1 v-if="internalStep === 4">Componente4</h1>
      </div>
    </slot>
  </DsStepper>
</template>
