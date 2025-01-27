<script lang="ts" setup>
import { computed } from "vue";
import DsTypography from "../../basic/typography/DsTypography.vue";
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";

const topColorCssMap = {
  dark: "text-dark-500",
  primary: "text-primary-500",
};

const props = defineProps({
  class: {
    type: String,
    default: "",
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  headerText: {
    type: String,
    default: null,
  },

  bodyText: {
    type: String,
    default: null,
  },

  footerText: {
    type: String,
    default: null,
  },

  topColor: {
    type: String as () => IContentTopColor,
    default: "primary",
  },
});

const defaultClasses = "p-4 border border-primary mb-3";

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => [
  `${defaultClasses} ${filterClassComp.value}`,
  {
    "rounded-lg": props.rounded,
  },
]);

const topTextCssClass = computed(() => [
  topColorCssMap[props.topColor],
  "font-roboto mb-2",
]);
</script>

<template>
  <div :class="cssClasses">
    <header>
      <slot name="header">
        <div class="flex flex-col">
          <span :class="topTextCssClass">
            {{ headerText || "Default header" }}
          </span>
        </div>
      </slot>
    </header>

    <section>
      <slot name="body">
        {{ bodyText }}
      </slot>
    </section>

    <footer v-if="$slots.footer">
      <DsTypography class="mb-2" variant="p">
        <slot name="footer">
          {{ footerText }}
        </slot>
      </DsTypography>
    </footer>
  </div>
</template>
