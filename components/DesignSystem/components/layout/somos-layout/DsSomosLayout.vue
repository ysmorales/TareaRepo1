<script lang="ts" setup>
import { DsButtonAvatar, DsAccessibility } from "../../../../DesignSystem";
import type { ISimpleSideMenu } from "../../../../DesignSystem/interfaces/elements";
import SomosPage from "../../pages/somos-page/SomosPage.vue";

const emit = defineEmits(["logout"]);

defineProps({
  user: {
    type: Object,
    default: () => ({ name: "invitado", email: "sin email" }),
  },
  logo: {
    type: String,
    default: "/images/logo-unidoos.svg",
  },
  styleLogoTailwind: {
    type: String,
    default: "",
  },
  menuData: {
    type: Array as () => ISimpleSideMenu[],
    default: () => [
      { id: 1, text: "Ingresar solicitud" },
      { id: 2, text: "Consultar" },
      { id: 3, text: "Bandeja de entrada" },
    ],
  },
  urlLogo: {
    type: String,
    default: "https://somos.ips.chileatiende.gob.cl/intranet",
  },
});

async function handleCloseSession() {
  emit("logout");
}
</script>

<template>
  <div class="flex flex-col justify-center border-none">
    <div class="top-0 left-0 w-full z-10 bg-white">
      <div
        class="flex flex-row justify-between lg:justify-normal md:border border-b-blue-100 items-center md:border-t-0"
      >
        <div class="md:w-[16.66667%] p-3">
          <div class="pt-0">
            <a :href="urlLogo" class="" title="Ir al inicio">
              <img
                alt="Somos"
                class="h-[80px]"
                src="/images/somos/logo-somos.svg"
                width="180px"
              />
            </a>
          </div>
        </div>
        <div class="md:w-5/6 p-3">
          <DsAccessibility />
          <div class="flex justify-between items-center py-2">
            <div
              class="mx-auto hidden md:flex justify-end md:justify-start w-full"
            >
              <div class="flex w-full flex-wrap justify-end md:justify-start">
                <slot name="center-navBar" />
              </div>
            </div>
            <div class="w-auto">
              <div class="flex justify-end items-center">
                <slot name="final-navBar" />
                <DsButtonAvatar
                  v-if="isNotEmpty(user)"
                  :user-data="user"
                  class="mx-0 my-0"
                  @close-session="handleCloseSession"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between px-2 md:hidden py-3">
        <slot name="center-navBar" />
      </div>
    </div>
    <div>
      <slot>
        <!--        <SomosPage /> -->
        <p>Body...</p>
      </slot>
    </div>
  </div>
</template>
