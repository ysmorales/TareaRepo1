<script lang="ts" setup>
import { DsTypography } from "~/components/DesignSystem";
import { isNotEmpty } from "~/utils/notEmpty";
import type { SubItem } from "~/global-interface/interfaces";

const props = defineProps<{
  subItem: SubItem;
}>();

const normalizeValue = computed(() => {
  if (isNotEmpty(props.subItem.value)) {
    return Array.isArray(props.subItem.value)
      ? props.subItem.value
      : [props.subItem.value];
  }
  return [];
});
</script>

<template>
  <DsTypography
    v-if="isNotEmpty(subItem.label) && isNotEmpty(subItem.value)"
    class="mb-0"
  >
    {{ subItem.label }}
  </DsTypography>
  <div v-if="!subItem.rowRender && isNotEmpty(normalizeValue)">
    <DsTypography
      v-for="(value, index) in normalizeValue"
      :key="index"
      class="font-inriaSansBold mb-0"
      >{{ value }}
    </DsTypography>
  </div>
  <component
    :is="subItem.rowRender.component"
    v-if="subItem.rowRender && isNotEmpty(subItem.value)"
    v-bind="subItem.rowRender?.getProps()"
  />
</template>
