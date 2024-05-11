<script lang="ts" setup>
import { sizeAvatarClasses } from "../../../common/propsStyle";
import { computed } from "vue";

type ISize = "xSmall" | "small" | "medium" | "large";

const props = defineProps({
  size: {
    type: String as () => ISize,
    default: "large",
  },
  alt: {
    type: String,
    default: "alt-default",
  },
  src: {
    type: String,
    default: "/images/avatar.jpg",
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  // return filterClass(predefinedClasses, props.class);
  return props.class;
});
</script>

<template>
  <img
    :alt="alt"
    :class="['rounded-full', filterClassComp, sizeAvatarClasses[size]]"
    :src="src"
  />
</template>
