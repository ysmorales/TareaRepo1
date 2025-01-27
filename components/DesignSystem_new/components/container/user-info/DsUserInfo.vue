<script lang="ts" setup>
import DsTypography from "../../basic/typography/DsTypography.vue";
import type { IUserInfo } from "./types";

interface IProp {
  user: IUserInfo;
}

defineProps<IProp>();
</script>

<template>
  <!--    info area -->
  <div class="cont-form-sector mb-5">
    <DsTypography class="text-lg font-inriaSans mb-0">
      {{ user?.nombre_funcionario }}
    </DsTypography>
    <DsTypography class="font-semibold font-inriaSans mb-0">
      {{ user?.unidad }}
    </DsTypography>
    <DsTypography class="mt-2 text-sm">
      Correo electrónico<br />
      <strong>{{ user?.email }}</strong>
    </DsTypography>
  </div>
</template>
