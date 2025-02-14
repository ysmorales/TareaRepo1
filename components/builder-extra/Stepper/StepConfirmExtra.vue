<script lang="ts" setup>
import ResumeConfirmNew from "./Resume/ResumeConfirmNew.vue";
interface IProp {}

const props = withDefaults(defineProps<IProp>(), {});

const items = computed(() => [
  {
    title: "Información del solicitante",
    subItems: [
      {
        label: "Nombre",
        value: "some",
      },
      {
        label: "RUN",
        value: "some",
      },
      {
        label: "Correo Electrónico",
        value: "some",
      },
    ],
  },
  {
    title: "Jefatura a quien solicitas la autorización",
    subItems: [
      {
        label: "Nombre",
        value: "some",
      },
      {
        label: "Correo electrónico",
        value: "some",
      },
    ],
  },
  {
    title: "Franja horaria actual",
    subItems: [
      {
        label: "Horario",
        value: "some",
      },
    ],
  },
  {
    title: "Franja horaria solicitada",
    subItems: [
      {
        label: "Horario",
        value: "some",
      },
    ],
  },
  {
    title: "Inicio de la franja horaria solicitada",
    subItems: [
      {
        label: "Fecha de inicio",
        value: "some",
      },
    ],
  },
]);

const theItems = computed(() =>
  items.value.filter((f) => {
    return isNotEmpty(f.subItems.filter((d) => d.value && d.value));
  })
);
</script>

<template>
  <ResumeConfirmNew :items="theItems" />
  <slot></slot>
</template>
