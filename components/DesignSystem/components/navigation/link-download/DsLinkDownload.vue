<script lang="ts" setup>
import { DsIcon, DsLink } from "../../../../DesignSystem";

defineProps({
  text: {
    type: String,
    default: "Descargar comprobante (PDF)",
  },
  icon: {
    type: String,
    default: "download",
  },
});
const emit = defineEmits(["click"]);
</script>

<template>
  <DsLink
    class="btn no-underline text-white bg-blue-600 p-4 hover:text-white hover:bg-blue-700 rounded"
    @click="$emit('click')"
  >
    <DsIcon :name="icon" />
    {{ text }}
  </DsLink>
</template>
