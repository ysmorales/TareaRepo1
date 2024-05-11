<script lang="ts" setup>
import { ref } from "vue";
import DsIcon from "../../basic/icon/DsIcon.vue";
import DsLink from "../link/DsLink.vue";
import type{ MenuItem } from "../../../interfaces/elements";

defineProps({
  menuItems: {
    type: Array as () => MenuItem[],
    default: [
      { name: "horarios", icon: "clock", title: "Horarios", url: "/horarios" },
      { name: "call", icon: "phone", title: "Call Center", url: "/call" },
      { name: "perfil", icon: "user", title: "Mi perfil", url: "/perfil" },
      {
        name: "configuración",
        icon: "cog",
        title: "Configuración",
      },
      // ...
    ],
  },
});

let menuOpen = ref(false);

const emit = defineEmits(["click"]);
const handleClick = (item: MenuItem) => {
  if (!item.url) {
    emit("click", item);
  }
};
</script>

<template>
  <div class="lg:w-full">
    <div class="relative w-full inline-block lg:hidden m-2">
      <button
        class="rounded-full h-6 w-6 flex items-center justify-center text-white border border-gray-300 hover:ring-0 hover:border-gray-400"
        @click="menuOpen = !menuOpen"
      >
        <DsIcon color="dark" name="plus" size="small" />
      </button>
      <div
        v-if="menuOpen"
        class="absolute top-full space-y-1 w-fit rounded shadow bg-white right-1 pt-5 mt-3"
      >
        <DsLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.url || 'javascript:void(0)'"
          class="flex items-center text-sm no-underline py-2 px-3"
          @click="handleClick(item)"
        >
          <DsIcon :name="item.icon" class="text-gray-500 mr-1" size="small" />
          <span class="underline text-gray-600 hover:text-gray-950">{{
            item.title
          }}</span>
        </DsLink>
      </div>
    </div>
    <nav>
      <div class="hidden lg:block w-full p-4">
        <div id="dropdown_tools" class="mr-2" role="menu">
          <div class="flex flex-col justify-between lg:flex-row">
            <DsLink
              v-for="item in menuItems"
              :key="item.name"
              :title="item.title"
              :to="item.url || 'javascript:void(0)'"
              class="is-hidden-desktop"
              @click="handleClick(item)"
            >
              <DsIcon :name="item.icon" />
            </DsLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
