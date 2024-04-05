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

  <DsInput label="Nombre" size="full" type="text"/>
  <DsSelect
      :option="[{value:1,text:'Trámite en línea'},{value:1,text:'Trámite presencial'},{value:1,text:'Trámite por video atención'},
      {value:1,text:'Beneficios y pensiones'},{value:1,text:'Trámites y servicios'},{value:1,text:'Unidos'},
      {value:1,text:'Gestor de documentos'},{value:1,text:'Galería de imágenes'},{value:1,text:'Páginas'}]"
      class="mb-3"
      label="Categoría raíz de páginas asociadas"/>
  <DsInput label="Carpeta raíz de archivos S3 asociadas" size="full" type="text"/>
  <DsSelect
      :option="[{value:1,text:'Trámite en línea'},{value:1,text:'Trámite presencial'},{value:1,text:'Trámite por video atención'},
      {value:1,text:'Beneficios y pensiones'},{value:1,text:'Trámites y servicios'},{value:1,text:'Unidos'},
      {value:1,text:'Gestor de documentos'},{value:1,text:'Galería de imágenes'},{value:1,text:'Páginas'}]"
      class="mb-3"
      label="Categoría raíz de páginas asociadas"/>
  <DsSelect
      :option="[{value:1,text:'Trámite en línea'},{value:1,text:'Trámite presencial'},{value:1,text:'Trámite por video atención'},
      {value:1,text:'Beneficios y pensiones'},{value:1,text:'Trámites y servicios'},{value:1,text:'Unidos'},
      {value:1,text:'Gestor de documentos'},{value:1,text:'Galería de imágenes'},{value:1,text:'Páginas'}]"
      class="mb-3"
      label="Categoría raíz de páginas asociadas"/>
  <div class="flex justify-end mt-5">
    <DsButton class="m-1" color="tertiary" @click="handleClick">Cancelar</DsButton>
    <DsButton class="m-1" color="success">Guardar</DsButton>
  </div>
</template>

