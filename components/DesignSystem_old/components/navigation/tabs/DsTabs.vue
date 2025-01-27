<script lang="ts" setup>
import { ref, provide, computed } from "vue";
import DsIcon from "../../basic/icon/DsIcon.vue";
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import type { ITabItem } from "./interface";

const props = defineProps({
  rounded: {
    type: Boolean,
    default: true,
  },
  titleClass: {
    type: String,
    default: "",
  },
  titleClassActive: {
    type: String,
    default: "",
  },
  adjust: {
    type: Boolean,
    default: false,
  },
  showIconOnActive: {
    type: Boolean,
    default: false,
  },
  transparent: {
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

const isActiveTab = (tab: ITabItem) => tab === activeTab.value;

const tabContainerClass = (tab: ITabItem) => {
  let result = "relative block mr-2";

  if (isActiveTab(tab)) {
    result += " -mb-px";
  }

  if (props.adjust) {
    return "";
  }

  return result;
};

const tabLinkClass = (tab: ITabItem) => {
  let result = "flex justify-center px-4 py-2 bg-white rounded-t-lg";

  if (props.rounded) {
    result += " rounded-t-lg";
  }

  if (isActiveTab(tab)) {
    result += "border border-primary-500 border-b-transparent text-primary-500";
  } else {
    result +=
      "flex justify-center px-4 py-2 bg-white hover:bg-neutral-100 hover:text-primary-500";
  }

  if (props.transparent) {
    result = "flex justify-center border-transparent font-inriaSansBold";
    if (isActiveTab(tab)) {
      result += " bg-blue-100 rounded-b-none text-blue-500";
    }
  }

  if (props.adjust) {
    result += " w-full";
  }

  return result;
};

const emit = defineEmits(["tabChange"]);

const activeTab: any = ref(null);
const tabs = ref<ITabItem[]>([]);
const hasTabs = ref(false);

let firstTime = true;

provide("activeTab", activeTab);

provide("addTab", (tab: ITabItem) => {
  tab.index = tabs.value.length;
  tabs.value.push(tab);

  if (tabs.value.length === 1) {
    activeTab.value = tab;
  }

  hasTabs.value = true;
});

provide("tabChange", (tab: ITabItem) => {
  if (firstTime) {
    firstTime = false;
    return;
  }

  emit("tabChange", tab);
});
</script>

<template>
  <span v-if="!hasTabs">No tabs defined</span>

  <section v-if="tabs" :class="['my-4', 'w-full', filterClassComp]">
    <div class="tabs-container">
      <nav
        class="w-full items-stretch flex justify-between overflow-hidden overflow-x-auto whitespace-nowrap mb-[-1px]"
      >
        <ul
          :class="[
            {
              'items-center border-b border-b-neutral-300 flex grow shrink-0 justify-start':
                !adjust,
              'w-full grid content-center': adjust,
            },
            adjust ? `grid-cols-${tabs.length}` : '',
          ]"
          role="tablist"
        >
          <li
            v-for="tab in tabs"
            :key="tab.title"
            :class="tabContainerClass(tab)"
            role="presentation"
            @click="activeTab = tab"
          >
            <button :class="tabLinkClass(tab)" role="button">
              <span :class="`flex items-center justify-center ${titleClass} `">
                <DsIcon
                  v-if="tab.icon"
                  :name="tab.icon"
                  class="mr-2 block"
                  :class="{
                    hidden: showIconOnActive && !isActiveTab(tab),
                  }"
                  size="default"
                />
                {{ tab.title }}
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <section class="block">
        <div class="font-roboto" role="treeitem">
          <slot />
        </div>
      </section>
    </div>
  </section>
</template>
