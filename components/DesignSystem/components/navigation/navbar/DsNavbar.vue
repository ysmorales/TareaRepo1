<script lang="ts" setup>
import DsLink from "../link/DsLink.vue";
import DsImage from "../../media/images/imagesHtml/DsImages.vue";
import DsButton from "../../basic/button/DsButton.vue";
import { ref, watchEffect } from "vue";
import AccessibilityControls from "./components/AccessibilityControls.vue";

defineProps({
  height: {
    type: String,
    default: "h-[65px]",
  },
  logo: { type: String, default: "/images/logo-unidoos.svg" },
});
const zoomLevel = ref(1); // Nivel de zoom inicial

function adjustFontSize(adjust: "increase" | "decrease" | "default") {
  switch (adjust) {
    case "increase":
      zoomLevel.value += 0.1;
      break;
    case "decrease":
      zoomLevel.value -= 0.1;
      break;
    case "default":
      zoomLevel.value = 1;
      break;
  }
}

watchEffect(() => {
  (document.body.style as any).zoom = zoomLevel.value;
});

function changeSiteColor() {
  alert("Cambiando a gris");
}
</script>

<template>
  <div class="top-0 left-0 w-full z-10 bg-white">
    <div class="flex flex-row items-end mb-2 justify-between lg:justify-normal">
      <div class="md:flex md:h-[65px] md:w-1/5 justify-start items-center">
        <DsLink href="/">
          <DsImage :src="logo" class="w-100 max-w-[130px] ml-2" />
        </DsLink>
      </div>
      <div class="md:w-4/5">
        <AccessibilityControls
          @changeColor="changeSiteColor"
          @changeFontSize="adjustFontSize"
        />
        <div :class="height" class="flex justify-between items-center">
          <slot>
            <DsButton v-for="item in [1, 2, 3]" :key="item" color="tertiary"
              >Fill using the slot
            </DsButton>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
