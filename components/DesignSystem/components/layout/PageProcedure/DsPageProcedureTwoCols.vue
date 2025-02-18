<script lang="ts" setup>
import { DsTypography } from "~/components/DesignSystem";
import type { IError, IConfig } from "~/global-interface/interfaces";
import ConnectionErrorComponent from "~/components/pages/cambio-hora-components/ConnectionErrorComponent.vue";

defineProps<{
  title?: string;
  title2?: string;
  subtitle?: string;
  error?: IError;
  config?: IConfig;
  onlyCenter?: boolean;
}>();
</script>

<template>
  <div class="lg:flex h-full">
    <Title> {{ title }} | {{ config?.title }}</Title>
    <div class="w-full block md:flex justify-center bg-[#f2f9ff]">
      <div class="w-full min-h-[85vh] px-5 py-5 md:max-w-[750px]">
        <ConnectionErrorComponent v-if="error" :error="error" />
        <DsTypography v-if="!!title" variant="h1">
          {{ title }}
        </DsTypography>
        <DsTypography v-if="!!title2" variant="h1">
          {{ title2 }}
        </DsTypography>

        <span v-if="!!subtitle" class="mt-5" variant="h2">
          {{ subtitle }}
        </span>
        <hr v-if="!!title" class="border-blue-100 mb-4 mt-2" />

        <slot name="center">center info</slot>
      </div>
    </div>
    <div
      class="border-t border-[#cfeafe] bg-[#ffff] md:border-none md:w-1/3 md:flex flex-col py-6 md:py-2"
      v-if="!onlyCenter"
    >
      <slot name="right">right info</slot>
    </div>
  </div>
</template>
