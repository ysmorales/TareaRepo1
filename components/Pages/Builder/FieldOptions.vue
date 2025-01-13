<script lang="ts" setup>
import { DsAccordion, DsIcon, DsTypography } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
const store = useBuilderStore();
const { changeModal, builderItems, currentEditItem } = toRefs(store);

interface IProp {
  item: any;
}

const props = withDefaults(defineProps<IProp>(), {
  item: {},
});
</script>

<template>
  <div class="m-2">
    <div>{{ item }}</div>
  </div>
</template>
