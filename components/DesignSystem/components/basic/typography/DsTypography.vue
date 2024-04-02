<script lang="ts" setup>
import {elements, otherStyle} from "./data";
import type {
  DsElementNameType,
  IDsTypographyElement,
} from "../../basic/typography/interfaces";
import {filterClass} from "../../../utils/filterClass";
import {predefinedClasses} from "../../../common/propsStyle";
import generateUniqueId from "../../../utils/generateUniqueId";
import type {ILinkVariant} from "../../navigation/link/interface";
import {variantTypographyClasses} from "../../navigation/link/library";
import {computed, ref, onMounted} from "vue";

const props = defineProps({
  text: {
    default: "Default text",
  },

  variant: {
    type: String as () => DsElementNameType,
    default: "p",
  },
  id: {
    type: String,
  },
  color: {
    type: String as () => ILinkVariant,
    default: "dark",
  },

  class: {
    default: "",
  },
});
const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("typography");
});
// const uniqueId = computed(() => generateUniqueId( 'typography'));

const element = computed((): IDsTypographyElement => {
  const el = elements.find((el) => el.name === props.variant);

  if (el) {
    return {
      ...el,
      name: el.name as DsElementNameType,
    };
  }

  throw new Error("Element not found");
});

const filterClassComp = computed(() => {
  // return filterClass(predefinedClasses, props.class, otherStyle);
  return props.class
});
</script>

<template>
  <component
      :is="element.component"
      :id="id ?? uniqueID"
      :class="[filterClassComp, variantTypographyClasses[color]]"
  >
    <slot>
      {{ text }}
    </slot>
  </component>
</template>
