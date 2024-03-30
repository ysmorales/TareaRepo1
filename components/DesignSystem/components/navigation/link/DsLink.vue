<script lang="ts" setup>
import { otherStyle, variantLinkClasses } from "./library";
import type { ILinkSize, ILinkVariant } from "./interface";
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import {computed} from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "default text",
  },

  color: {
    type: String as () => ILinkVariant,
    default: "primary",
  },

  size: {
    type: String as () => ILinkSize,
    default: "base",
  },

  href: {
    type: String,
    default: "#",
  },

  class: {
    type: String,
    default: "",
  },
  target: {
    type: String as () => "_self" | "_blank",
  },
  title: {
    type: String,
  },
});

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class, otherStyle);
});

const cssClasses = computed(() => [
  filterClassComp.value,
  `text-${props.size}`,
  variantLinkClasses[props.color],
  {
    underline: !filterClassComp.value.includes("no-underline"),
  },
]);
</script>

<template>
  <NuxtLink :class="cssClasses" :target="target" :title="title" :to="href">
    <slot>
      {{ text }}
    </slot>
  </NuxtLink>
</template>
