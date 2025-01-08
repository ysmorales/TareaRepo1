<script lang="ts" setup>
import DsAlert from "../../../../DesignSystem/components/basic/alert/DsAlert.vue";
import type { IError, IErrorWithMessage } from "./interfaces";
import { computed } from "vue";

const props = defineProps<{
  error?: IError & IErrorWithMessage;
  title?: string;
  message?: string;
  showDebug?: boolean;
  alertType?: "danger" | "warning" | "info" | "success";
  debugInDevModeOnly?: boolean;
}>();

const showErrorDebug = computed(() => {
  if (props.debugInDevModeOnly) {
    return process.env.NODE_ENV === "development" && props.showDebug;
  }
  return props.showDebug;
});
</script>

<template>
  <DsAlert :title="title || 'Error'" :type="alertType || 'danger'">
    {{
      props.message ||
      "Lo sentimos, no pudimos conectar con nuestros servidores en este momento. Por favor, verifica tu conexión a internet e inténtalo de nuevo. Si el problema persiste, no dudes en contactar a nuestro soporte técnico. Agradecemos tu paciencia y comprensión."
    }}

    <div v-if="showErrorDebug">
      <br />
      {{ error?.glosaRetorno ?? error }}
    </div>
  </DsAlert>
</template>
