<script lang="ts" setup>
import DsButton from "../../basic/button/DsButton.vue";
import Menu from "./Menu.vue";
import vClickOutside from "../../../directives/clickOutsideDirective";
import { predefinedClasses } from "../../../common/propsStyle";
import { filterClass } from "../../../utils/filterClass";
import type { IDropDirection, IDropType } from "./interfaces";
import type { IButtonSize } from "../button/interfaces";
import { provide, ref, computed } from "vue";

const props = defineProps({
  color: {
    type: String as () => IDropType,
    default: "primary",
  },

  dropDirection: {
    type: String as () => IDropDirection,
    default: "dropdown",
  },
  size: {
    type: String as () => IButtonSize,
    default: "default",
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  label: {
    type: String,
    default: "Default label",
  },
  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const containerCssClasses = computed(() => {
  return {
    "inline-flex": true,
    relative: true,
    "align-top": true,
    rounded: props.rounded,
  };
});
const menuCssClass = computed(() => {
  return [
    "left-0",
    "min-w-[12rem]",
    "pt-0",
    "absolute",
    "w-full",
    "z-20",
    { "bottom-0": props.dropDirection === "dropdown" },
    { "pt-0 top-0": props.dropDirection === "dropup" },
  ].join(" ");
});

const emit = defineEmits(["select"]);
const isMenuVisible = ref(false);

const toggleMenu = () => (isMenuVisible.value = !isMenuVisible.value);

const onItemSelected = (item: any) => {
  isMenuVisible.value = false;

  emit("select", item);
};

provide("itemSelected", {
  onItemSelected,
});
const triggerIcon = computed(() => {
  switch (props.dropDirection) {
    case "dropdown":
      return "las la-angle-down";
    case "dropup":
      return "las la-angle-up";
    default:
      return "";
  }
});

const onClickOutside = () => {
  isMenuVisible.value = false;
};
</script>

<template>
  <div
    v-click-outside="onClickOutside"
    :class="[containerCssClasses, filterClassComp]"
  >
    <div class="dropdown-trigger" @click="toggleMenu">
      <DsButton
        :color="color"
        :disabled="disabled"
        :rounded="rounded"
        :size="size"
        :start-image="triggerIcon"
        aria-haspopup="true"
      >
        {{ " " + label }}
      </DsButton>
    </div>

    <Menu :class-menu="menuCssClass" :show="isMenuVisible">
      <slot />
    </Menu>
  </div>
</template>

<style scoped></style>
