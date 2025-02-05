<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";

interface IProp {
  numChildrens?: number;
  id: string;
}

const props = withDefaults(defineProps<IProp>(), {});

const store = useBuilderStore();
const { itemToCopy } = toRefs(store);

watch(
  () => props.numChildrens,
  (newVal) => {
    console.log("aquiii", newVal);
  }
);
</script>

<template>
  <span />
</template>
