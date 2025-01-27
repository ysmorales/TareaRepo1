<script lang="ts" setup>
import { ref } from "vue";
import { DsAccordion, DsTypography } from "../../../../../DesignSystem";
import DsUserInfo from "../../../container/user-info/DsUserInfo.vue";

defineProps({
  form: {
    type: Object as () => { email: string; rangeType: string },
    required: true,
  },
});

// Paso 1: Crear una referencia al elemento del DOM
const containerRef = ref(null);

const rangeTypes: Record<number, string> = {
  1: "8:00 a 17:00",
  2: "8:30 a 17:30",
  3: "9:00 a 18:00",
};
</script>

<template>
  <div ref="containerRef" class="mt-5">
    <DsTypography variant="h2"> Confirma tus datos </DsTypography>
  </div>
  <DsTypography>
    Estás a punto de enviar tu solicitud. Por favor verifica la exactitud de tus
    datos. Si todo está bien dale al botón "confirmar".
  </DsTypography>
  <!-- Paso 2: Asignar la referencia al elemento que deseas enfocar -->
  <div class="mt-10">
    <DsAccordion title="Información del solicitante">
      <hr class="pb-4 border-neutral-300" />
      <DsUserInfo />
    </DsAccordion>
    <DsAccordion class="mt-5" title="Jefatura Directa">
      <hr class="pb-4 border-neutral-300" />
      <p class="mb-3">
        Correo electrónico: <br />
        <strong>{{ form?.email }}</strong>
      </p>
    </DsAccordion>
    <DsAccordion class="mt-5" title="Franja Horaria">
      <hr class="pb-4 border-neutral-300" />
      <p class="mb-3">
        Horario: <br />
        <strong>{{ rangeTypes[parseInt(form?.rangeType)] }} hrs</strong>
      </p>
    </DsAccordion>
  </div>
</template>
