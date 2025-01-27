<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import { toRefs } from "vue";

import NesteDraggable from "./nestled.vue";
import GlobalActions from "./GlobalActions.vue";
import AddBlock from "./AddBlock.vue";

const store = useBuilderStore();
const { itemsPageList, areaMode } = toRefs(store);
</script>

<template>
  <article
    class="w-full pb-20 md:min-w-[723px] border border-gray-300 shadow-md rounded-md p-5 items-center overflow-auto min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)]"
  >
    <AddBlock type="section" emptyList v-if="itemsPageList.length === 0" />
    <NesteDraggable :items="itemsPageList" :areaMode="areaMode" />
  </article>

  <GlobalActions />
</template>
