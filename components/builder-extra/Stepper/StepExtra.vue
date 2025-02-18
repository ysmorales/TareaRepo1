<script lang="ts" setup>
import { DsRadioGroup, DsTypography, DsRadio } from "~/components/DesignSystem";
interface IProp {
  modelValue: number;
  title: string;
  subTitle: string;
}

const props = withDefaults(defineProps<IProp>(), {
  modelValue: 1,
  title: "Información de solicitante",
  subTitle: "Los campos marcados con * son obligatorios.",
});
</script>

<template>
  <div class="mt-10">
    <DsTypography class="mb-4" variant="h2">
      {{ title }}
    </DsTypography>
    <DsTypography>{{ subTitle }}</DsTypography>
    <slot>
      <!--    form-->
      <div class="cont-form-sector mb-5">
        <DsTypography variant="h3"
          >Jefatura a quien solicitas la autorización</DsTypography
        >
        <DsTypography class="text-2xl font-inriaSans mb-0">
          asdfsdf
        </DsTypography>
        <DsTypography class="mt-5">
          Correo electrónico<br />
          <strong>df</strong>
        </DsTypography>
      </div>
      <div class="cont-form-sector mb-5">
        <DsTypography variant="h3">Franja horaria actual</DsTypography>
        <DsTypography class="text-2xl font-inriaSans mb-0"> sdf </DsTypography>
      </div>
    </slot>
  </div>
</template>
