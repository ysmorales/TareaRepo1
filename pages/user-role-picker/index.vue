<script lang="ts" setup>
import {DsButton, DsImages, DsInput, DsLink, DsSelect, DsTypography} from "~/components/DesignSystem";
</script>

<template>
  <div class="flex flex-col justify-center items-center container ">
    <div class="w-[500px]">
      <DsImages class="mb-5" src="./images/back-office/creador-logotipo.jpg"/>
      <DsTypography class="mb-5" variant="h2">¿Donde quieres comenzar?</DsTypography>
      <DsSelect
          :option="[{value:1, text:'Intranet'},{value:1, text:'Biblioteca'},{value:1, text:'Personas'},{value:1, text:'Conectados'},{value:1, text:'Sach'}]"
          label="Selecciona un ambiente de trabajo"/>
      <div class="flex mt-5 justify-between items-center">
        <DsLink href="#">¿Olvidó su usuario / contraseña?</DsLink>
        <DsButton>Ingresar</DsButton>
      </div>
    </div>
  </div>
</template>

