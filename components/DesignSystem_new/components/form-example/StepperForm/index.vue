<script lang="ts" setup>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { reactive, ref } from "vue";
import DsStepper from "../../form/stepper/DsStepper.vue";
import Step1Form from "./steppers/Step1Form.vue";
import Step2Confirmation from "./steppers/Step2Confirmation.vue";
import Step3Response from "./steppers/Step3Response.vue";

const step = ref(1);

const form = reactive({ email: "", rangeType: "" });

const formRules = reactive({
  email: { required, email },
  rangeType: { required },
});

const validateForm = useVuelidate(formRules, form);

function handleStepperSubmit() {
  // logic to send the form
  step.value = 3;
}

function handleChangeStep(stepTemp: number) {
  switch (stepTemp) {
    case 1:
      step.value = stepTemp;
      break;
    case 2:
      validateForm.value.$touch();
      if (!validateForm.value.$invalid) {
        step.value = stepTemp;
      }
      break;
    case 3:
      handleStepperSubmit();
      break;
  }
}
</script>

<template>
  <DsStepper v-model="step" :total-steps="3" @change-step="handleChangeStep">
    <Step1Form
      v-if="step == 1"
      v-model:form="form"
      :validate-form="validateForm"
    />
    <Step2Confirmation v-if="step == 2" :form="form" />
    <Step3Response
      v-if="step == 3"
      :form="form"
      id-solicitud="126"
      status="success"
    />
  </DsStepper>
</template>
