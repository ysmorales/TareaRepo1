<script lang="ts" setup>
import { DsStepper } from "~/components/DesignSystem";
interface IProp {
  modelValue: number;
  totalSteps: number;
  inEditor: boolean;
}

const props = withDefaults(defineProps<IProp>(), {
  modelValue: 1,
  totalSteps: 3,
});

const internalStep = ref(props.modelValue);
const action = ref({});

const handleStep = (newStep) => {
  internalStep.value = newStep;
};

const internalTotalStep = ref(props.totalSteps);

const handlerAddStep = () => {
  internalTotalStep.value = internalTotalStep.value + 1;
  action.value = {
    action: "addChildren",
    params: { total: internalTotalStep.value },
  };
};

const handlerRemoveStep = (stepToRemove) => {
  internalTotalStep.value = internalTotalStep.value - 1;
  action.value = {
    action: "removeChildren",
    params: { index: stepToRemove.step - 1, total: internalTotalStep.value },
  };
};

watch(
  () => props.totalSteps,
  () => {
    internalTotalStep.value = props.totalSteps;
  },
  { deep: true }
);

watch(
  () => props.modelValue,
  () => {
    internalStep.value = props.modelValue;
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
    <slot :indexShow="internalStep - 1" :action="action">
      <div class="flex justify-center mt-10">
        <h1 v-if="internalStep === 1">Componente1</h1>
        <h1 v-if="internalStep === 2">Componente2</h1>
        <h1 v-if="internalStep === 3">Componente3</h1>
        <h1 v-if="internalStep === 4">Componente4</h1>
      </div>
    </slot>
  </DsStepper>
</template>
