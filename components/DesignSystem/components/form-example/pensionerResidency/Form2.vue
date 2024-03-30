<script lang="ts" setup>
import DsTypography from "../../basic/typography/DsTypography.vue";
import DsInput from "../../form/input/DsInput.vue";
import DsSelect from "../../form/select/DsSelect.vue";
import type { IForm2State } from "../../../components/form-example/pensionerResidency/interface";
import {
  comunaOption,
  regionOption,
} from "../../../components/form-example/pensionerResidency/library";
import type { IVualidateFormAttorneyState } from "../../../components/form-example/pensionerResidency/vualidate";
import { translateError } from "../../../utils/translateErrorMessage";
import FormValidatorPanel from "../../../components/form/formValidatorPanel/DsFormValidatorPanel.vue";
import type { ComputedRef } from "vue";
import type { errorPanelInterface } from "../../../components/form/formValidatorPanel/interface";

const props = defineProps({
  modelValue: {
    type: Object as () => IForm2State,
    required: true,
  },
  validate: {
    type: Object as () => IVualidateFormAttorneyState,
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});
const errors = computed(() => ({
  name: props.validate?.name.$errors[0]?.$message,
  run: props.validate?.run.$errors[0]?.$message,
  region: props.validate?.region.$errors[0]?.$message,
  community: props.validate?.community.$errors[0]?.$message,
  address: props.validate?.address.$errors[0]?.$message,
  addressNumber: props.validate?.addressNumber.$errors[0]?.$message,
  email: props.validate?.email.$errors[0]?.$message,
  pensionerRelation: props.validate?.pensionerRelation.$errors[0]?.$message,
}));
const errorPanel: ComputedRef<errorPanelInterface[]> = computed(() => [
  {
    id: "name",
    details: "Nombre del posible apoderado",
    errorMessage: errors.value.name,
  },
  {
    id: "run",
    details: "Indique el RUN del posible apoderado",
    errorMessage: errors.value.run,
  },
  {
    id: "region",
    details: "Seleccione la región",
    errorMessage: errors.value.region,
  },
  {
    id: "community",
    details: "Seleccione la comuna",
    errorMessage: errors.value.community,
  },
  {
    id: "address",
    details: "Ingrese la dirección del apoderado",
    errorMessage: errors.value.address,
  },
  {
    id: "addressNumber",
    details: "Ingrese número de la dirección del apoderado",
    errorMessage: errors.value.addressNumber,
  },
  {
    id: "email",
    details:
      "Ingrese el correo electrónico del apoderado donde recibirá las notificaciones",
    errorMessage: errors.value.email,
  },
  {
    id: "pensionerRelation",
    details: "Indique el parentesco o relación con el pensionado",
    errorMessage: errors.value.pensionerRelation,
  },
]);
</script>

<template>
  <header class="mt-5 w-full">
    <DsTypography aria-hidden="true" class="text-left my-4" variant="p"
      >Los campos marcados con * son obligatorios
    </DsTypography>
  </header>
  <FormValidatorPanel id="validator-panel" :errors="errorPanel" />
  <div class="cont-form-sector mt-5 w-full">
    <header class="mb-5">
      <DsTypography variant="h3"> Información del apoderado</DsTypography>
    </header>

    <div class="cont-form-group">
      <DsInput
        id="name"
        v-model="modelValue.name"
        :error="translateError(validate?.name.$errors[0]?.$message)"
        class="input"
        label="Nombre del posible apoderado (en caso de realizar esta solicitud por parte de un tercero)"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        id="run"
        v-model="modelValue.run"
        :error="translateError(validate?.run.$errors[0]?.$message)"
        class="input"
        help-message="Ejemplo: 17.231.182-4"
        label="Indique el RUN del posible apoderado"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsSelect
        id="region"
        v-model="modelValue.region"
        :error="translateError(validate?.region.$errors[0]?.$message)"
        :option="regionOption"
        class="select w-full"
        label="Seleccione la región"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsSelect
        id="community"
        v-model="modelValue.community"
        :error="translateError(validate?.community.$errors[0]?.$message)"
        :option="comunaOption"
        class="w-full"
        label="Seleccione la comuna"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        id="address"
        v-model="modelValue.address"
        :error="translateError(validate?.address.$errors[0]?.$message)"
        class="input"
        label="Ingrese la dirección del apoderado"
        required
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        id="addressNumber"
        v-model="modelValue.addressNumber"
        :error="translateError(validate?.addressNumber.$errors[0]?.$message)"
        :maxValue="999999"
        :minValue="1"
        class="input"
        label="Ingrese número de la dirección del apoderado"
        required
        type="number"
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        id="email"
        v-model="modelValue.email"
        :error="translateError(validate?.email.$errors[0]?.$message)"
        class="input"
        label="Ingrese el correo electrónico del apoderado donde recibirá las notificaciones"
        required
        type="email"
      />
    </div>

    <div class="cont-form-group">
      <DsInput
        id="pensionerRelation"
        v-model="modelValue.pensionerRelation"
        :error="
          translateError(validate?.pensionerRelation.$errors[0]?.$message)
        "
        class="input"
        label="Indique el parentesco o relación con el pensionado"
        required
      />
    </div>
  </div>
</template>

<style scoped></style>
