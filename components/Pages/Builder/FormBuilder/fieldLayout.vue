<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";
import DsTooltip from "~/components/DesignSystem/components/basic/tooltip/DsTooltip.vue";

interface IProp {
  description: string;
}

const props = withDefaults(defineProps<IProp>(), {
  description: "",
});
</script>

<template>
  <div class="flex items-end w-full">
    <div class="flex-1">
      <slot></slot>
    </div>

    <div class="mb-4 ml-2">
      <DsTooltip :text="description" position="right">
        <DsIcon name="info-circle" size="default" />
      </DsTooltip>
    </div>
  </div>
</template>
