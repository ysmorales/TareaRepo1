<script lang="ts" setup>
import { DsBreadcrumb, DsTypography } from "~/components/DesignSystem";
import type { IBreadcrumbItem } from "~/components/DesignSystem/components/navigation/breadcrumb/interface";
import type { IError, IConfig } from "~/global-interface/interfaces";
import ConnectionErrorComponent from "~/components/generic-components/ConnectionErrorComponent.vue";

defineProps<{
  title?: string;
  title2?: string;
  subtitle?: string;
  items?: IBreadcrumbItem[];
  status?: string;
  error?: IError;
  config?: IConfig;
}>();

const showBreadcrumb = false;
</script>

<template>
  <div>
    <Title> {{ title }} | {{ config?.title }}</Title>
    <ConnectionErrorComponent v-if="error" :error="error" />
    <DevOnly>
      <DsBreadcrumb v-if="!!items && showBreadcrumb" :items="items" />
    </DevOnly>
    <DsTypography v-if="!!title && !showBreadcrumb" variant="h1">
      {{ title }}
    </DsTypography>
    <DsTypography v-if="!!title2 && !showBreadcrumb" variant="h1">
      {{ title2 }}
    </DsTypography>
    <hr v-if="!!title && !showBreadcrumb" class="border-blue-100 mb-10" />
    <DsTypography v-if="!!subtitle" class="mt-5" variant="h2">
      {{ subtitle }}
    </DsTypography>
    <slot></slot>
  </div>
</template>
