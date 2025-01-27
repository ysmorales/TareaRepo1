<script lang="ts" setup>
import {
  DsAlert,
  DsButton,
  DsTag,
  DsTypography,
} from "../../../../../DesignSystem";
import DsUserInfo from "../../../container/user-info/DsUserInfo.vue";

defineProps({
  status: {
    type: String as () => "success" | "error",
    required: true,
  },
  form: {
    type: Object as () => { email: string; rangeType: string },
    required: true,
  },
  idSolicitud: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["backRequests"]);

function handleBackRequests() {
  emit("backRequests");
}

const rangeTypes: Record<number, string> = {
  1: "8:00 a 17:00",
  2: "8:30 a 17:30",
  3: "9:00 a 18:00",
};
</script>

<template>
  <div>
    <DsTypography class="mb-4" variant="h2"> Resumen solicitud</DsTypography>
    <DsAlert
      v-if="status == 'success'"
      class="mt-10"
      title="Solicitud enviada exitosamente"
      type="success"
    >
      Estaremos respondiendo a su correo electrónico y al correo de jefatura
      directa ingresado anteriormente.
    </DsAlert>
    <div class="p-5 border border-primary-500 bg-white rounded-lg mt-5">
      <DsTypography variant="h2"> Detalle de la solicitud</DsTypography>
      <DsTypography>
        Comprobante solicitud cambio de franja horaria
      </DsTypography>
      <hr class="py-3" />
      <DsTypography variant="h2"> Solicitante</DsTypography>
      <DsUserInfo />
      <DsTypography class="mt-5" variant="h2"> Jefatura directa</DsTypography>
      <DsTypography class="mb-3">
        Correo electrónico: <br />
        <strong>{{ form?.email }}</strong>
      </DsTypography>
      <DsTypography class="mt-5" variant="h2"> Franja horaria</DsTypography>
      <DsTypography class="mb-3">
        Horario: <br />
        <strong>{{ rangeTypes[parseInt(form?.rangeType)] }} hrs</strong>
      </DsTypography>
      <DsTypography class="mt-5" variant="h2"> Seguimiento</DsTypography>
      <DsTypography class="mb-3">
        Nº solicitud: <br />
        <strong>{{ idSolicitud }}</strong>
      </DsTypography>
      <DsTypography class="mb-3">
        Fecha de solicitud: <br />
        <strong>{{ "22/10/2024" }}</strong>
      </DsTypography>
      <DsTypography>
        Estado: <br />
        <DsTag color="primary" text="Pendiente" />
      </DsTypography>
    </div>
    <div class="flex justify-end mt-5">
      <DsButton
        color="secondary"
        text="Volver al inicio"
        @click="handleBackRequests"
      />
    </div>
  </div>
</template>
