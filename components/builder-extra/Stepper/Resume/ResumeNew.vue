<script lang="ts" setup>
import type { IItems } from "~/global-interface/interfaces";
import ImageSomos from "./ImageSomos.vue";
import { DsTypography } from "~/components/DesignSystem";
import Item from "./Item.vue";

defineProps<{
  items: IItems[];
  title?: string;
  subTitle?: string;
}>();
</script>

<template>
  <div class="p-4 bg-white my-5">
    <ImageSomos />
    <DsTypography class="font-inriaSansBold text-3xl">{{ title }}</DsTypography>
    <DsTypography>{{ subTitle }}</DsTypography>
    <hr class="py-3 border-blue-200" />
    <Item v-for="item in items" :key="item.title" v-bind="item" />
    <ImageSomos type="final" />
    <slot />
  </div>
</template>
