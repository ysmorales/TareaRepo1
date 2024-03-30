<script lang="ts" setup>
import DsIcon from "../../basic/icon/DsIcon.vue";
import vClickOutside from "../../../directives/clickOutsideDirective";
import type { IMenuItem } from "../../../components/navigation/topMenu/interfaces";
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import {computed,ref} from "vue";

const props = defineProps({
  items: {
    type: Array as () => IMenuItem[],
    required: true,
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

const fixItems = (items: IMenuItem[]) => {
  let i = 0;

  const result: IMenuItem[] = [];

  items.forEach((item1: IMenuItem) => {
    const destItem1: IMenuItem = {
      id: ++i + "",
      text: item1.text,
      icon: item1.icon,
      open: false,
      parent: null,
    };

    result.push(destItem1);

    if (item1.items) {
      destItem1.items = [];

      // Second level
      item1.items.forEach((item2: IMenuItem) => {
        const destItem2: IMenuItem = {
          id: ++i + "",
          text: item2.text,
          icon: item2.icon,
          open: false,
          parent: destItem1,
        };

        destItem1.items?.push(destItem2);

        // Third (maximum) level
        if (item2.items) {
          destItem2.items = [];

          item2.items.forEach((item3: IMenuItem) => {
            const destItem3: IMenuItem = {
              id: ++i + "",
              text: item3.text,
              icon: item3.icon,
              open: false,
              parent: destItem2,
            };

            destItem2.items?.push(destItem3);

            // Too-many levels check
            if (item3.items) {
              throw Error("More than 3 menu levels defined.");
            }
          });
        }
      });
    }
  });

  return result;
};

const normalizedItems = ref(fixItems(props.items));

const toggleItem = (item: IMenuItem) => {
  item.open = !item.open;

  _closeItems(normalizedItems.value, item);
};

const onClickOutside = () => {
  _closeItems(normalizedItems.value);
};

const _closeItems = (items: IMenuItem[], excludeItem?: IMenuItem) => {
  items.forEach((aItem: IMenuItem) => {
    if (!excludeItem) {
      aItem.open = false;
    } else {
      const parentItemId = excludeItem.parent ? excludeItem.parent.id : "";

      if (aItem.id !== excludeItem.id && aItem.id !== parentItemId) {
        aItem.open = false;
      }
    }

    if (aItem.items) {
      _closeItems(aItem.items, excludeItem);
    }
  });
};

const angleIcon = (item: IMenuItem) => {
  return item.open ? "angle-up" : "angle-down";
};

const itemClick = (item: IMenuItem) => {
  emit("itemClick", item);

  _closeItems(normalizedItems.value);
};
</script>

<template>
  <nav
    v-click-outside="onClickOutside"
    :class="['menu-horizontal', filterClassComp]"
  >
    <ul>
      <li v-for="item1 in normalizedItems">
        <!-- Root items -->
        <button v-if="!item1.items" @click="itemClick(item1)">
          <DsIcon v-if="item1.icon" :name="item1.icon" class="mr-3" />
          {{ item1.text }}
        </button>

        <div v-if="item1.items" class="relative w-full">
          <!-- Second-level items -->
          <button
            :id="item1.id"
            :aria-controls="'dropdownMenu-' + item1.id"
            aria-expanded="false"
            aria-haspopup="true"
            @click="toggleItem(item1)"
          >
            {{ item1.text }}
            <DsIcon :name="angleIcon(item1)" class="ml-2" size="base" />
          </button>

          <div
            v-if="item1.open"
            :id="'dropdownMenu-' + item1.id"
            class="dropdownlv1"
          >
            <div
              :aria-labelledby="item1.id"
              aria-orientation="vertical"
              role="menu"
            >
              <template v-for="item2 in item1.items">
                <button
                  v-if="!item2.items"
                  role="menuitem"
                  @click="itemClick(item2)"
                >
                  <DsIcon name="angle-right" size="base" />
                  {{ item2.text }}
                </button>

                <div v-if="item2.items" class="relative">
                  <!-- Third-level items -->
                  <button
                    :id="'dropdownMenu-' + item1.id"
                    aria-controls="accordionMenu"
                    aria-expanded="false"
                    aria-haspopup="true"
                    class="subDropdownButton"
                    role="menuitem"
                    @click="toggleItem(item2)"
                  >
                    <span>
                      <DsIcon name="angle-right" size="base" />
                      {{ item2.text }}
                    </span>

                    <DsIcon
                      :name="angleIcon(item2)"
                      class="ml-1"
                      size="small"
                    />
                  </button>

                  <div v-if="item2.open" id="accordionMenu" class="dropdownlv2">
                    <div
                      aria-labelledby="options-menu"
                      aria-orientation="vertical"
                      role="menu"
                    >
                      <button
                        v-for="item3 in item2.items"
                        role="menuitem"
                        @click="itemClick(item3)"
                      >
                        <DsIcon name="arrow-right" size="base" />
                        {{ item3.text }}
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>
../../../directives/clickOutsideDirective
