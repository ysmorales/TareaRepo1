<script lang="ts" setup>
import { ref, computed, onUnmounted } from "vue";
import DsButton from "../../basic/button/DsButton.vue";
import DsLink from "../../navigation/link/DsLink.vue";
import type { IDropDirection, IDropType } from "./interfaces";

interface IMenuData {
  id: string;
  label: string;
  link: string;
}

const props = defineProps({
  menuData: {
    type: Array as () => IMenuData[],
    default: () => [
      { label: "Option 1", link: "#" },
      { label: "Option 2", link: "#" },
      { label: "Option 3", link: "#" },
    ],
  },
  color: {
    type: String as () => IDropType,
    default: "primary",
  },

  dropDirection: {
    type: String as () => IDropDirection,
    default: "dropdown",
  },
  // size: {
  //   type: String as () => IButtonSize,
  //   default: "default",
  // },

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

const open = ref(false);
const emit = defineEmits(["click"]);

const toggleDropdown = () => {
  open.value = !open.value;
  if (open.value) {
    window.addEventListener("click", closeDropdown);
  } else {
    window.removeEventListener("click", closeDropdown);
  }
};

const closeDropdown = (event: any) => {
  if (event.target.id !== "options-menu") {
    open.value = false;
    window.removeEventListener("click", closeDropdown);
  }
};

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
const filterClassComp = computed(() => {
  return props.class;
});

onUnmounted(() => {
  window.removeEventListener("click", closeDropdown);
});

function handleClick(id: string) {
  emit("click", id);
}
</script>

<template>
  <div :class="['relative inline-block text-left', filterClassComp]">
    <div @click.stop="toggleDropdown">
      <slot name="button">
        <DsButton
          :color="color"
          :disabled="disabled"
          :rounded="rounded"
          :start-image="triggerIcon"
          aria-haspopup="true"
        >
          {{ label }}
        </DsButton>
      </slot>
    </div>

    <div
      v-show="open"
      :class="[
        'absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20',
        dropDirection === 'dropup' ? 'bottom-full mb-2' : 'top-full',
      ]"
    >
      <div
        aria-labelledby="options-menu"
        aria-orientation="vertical"
        class="py-1"
        role="menu"
      >
        <slot>
          <DsLink
            v-for="el in menuData"
            :href="el.link"
            :text="el.label"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            @click.stop="handleClick(el.id)"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
