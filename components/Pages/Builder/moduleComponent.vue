<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";

interface IProp {
  element?: any;
}

const props = withDefaults(defineProps<IProp>(), {});

const store = useBuilderStore();
</script>

<template>
  <component
    :is="getComponentKey(element.item)"
    v-bind="filterProps(element.props)"
  />
</template>
