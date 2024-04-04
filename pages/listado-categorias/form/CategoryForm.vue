<script lang="ts" setup>

import {DsButton} from "~/components/DesignSystem";

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
  <form>

  </form>
  <div class="flex justify-end">
    <DsButton color="tertiary" @click="handleClick">Cancelar</DsButton>
    <DsButton color="success">Guardar</DsButton>
  </div>
</template>

<style scoped>

</style>