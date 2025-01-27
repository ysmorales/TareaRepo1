<script lang="ts" setup>
import { DsSimpleSideMenu } from "../../../index";
import ModalMenuSide from "~/components/generic-components/ModalMenuSide.vue";
import RightSideComponent from "./RightSideComponent.vue";
import { computed } from "vue";
import type { IMenu } from "~/global-interface/interfaces";

const props = defineProps({
  config: {
    type: Object,
  },
  status: {
    type: String,
  },
  pathname: {
    type: String,
  },
});

const handleClickSideMenu = (id: number) => {
  const menu = props.config?.menu.find((item: IMenu) => item.id === id);
  if (menu && !menu.hidden) {
    return navigateTo({
      path: menu.link,
      query: {},
    });
  }
};

const linkActive = computed<IMenu | undefined>(() => {
  let matchActive = props.config?.menu?.find((item: IMenu) => {
    let linkPath = item.link;
    if (item.activeOnInmediate) {
      linkPath = linkPath
        .split("/")
        .splice(0, linkPath.split("/").length - 1)
        .join("/");
    }
    return props.pathname?.startsWith(linkPath);
  });

  if (matchActive?.subPath) {
    const subPathSelect = matchActive.subPath.find((f) =>
      props.pathname.match(f.match)
    );

    if (subPathSelect) {
      matchActive = {
        ...matchActive,
        ...subPathSelect.config,
      };
    }
  }

  return matchActive;
});
</script>

<template>
  <ModalMenuSide
    :config="config"
    :handleClickSideMenu="handleClickSideMenu"
    :linkActive="linkActive"
    :status="status"
  />
  <div class="lg:flex">
    <div
      v-if="linkActive?.sideLeft ?? true"
      class="w-full lg:w-1/5 px-2 max-w-[210px] min-w-[210px]"
    >
      <div class="hidden lg:block">
        <div v-if="status === 'pending'">
          <div class="p-4 pt-5 w-full">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded w-[90%]"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div
                    v-for="t in 3"
                    class="h-2 bg-slate-200 rounded w-[50%]"
                  ></div>
                  <div v-for="t in 3" class="grid grid-cols-3 gap-4 w-[60%]">
                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div v-for="t in 3" class="grid grid-cols-3 gap-4 w-[70%]">
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DsSimpleSideMenu
          v-if="status !== 'pending'"
          :active="linkActive?.id"
          :data="config?.menu.filter((f) => !f.hidden) ?? []"
          :topMenuTitle="config?.title"
          @click="handleClickSideMenu"
        />
      </div>
    </div>

    <div
      class="w-full block md:flex border border-l-[#cfeafe] border-b-0 border-r-0 border-t-1 border-t-[#cfeafe] lg:border-t-0 justify-center"
      :class="{
        'bg-[#f2f9ff]': !linkActive?.centerFull,
      }"
    >
      <div
        class="w-full min-h-[85vh]"
        :class="{
          'lg:max-w-[900px]': !linkActive?.sideRight && !linkActive?.centerFull,
          'px-5 py-5 md:max-w-[750px]': !linkActive?.centerFull,
        }"
      >
        <slot v-if="config?.menu"></slot>
        <div v-if="!config?.menu">
          <div class="p-4 pt-5 w-full">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="space-y-3">
                  <div class="grid grid-cols-11 gap-4">
                    <div
                      v-for="t in 4"
                      class="h-4 bg-slate-200 rounded col-span-1"
                    ></div>
                  </div>
                  <div class="grid grid-cols-12 gap-4 pb-5">
                    <div class="h-8 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-8 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div class="h-8 bg-slate-200 rounded w-[50%]"></div>
                  <div
                    v-for="t in 3"
                    class="h-4 bg-slate-200 rounded w-[70%]"
                  ></div>
                  <div v-for="t in 3" class="grid grid-cols-3 gap-6 w-[80%]">
                    <div v-for="y in 3" class="grid grid-cols-3 gap-4 w-[100%]">
                      <div class="h-4 bg-slate-200 rounded col-span-2"></div>
                      <div class="h-4 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-4 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div v-for="y in 4" class="grid grid-cols-3 gap-4 w-[100%]">
                      <div class="h-4 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-4 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-4 bg-slate-200 rounded col-span-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="linkActive?.sideRight ?? true"
      class="border-t border-[#cfeafe] md:border-none md:w-1/3 md:flex flex-col py-6 md:py-2 md:my-2"
    >
      <slot name="right-side" v-if="!linkActive?.hiddenSideRight">
        <RightSideComponent />
      </slot>
    </div>
  </div>
</template>
