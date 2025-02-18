<script lang="ts" setup>
import type { IItems } from "~/global-interface/interfaces";
import Item from "./Item.vue";

defineProps<{
  items: IItems[];
}>();
</script>

<template>
  <Item v-for="item in items" :key="item.title" :resume="false" v-bind="item" />
  <slot />
</template>
