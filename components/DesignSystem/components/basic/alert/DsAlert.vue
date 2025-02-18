<script lang="ts" setup>
import { computed } from "vue";
import { predefinedClasses } from "../../../common/propsStyle";
import { filterClass } from "../../../utils/filterClass";
import DsTypography from "../typography/DsTypography.vue";
import DsIcon from "../icon/DsIcon.vue";

import type { IIconName } from "../icon/types";
import type { IAlertType } from "./types";
import { alertConfig } from "./library";

interface IProp {
  icon?: IIconName | string;
  showIcon?: boolean;
  type?: IAlertType;
  title?: string;
  rounded?: boolean;
  text?: string;
}

const $props = withDefaults(defineProps<IProp>(), {
  type: "info",
  showIcon: true,
  title: "Información",
});

const alertStyle = computed(() => alertConfig[$props.type]);
const icon = computed<string | IIconName>(
  () => $props.icon ?? alertStyle.value?.icon,
);

const cssClasses = computed(() => {
  const filterClassComp = filterClass(predefinedClasses, "");
  const baseClass = {
    rounded: $props.rounded,
    [filterClassComp]: true,
  };
  const typeClass = alertConfig[$props.type] ?? {};

  return {
    component: [typeClass.bg ?? "border-primary-500", baseClass, "px-3 py-2"],
    title: typeClass?.title,
    icon: typeClass?.icon,
    defaultText: typeClass.defaultText,
  };
});
</script>

<template>
  <div :class="cssClasses.component">
    <DsTypography
      :class="[alertStyle?.title, 'flex items-center gap-1'].join(' ')"
      variant="h3"
    >
      <DsIcon v-if="showIcon" :name="icon" size="medium" />
      {{ title ?? alertStyle.defaultText }}
    </DsTypography>

    <slot>
      {{ text }}
    </slot>
  </div>
</template>
