<script lang="ts" setup>
import { DsImages, DsTypography } from "~/components/DesignSystem";
import type { IConfig } from "~/global-interface/interfaces";

defineProps<{
  title?: string;
  config?: IConfig;
}>();
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-[200px] self-start mt-12">
      <DsImages class="mb-5" src="/images/somos/logo-somos.svg" />
    </div>
    <div class="w-full md:max-w-[750px] lg:max-w-[900px]">
      <Title> {{ title }} | {{ config?.title }}</Title>
      <DsTypography v-if="!!title" variant="h1">
        {{ title }}
      </DsTypography>
      <hr v-if="!!title" class="border-blue-100 mb-10" />
      <slot></slot>
    </div>
  </div>
</template>
