<script lang="ts" setup>
import { DsIcon, DsLink } from "~/components/DesignSystem";
import DsSeparator from "~/components/DesignSystem/components/basic/separator/DsSeparator.vue";

const listLinks = [
  {
    label: "Cursos internos",
    href: "https://www.google.com/",
  },
  {
    label: "Fechas de pago",
    href: "",
  },
  {
    label: "Capacitación y formación de internos",
    href: "",
  },
  {
    label: "Red de liderazgo IPS",
    href: "",
  },
  {
    label: "Menú casino",
    href: "",
  },
  {
    label: "Mi asistencia (Sistema de justificación)",
    href: "",
  },
];
</script>

<template>
  <div class="mx-3">
    <span class="mb-4">
      <DsIcon name="star" />
      <strong class="text-2xl ml-4 text-dark-400">Destacados</strong>
    </span>
    <div class="mt-12">
      <div v-for="tLink in listLinks" class="ml-6">
        <DsLink
          :href="tLink.href"
          class="no-underline text-base text-dark-500 hover:text-primary-500 hover:underline"
          color="gray"
          target="_blank"
        >
          {{ tLink.label }}
        </DsLink>
        <DsSeparator class="mb-6 mt-4 ml-[-10px]" />
      </div>
    </div>
  </div>
</template>
