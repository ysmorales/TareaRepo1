<script lang="ts" setup>
import DsTypography from "../../../components/basic/typography/DsTypography.vue";
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import {computed} from "vue"

const props = defineProps({
  title: {
    type: String,
    default: "No title defined",
  },

  subtitle: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
</script>

<template>
  <div :class="['container max-w-[800px] mx-auto', filterClassComp]">
    <section>
      <DsTypography class="m-4" variant="h2">
        {{ title }}
      </DsTypography>

      <DsTypography class="mb-4" variant="p">
        {{ subtitle }}
      </DsTypography>

      <slot> [No items defined] </slot>
    </section>
  </div>
</template>