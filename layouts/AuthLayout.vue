<script lang="ts" setup>
import { DsImages } from "~/components/DesignSystem";
</script>

<template>
  <div class="h-screen items-center justify-center">
    <div class="flex flex-col justify-center items-center h-full">
      <div class="w-[900px]">
        <div class="columns-2">
          <slot></slot>
          <DsImages class="w-full" src="/images/builder/creador-logotipo.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
