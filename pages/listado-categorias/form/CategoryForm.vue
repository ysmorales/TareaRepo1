<script lang="ts" setup>

import {DsButton, DsCheck, DsFile, DsInput, DsTabItem, DsTabs} from "~/components/DesignSystem";

const emit = defineEmits(['cancelar'])

function handleClick() {
  emit('cancelar')
}

function onTabChange() {

}
</script>

<template>
  <div class="flex justify-end">
    <DsButton color="tertiary" @click="handleClick">Cancelar</DsButton>
    <DsButton color="success">Guardar</DsButton>
  </div>

  <DsTabs :rounded="false">
    <DsTabItem title="Edición">
      <div>
        <DsInput label="Nombre" size="full" type="text"/>
        <DsInput label="Categoría principal" size="full" type="text"/>
      </div>
    </DsTabItem>

    <DsTabItem title="Meta">
      <div>
        <DsInput label="URL indexada en sitemap" size="full" type="text"/>
        <DsInput label="Page title" size="full" type="text"/>
        <DsCheck label="Custom page title"/>
        <h3 class="mt-5">Chileatiende - Quienes Somos</h3>
        <DsInput label="Slug" size="full" type="text"/>
        <DsInput label="Meta description" size="full" type="text"/>
        <DsCheck label="Custom Meta description"/>
        <h3 class="mt-5">El Instituto de Previsión Social (IPS), es un servicio público creado a partir del artículo 53
          de la Ley
          20.255, de Reforma al Sistema Previsional, descentralizado, y con personalidad jurídica y patrimonio
          propio....s</h3>
        <DsInput label="Twitter - Site" size="full" type="text"/>
        <DsInput label="Twitter - Title" size="full" type="text"/>
        <DsInput label="Twitter - Meta description" size="full" type="text"/>
        <DsFile label="Twitter - Imagen"/>
        <DsInput label="OpenGraph - URL" size="full" type="text"/>
        <DsInput label="OpenGraph - Type" size="full" type="text"/>
        <DsInput label="OpenGraph - Title" size="full" type="text"/>
        <DsInput label="OpenGraph - Description" size="full" type="text"/>
        <DsFile label="Opengraph - Imagen" size="full" type="text"/>
      </div>
    </DsTabItem>

  </DsTabs>

  <div class="flex justify-end">
    <DsButton color="tertiary" @click="handleClick">Cancelar</DsButton>
    <DsButton color="success">Guardar</DsButton>
  </div>
</template>

