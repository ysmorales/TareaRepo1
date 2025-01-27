<script lang="ts" setup>
import { computed, defineProps, ref } from "vue";
import { getErrorMessage } from "../../../../utils/translateErrorMessage";
import {
  DsInput,
  DsRadioGroup,
  DsTypography,
  DsRadio,
} from "../../../../../DesignSystem";
import DsUserInfo from "../../../container/user-info/DsUserInfo.vue";

const props = defineProps({
  modelValue: {
    type: Object as () => { email: string; rangeType: string },
    required: true,
    default: () => ({ email: "", rangeType: "" }),
  },
  validateForm: {
    type: Object,
    required: true,
  },
});

const rangeTypes: Record<number, string> = {
  1: "8:00 a 17:00",
  2: "8:30 a 17:30",
  3: "9:00 a 18:00",
};

const rangeTypesList = ref(
  Object.keys(rangeTypes).map((d) => ({
    id: parseInt(d),
    value: rangeTypes[parseInt(d)],
  })),
);

const emailError = computed(() =>
  getErrorMessage(props.validateForm?.email?.$errors[0]),
);
const rangeTypeError = computed(() =>
  getErrorMessage(props.validateForm?.rangeType?.$errors[0]),
);
</script>

<template>
  <div class="mt-10">
    <DsTypography class="mb-4" variant="h1">
      Información de solicitante
    </DsTypography>
    <DsTypography>Los campos marcados con * son obligatorios.</DsTypography>
    <DsUserInfo />
    <div class="cont-form-sector mb-5">
      <div>
        <DsTypography variant="h3"> Jefatura directa</DsTypography>
        <div class="mb-4">
          <DsInput
            v-model="modelValue.email"
            :error="emailError"
            label="Indique el correo de su jefatura directa"
            placeholder="Escriba aquí el correo electrónico"
            required
            type="text"
          />
        </div>
      </div>
    </div>
    <div class="cont-form-sector mb-5">
      <DsTypography variant="h3"> Franja Horaria</DsTypography>
      <div>
        <DsRadioGroup
          v-model="modelValue.rangeType"
          :error="rangeTypeError"
          label="Seleccione horario*"
        >
          <DsRadio
            v-for="item in rangeTypesList"
            :key="item.id"
            :value="item.id.toString()"
          >
            {{ item.value }}
          </DsRadio>
        </DsRadioGroup>
      </div>
    </div>
  </div>
</template>
