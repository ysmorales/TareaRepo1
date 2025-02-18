<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import HighlightedCode from "../HighlightedCode.vue";

const store = useBuilderStore();
const { itemsPageList } = toRefs(store);

const getCurrentFormData = computed(() =>
  getFormFieldValues(itemsPageList.value)
);
</script>

<template>
  <div class="">
    <HighlightedCode :text="getCurrentFormData" />
  </div>
</template>
