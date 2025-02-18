<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import { toRefs, provide } from "vue";
import GlobalActions from "./GlobalActions.vue";
import DefaultAreaContainer from "./DefaultAreaContainer.vue";
const store = useBuilderStore();
const { itemsPageList } = toRefs(store);
</script>

<template>
  <article
    class="w-full pb-20 md:min-w-[723px] border border-gray-300 shadow-md rounded-md p-5 items-center overflow-auto min-h-[calc(100vh-80px)]"
  >
    <DefaultAreaContainer :items="itemsPageList" />
  </article>

  <GlobalActions />
</template>
