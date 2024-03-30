<script lang="ts" setup>
import DsTypography from "../typography/DsTypography.vue";
import DsIcon from "../icon/DsIcon.vue";
import { predefinedClasses } from "../../../common/propsStyle";
import { filterClass } from "../../../utils/filterClass";
import { alertConfig } from "../alert/library";
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String as () => IAlertType,
    default: "info",
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  title: {
    type: String,
    default: null,
  },

  text: {
    type: String,
    default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum assumenda fugiat consequatur sunt,
     labore, inventore cumque illo deleniti itaque, provident excepturi. Dicta nulla nesciunt eaque iste repudiandae tempora quod?`,
  },

  showIcon: {
    type: Boolean,
    default: true,
  },
  class: {
    type: String,
    default: "",
  },
});

const cssClasses = computed(() => {
  const filterClassComp = filterClass(predefinedClasses, props.class);
  const baseClass = {
    rounded: props.rounded,
    [filterClassComp]: true,
  };
  const typeClass = alertConfig[props.type] ?? {};

  return {
    component: ["p-4 mb-2", typeClass.bg, baseClass],
    title: [typeClass.title].join(" "),
    icon: typeClass.icon,
    defaultText: typeClass.defaultText,
  };
});
</script>

<template>
  <div :class="cssClasses.component" class="rounded-lg">
    <DsTypography :class="cssClasses.title" variant="h3">
      <DsIcon v-if="showIcon" :name="cssClasses.icon" size="medium" />
      {{ title ?? cssClasses.defaultText }}
    </DsTypography>

    <slot>
      {{ text }}
    </slot>
  </div>
</template>
