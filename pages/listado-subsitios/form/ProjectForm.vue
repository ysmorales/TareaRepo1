<script lang="ts" setup>

import {DsButton, DsCheck, DsFile, DsInput, DsTabItem, DsTabs} from "~/components/DesignSystem";

const emit = defineEmits(['cancelar'])

function handleClick() {
  emit('cancelar')
}


</script>

<template>
  <div class="flex justify-end">
    <DsButton color="tertiary" @click="handleClick">Cancelar</DsButton>
    <DsButton color="success">Guardar</DsButton>
  </div>

  <h1>Project Form</h1>

  <div class="flex justify-end">
    <DsButton color="tertiary" @click="handleClick">Cancelar</DsButton>
    <DsButton color="success">Guardar</DsButton>
  </div>
</template>

