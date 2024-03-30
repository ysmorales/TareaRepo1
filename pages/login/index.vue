<script lang="ts" setup>

import {DsButton, DsImages, DsInput, DsLink, DsTypography} from "~/components/DesignSystem";
</script>

<template>
  <div class="flex flex-col justify-center items-center container ">
    <div class="w-[500px]">
      <DsImages class="mb-5" src="./images/back-office/creador-logotipo.jpg"/>
      <DsTypography class="mb-5" variant="h2">Bienvenid@ nuevamente :)</DsTypography>
      <DsInput label="Usuario" size="full" type="text"/>
      <DsInput label="Contraseña" size="full" type="text"/>
      <div class="flex mt-5 justify-between items-center">
        <DsLink href="#">¿Olvidó su usuario / contraseña?</DsLink>
        <DsButton>Ingresar</DsButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>