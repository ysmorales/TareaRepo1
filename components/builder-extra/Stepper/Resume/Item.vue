<script lang="ts" setup>
import { DsAccordion, DsTypography } from "~/components/DesignSystem";
import { isNotEmpty } from "~/utils/notEmpty";
import type { SubItem } from "~/global-interface/interfaces";
import SubItemComponent from "./SubItem.vue";

const foundValue = (items: SubItem[]) => items.find((d) => isNotEmpty(d.value));

interface IProp {
  // eslint-disable-next-line vue/require-default-prop
  subItems?: SubItem[];
  // eslint-disable-next-line vue/require-default-prop
  title?: string;
  resume?: boolean;
}

withDefaults(defineProps<IProp>(), {
  resume: true,
});
</script>

<template>
  <div v-if="resume && isNotEmpty(foundValue(subItems!))" class="mb-10">
    <DsTypography class="font-inriaSansBold text-xl">{{ title }}</DsTypography>
    <div
      v-for="(subItem, index) in subItems"
      :key="index"
      :class="subItem.class ?? 'mb-1'"
    >
      <SubItemComponent :sub-item="subItem" />
    </div>
    <slot />
  </div>
  <DsAccordion
    v-if="!resume && isNotEmpty(foundValue(subItems!))"
    :title="title"
    class="mt-5"
  >
    <hr class="pb-4 border-neutral-300" />
    <div
      v-for="(subItem, index) in subItems"
      :key="index"
      :class="subItem.class ?? 'mb-3'"
    >
      <SubItemComponent :sub-item="subItem" />
    </div>
    <slot />
  </DsAccordion>
</template>
