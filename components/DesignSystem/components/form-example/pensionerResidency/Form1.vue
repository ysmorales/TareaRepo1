<script lang="ts" setup>
import DsTypography from "../../../components/basic/typography/DsTypography.vue";
import DsRadio from "../../../components/form/radio-group/DsRadio.vue";
import DsSelect from "../../../components/form/select/DsSelect.vue";
import DsFile from "../../../components/form/file/DsFile.vue";
import DsDatePicker from "../../../components/form/datePicker/DsDatePicker.vue";
import DsInput from "../../../components/form/input/DsInput.vue";
import type { IForm1State } from "../../../components/form-example/pensionerResidency/interface";
import { translateError } from "../../../utils/translateErrorMessage";
import {
  comunaOption,
  healthStatusOption,
  reasonOption,
  regionOption,
  residenceOption,
  userProfile,
} from "../../../components/form-example/pensionerResidency/library";
import type { IVualidateApplicantState } from "../../../components/form-example/pensionerResidency/vualidate";
import DsModal from "../../../components/container/modal/DsModal.vue";
import FormModal from "../../../components/form-example/pensionerResidency/form1Components/FormModal.vue";
import UserCardProfile from "../../../components/form-example/pensionerResidency/form1Components/UserCardProfile.vue";
import UserInfo from "../../../components/form-example/pensionerResidency/form1Components/UserInfo.vue";
import FormValidatorPanel from "../../../components/form/formValidatorPanel/DsFormValidatorPanel.vue";
import type { errorPanelInterface } from "../../../components/form/formValidatorPanel/interface";
import type { ComputedRef } from "vue";
import DsRadioGroup from "../../../components/form/radio-group/DsRadioGroup.vue";

const props = defineProps({
  modelValue: {
    type: Object as () => IForm1State,
    required: true,
  },
  validate: {
    type: Object as () => IVualidateApplicantState,
  },
});

const date = ref(new Date());
const showModal = ref(false);

function handleClick() {
  showModal.value = true;
}

const errors = computed(() => ({
  applicant: props.validate?.applicant.$errors[0]?.$message,
  reason: props.validate?.reason.$errors[0]?.$message,
  docFile: props.validate?.docFile.$errors[0]?.$message,
  date: props.validate?.date.$errors[0]?.$message,
  phone: props.validate?.phone.$errors[0]?.$message,
  mail: props.validate?.mail.$errors[0]?.$message,
  healthStatus: props.validate?.healthStatus.$errors[0]?.$message,
  residence: props.validate?.residence.$errors[0]?.$message,
  region: props.validate?.region.$errors[0]?.$message,
  comuna: props.validate?.comuna.$errors[0]?.$message,
  address: props.validate?.address.$errors[0]?.$message,
  number: props.validate?.number.$errors[0]?.$message,
}));
const errorPanel: ComputedRef<errorPanelInterface[]> = computed(() => [
  {
    id: "applicant",
    details: "¿Quién solicita la visita?",
    errorMessage: errors.value.applicant,
  },
  {
    id: "reason",
    details:
      "Ingrese el motivo fundado por el cual se está solicitando esta visita",
    errorMessage: errors.value.reason,
  },
  {
    id: "file",
    details: "Adjunte documento",
    errorMessage: errors.value.docFile,
  },
  {
    id: "date",
    details: "Fecha de nacimiento ",
    errorMessage: errors.value.date,
  },
  {
    id: "phone",
    details: "Teléfono del pensionado",
    errorMessage: errors.value.phone,
  },
  {
    id: "mail",
    details: "Correo electrónico del pensionado",
    errorMessage: errors.value.mail,
  },
  {
    id: "healthStatus",
    details: "Estado de salud del pensionado",
    errorMessage: errors.value.healthStatus,
  },
  {
    id: "residence",
    details: "Residencia del pensionado",
    errorMessage: errors.value.residence,
  },
  {
    id: "region",
    details: "Región ",
    errorMessage: errors.value.region,
  },
  {
    id: "comuna",
    details: "Comuna",
    errorMessage: errors.value.comuna,
  },
  {
    id: "address",
    details: "Dirección del pensionado",
    errorMessage: errors.value.address,
  },
  {
    id: "number",
    details: "Número",
    errorMessage: errors.value.number,
  },
]);
</script>

