<script lang="ts" setup>
import DsIcon from "../../basic/icon/DsIcon.vue";
import type { IBreadcrumbItem } from "./interface";
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import { computed, ref } from "vue";

const props = defineProps({
  items: {
    type: Array as () => IBreadcrumbItem[],
    default: [],
  },

  hideSeparator: {
    type: Boolean,
    default: false,
  },

  showLinkAtLastItem: {
    type: Boolean,
    default: false,
  },

  class: {
    type: String,
    default: "",
  },
});
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});
const emit = defineEmits(["itemClick"]);
const selectedItem = ref<IBreadcrumbItem | null>(null);

const normalizedItems = computed(() => {
  let i = 1;

  return props.items.map((item: IBreadcrumbItem) => {
    item.id = item.id ?? i++;
    item.link = item.link ?? "#";

    return item;
  });
});

const hasItems = computed(() => {
  return props.items && props.items.length !== 0;
});

const isLastItem = (item: IBreadcrumbItem) => {
  return item.id === props.items[props.items.length - 1].id;
};

// const itemIconClass = (item: IBreadcrumbItem) =>
//   `las la-${item.icon} ${
//     item !== selectedItem.value ? "text-base text-primary-500" : ""
//   }`;

const itemLinkClass = (item: IBreadcrumbItem) => [
  " font-roboto px-3 ",
  {
    "border-r border-gray-300": !isLastItem(item) && !props.hideSeparator,
  },
  {
    "text-base text-primary-500 hover:text-primary-900 underline":
      item !== selectedItem.value,
  },
];

const itemNoLinkClass = (item: IBreadcrumbItem) => [
  "font-roboto px-3 text-base",

  {
    "border-r border-gray-300": !isLastItem(item) && !props.hideSeparator,
  },
];

const onItemClick = (e: Event, item: IBreadcrumbItem) => {
  selectedItem.value = item;

  emit("itemClick", item);

  if (item.link === "#") {
    e.preventDefault();
  }
};

const itemLocation = (item: IBreadcrumbItem): any => {
  return item.link !== "#" ? item.link : null;
};
</script>

<template>
  <nav :class="['my-3 block', filterClassComp]" role="navigation">
    <ol class="flex">
      <div v-if="!hasItems">[No items defined in breadcrumb]</div>

      <li v-for="item in normalizedItems">
        <DsIcon
          v-if="item.icon"
          :name="item.icon"
          class="text-primary-500"
          size="base"
        />

        <NuxtLink
          v-if="item.link && (!isLastItem(item) || showLinkAtLastItem)"
          :class="itemLinkClass(item)"
          :to="itemLocation(item)"
          role="button"
          @click="onItemClick($event, item)"
        >
          {{ item.label }}
        </NuxtLink>

        <span
          v-if="isLastItem(item) && !showLinkAtLastItem"
          :class="itemNoLinkClass(item)"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
