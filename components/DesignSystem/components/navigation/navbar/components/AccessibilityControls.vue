<script lang="ts" setup>
import DsButton from "../../../basic/button/DsButton.vue";

const emits = defineEmits(["changeFontSize", "changeColor"]);

function adjustFontSize(adjust: "increase" | "decrease" | "default") {
  switch (adjust) {
    case "increase":
      emits("changeFontSize", "increase");
      break;
    case "decrease":
      emits("changeFontSize", "decrease");
      break;
    case "default":
      emits("changeFontSize", "default");
      break;
  }
}

function changeSiteColor() {
  emits("changeColor");
}
</script>

<template>
  <div class="flex-wrap justify-end h-[31px] hidden lg:flex">
    <DsButton
      color="simple"
      icon-color="dark"
      icon-size="small"
      icon-style="mr-0"
      size="small"
      start-image="/images/accessibility/icon-disminuir.svg"
      @click="adjustFontSize('decrease')"
      >Disminuir textos
    </DsButton>
    <DsButton
      class="text-black"
      color="simple"
      icon-color="dark"
      icon-size="small"
      icon-style="mr-0"
      size="small"
      start-image="/images/accessibility/icon-aumentar.svg"
      @click="adjustFontSize('increase')"
      >Aumentar textos
    </DsButton>
    <DsButton
      class="text-black"
      color="simple"
      icon-color="dark"
      icon-size="small"
      icon-style="mr-0"
      size="small"
      start-image="/images/accessibility/icon-gris.svg"
      @click="changeSiteColor"
      >Ver sitio en gris
    </DsButton>
    <DsButton
      class="text-black"
      color="simple"
      icon-color="dark"
      icon-size="small"
      icon-style="mr-0"
      size="small"
      start-image="/images/accessibility/icon-restablecer.svg"
      @click="adjustFontSize('default')"
      >Restablecer
    </DsButton>
  </div>
</template>
