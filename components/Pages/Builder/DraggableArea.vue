<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import { toRefs } from "vue";

import NesteDraggable from "./nestled.vue";
import GlobalActions from "./GlobalActions.vue";

const store = useBuilderStore();
const { addItemToForm, itemsPageList } = toRefs(store);
const emit = defineEmits(["property", "remove", "validate"]);

const drop = () => {
  addItemToForm.value();
};
</script>

<template>
  <div
    class="w-full pb-20 md:min-w-[723px] border border-gray-300 shadow-md rounded-md p-5 items-center overflow-auto min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)]"
  >
    <NesteDraggable :items="itemsPageList" />
  </div>

  <GlobalActions />
</template>
