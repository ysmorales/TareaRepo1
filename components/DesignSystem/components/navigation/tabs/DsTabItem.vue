<script lang="ts" setup>
import { inject, onBeforeMount, watch } from "vue";
import generateUniqueId from "../../../utils/generateUniqueId";
import {computed,ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Default title",
    required: true,
  },

  icon: {
    type: String,
    default: null,
  },
});

const uniqueId = computed(() => generateUniqueId( 'tab-item'));

const isActive = ref(false);

const addTab: any = inject("addTab");
const tabChange: any = inject("tabChange");
const activeTab: any = inject<string>("activeTab");

let itemData: any = null;

onBeforeMount(() => {
  itemData = {
    id: uniqueId,
    title: props.title,
    icon: props.icon ?? null,
  };

  addTab(itemData);
});

watch(activeTab, () => {
  const oldActive = isActive.value;
  isActive.value = activeTab.value.id === uniqueId.value;

  if (isActive.value && !oldActive) {
    tabChange(itemData);
  }
});
</script>

<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
