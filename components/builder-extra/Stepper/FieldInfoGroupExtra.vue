<script lang="ts" setup>
import { DsTypography } from "~/components/DesignSystem";
interface IProp {
  title: string;
}

const props = withDefaults(defineProps<IProp>(), {
  title: "Jefatura a quien solicitas la autorización",
});
</script>

<template>
  <div class="cont-form-sector mb-5">
    <DsTypography variant="h3">{{ title }}</DsTypography>
    <slot>
      <DsTypography class="text-2xl font-inriaSans mb-0">
        Zeralys Garcia M
      </DsTypography>
      <DsTypography class="mt-5">
        Correo electrónico<br />
        <strong>zgarciam.srv@chileatiende.cl</strong>
      </DsTypography>
    </slot>
  </div>
</template>
