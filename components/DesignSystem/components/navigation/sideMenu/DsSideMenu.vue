<script lang="ts">
import { ref, computed } from 'vue';
import DsIcon from "../../basic/icon/DsIcon.vue";
import { menuItems } from "./data";
import { predefinedClasses } from "../../../common/propsStyle";
import { filterClass } from "../../../utils/filterClass";

export default {
  components: {
    DsIcon
  },
  props: {
    dataSideMenu: {
      type: Array,
      default: ()=>menuItems,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    class: {
      type: String,
      default: ""
    },
  },
  setup(props: { class: string; }) {
    const subMenuVisibility = ref<{ [key: string]: boolean }>({});
    const subSubMenuVisibility = ref<{ [key: string]: boolean }>({});

    const filterClassComp = computed(() => {
      return filterClass(predefinedClasses, props.class);
    });

    const isSubMenuVisible = (id: string) => {
      return subMenuVisibility.value[id] || false;
    };

    const toggleSubMenu = (id: string) => {
      subMenuVisibility.value[id] = !subMenuVisibility.value[id];
    };

    const isSubSubMenuVisible = (id: string) => {
      return subSubMenuVisibility.value[id] || false;
    };

    const toggleSubSubMenu = (id: string) => {
      subSubMenuVisibility.value[id] = !subSubMenuVisibility.value[id];
    };

    const isHasMenu = (objeto: object) => {
      return "subMenu" in objeto;
    };

    return {
      filterClassComp,
      isSubMenuVisible,
      toggleSubMenu,
      isSubSubMenuVisible,
      toggleSubSubMenu,
      isHasMenu
    };
  }
};
</script>
<template>
  <div
    :class="[
      'container max-w-[800px] mx-auto',
      // textAlignmentClasses[textAlignment],
      filterClassComp,
    ]"
  >
    <hr class="my-4" />

    <nav aria-label="Menú" class="my-3 block" role="navigation">
      <ul>
        <li v-for="item in dataSideMenu" :key="item.id" class="block">
          <NuxtLink
            :class="[
              'block text-base py-3 px-3 border-b border-gray-300 w-full text-left hover:text-primary-500',
              {
                'text-primary-900 border-primary-500': isSubMenuVisible(
                  item.id,
                ),
              },
              { underline: item.isUnderline },
            ]"
            :target="item.isTargetBlank ? '_blank' : '_self'"
            :to="item.link || '#'"
            @click="toggleSubMenu(item.id)"
          >
            <DsIcon
              v-if="item.icon"
              :name="item.icon"
              class="mr-1"
              size="base"
            />

            {{ showTitle ? item.label : "" }}

            <DsIcon
              v-if="isHasMenu(item)"
              :name="isSubMenuVisible(item.id) ? 'angle-up' : 'angle-down'"
              class="ml-1"
              size="small"
            />
          </NuxtLink>
          <!--            second level-->
          <ul
            v-if="isHasMenu(item) && isSubMenuVisible(item?.id)"
            :id="item?.id"
          >
            <li v-for="subItem in item.subMenu" :key="subItem?.id">
              <NuxtLink
                :class="[
                  'block text-base py-3 px-3 border-b border-primary-500 w-full text-left  hover:text-primary-900',
                  { 'text-primary-900': isSubMenuVisible(item.id) },
                  { underline: subItem?.isUnderline },
                ]"
                :target="subItem.isTargetBlank ? '_blank' : '_self'"
                :to="subItem.link || '#'"
                @click="toggleSubSubMenu(subItem.id!)"
              >
                <DsIcon class="mr-1" name="angle-right" size="base" />

                <DsIcon
                  v-if="subItem?.icon"
                  :name="subItem?.icon"
                  class="mr-1"
                  size="base"
                />
                {{ showTitle ? subItem?.label : "" }}

                <DsIcon
                  v-if="isHasMenu(subItem)"
                  :name="
                    isSubSubMenuVisible(subItem.id!) ? 'angle-up' : 'angle-down'
                  "
                  class="ml-1"
                  size="base"
                />
              </NuxtLink>
              <ul
                v-if="isHasMenu(subItem) && isSubSubMenuVisible(subItem.id!)"
                :id="subItem.id"
              >
                <!--                third level-->
                <li
                  v-for="subSubItem in subItem?.subMenu"
                  :key="subSubItem?.id"
                >
                  <NuxtLink
                    :class="[
                      'block text-base py-3 px-3 border-b border-primary-900 w-full text-left bg-primary-500 text-white hover:bg-primary-900',
                      { underline: subSubItem?.isUnderline },
                    ]"
                    :target="subSubItem?.isTargetBlank ? '_blank' : '_self'"
                    :to="subSubItem?.link"
                  >
                    <DsIcon class="mr-1" name="arrow-right" size="base" />

                    <DsIcon
                      v-if="subSubItem?.icon"
                      :name="subSubItem?.icon"
                      class="mr-1"
                      size="base"
                    />
                    {{ showTitle ? subSubItem?.label : "" }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
