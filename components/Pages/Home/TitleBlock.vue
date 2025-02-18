<script lang="ts" setup>
import { DsTypography } from "~/components/DesignSystem";

interface IProp {
  title?: string;
  subTitle?: string;
}

const props = withDefaults(defineProps<IProp>(), {
  title: "Bienvenid@ al creador",
  subTitle:
    "Te recomendamos estas plantillas para comenzar tu nuevo prototipo.",
});
</script>

<template>
  <div>
    <div class="">
      <DsTypography variant="h1"> {{ title }} </DsTypography>
      <DsTypography class="font-medium">{{ subTitle }} </DsTypography>
    </div>
  </div>
</template>
