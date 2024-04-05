<script lang="ts" setup>

import {DsButton, DsInput, DsSelect,} from "~/components/DesignSystem";

const emit = defineEmits(['cancelar'])

function handleClick() {
  emit('cancelar')
}


</script>

<template>
  <div class="flex justify-end">
    <DsButton class="m-1" color="tertiary" @click="handleClick">Cancelar</DsButton>
    <DsButton class="m-1" color="success">Guardar</DsButton>
  </div>
  <DsInput label="Nombre" size="full"/>
  <DsInput label="Correo electrónico" size="full"/>
  <DsSelect
      :option="[{value: 1,text:'Editor'},{value: 2,text:'Gestor de noticias'},{value: 3,text:'Administrador'}]"
      class="mb-4"
      label="Rol"/>
  <DsSelect :option="[{value: 1,text:'Sí'},{value: 2,text:'No'}]" class="mb-4" label="Activo"/>
  <div class="flex justify-end mt-5">
    <DsButton class="m-1" color="tertiary" @click="handleClick">Cancelar</DsButton>
    <DsButton class="m-1" color="success">Guardar</DsButton>
  </div>
</template>