<template>
  <DsModal v-model="showModal" title="Editar datos de Contacto">
    <FormModal :data-form="userProfile" />
  </DsModal>
  <div class="mt-5 w-full">
    <div id="relleno">
      <DsTypography class="my-4" variant="h2">Formulario</DsTypography>

      <div class="cont-form-sector">
        <UserCardProfile
          :data-profile="userProfile"
          @button-click="handleClick"
        />
      </div>

      <UserInfo />
    </div>

    <DsTypography aria-hidden="true" class="my-4" variant="p"
      >Los campos marcados con * son obligatorios
    </DsTypography>

    <div class="my-5">
      <FormValidatorPanel id="validator-panel" :errors="errorPanel" />
    </div>
    <form class="cont-form-sector">
      <header>
        <DsTypography variant="h3"> Información del solicitante</DsTypography>
      </header>

      <fieldset
        aria-labelledby="label_quien_solicita_visita"
        class="cont-form-group"
        role="radiogroup"
      >
        <legend id="label_quien_solicita_visita" class="mb-2">
          ¿Quién solicita la visita? *
        </legend>
        <div class="control">
          <DsRadioGroup
            id="applicant"
            v-model="modelValue.applicant"
            :error="translateError(validate?.applicant.$errors[0]?.$message)"
            label="¿Quién solicita la visita?"
            required
          >
            <DsRadio name="applicant" value="Pensionado">Pensionado</DsRadio>
            <DsRadio name="applicant" value="Familiar directo"
              >Familiar directo
            </DsRadio>
            <DsRadio name="applicant" value="Encargado de cuidados u otro"
              >Encargado de cuidados u otro
            </DsRadio>
          </DsRadioGroup>
        </div>
      </fieldset>

      <div class="cont-form-group">
        <DsSelect
          id="reason"
          v-model="modelValue.reason"
          :error="translateError(validate?.reason.$errors[0]?.$message)"
          :option="reasonOption"
          class="select w-full"
          label="Ingrese el motivo fundado por el cual se está solicitando esta visita"
          placeholder="Seleccione"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsFile
          id="file"
          v-model="modelValue.docFile"
          :error="translateError(validate?.docFile.$errors[0]?.$message)"
          class="upload control file-label"
          helpText="PDF, JPG o PNG"
          label="Adjunte documento"
          required
          size="full"
        />
      </div>

      <div>
        <DsDatePicker
          id="date"
          v-model="modelValue.date"
          :error="translateError(validate?.date.$errors[0]?.$message)"
          class="columns is-mobile mb-0"
          label="Fecha de nacimiento"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsInput
          id="phone"
          v-model="modelValue.phone"
          :error="translateError(validate?.phone.$errors[0]?.$message)"
          help-message="Ejemplos: Móvil:  91234567 / Fijo: 521234567"
          label="Teléfono del pensionado"
          placeholder="Ingresa el teléfono del pensionado"
          required
          type="phone"
        />
      </div>

      <div class="cont-form-group">
        <DsInput
          id="mail"
          v-model="modelValue.mail"
          :error="translateError(validate?.mail.$errors[0]?.$message)"
          label="Correo electrónico del pensionado"
          placeholder="Ingresa el correo electrónico del pensionado"
          required
          type="email"
        />
      </div>

      <div class="cont-form-group">
        <DsSelect
          id="healthStatus"
          v-model="modelValue.healthStatus"
          :error="translateError(validate?.healthStatus.$errors[0]?.$message)"
          :option="healthStatusOption"
          class="select w-full"
          label="Estado de salud del pensionado"
          placeholder="Selecciona el estado de salud del pensionado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsSelect
          id="residence"
          v-model="modelValue.residence"
          :error="translateError(validate?.residence.$errors[0]?.$message)"
          :option="residenceOption"
          class="select w-full"
          label="Residencia del pensionado"
          placeholder="Seleccione residencia del pensionado"
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
          label="Región"
          placeholder="Selecciona la región del pensionado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsSelect
          id="comuna"
          v-model="modelValue.comuna"
          :error="translateError(validate?.comuna.$errors[0]?.$message)"
          :option="comunaOption"
          class="select w-full"
          label="Comuna"
          placeholder="Selecciona la comuna del pensionado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsInput
          id="address"
          v-model="modelValue.address"
          :error="translateError(validate?.address.$errors[0]?.$message)"
          class="input"
          label="Dirección del pensionado"
          placeholder="Ingresa la dirección del pensionado"
          required
        />
      </div>

      <div class="cont-form-group">
        <DsInput
          id="number"
          v-model="modelValue.number"
          :error="translateError(validate?.number.$errors[0]?.$message)"
          :maxValue="999999"
          :minValue="1"
          class="input"
          label="Número"
          placeholder="Ingrese número de la dirección del pensionado"
          required
          type="number"
        />
      </div>
    </form>
  </div>
</template>
