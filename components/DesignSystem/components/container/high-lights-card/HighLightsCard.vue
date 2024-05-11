<script lang="ts" setup>
import DsTag from "../../basic/tag/DsTag.vue";
import DsTypography from "../../basic/typography/DsTypography.vue";
import DsLink from "../../navigation/link/DsLink.vue";
import { cardBackgroundColorClasses } from "./library";

defineProps({
  cardColor: {
    type: String as () => "primary" | "warning" | "success" | "danger",
    default: "success",
  },
  imageSrc: {
    type: String,
    default: "/images/example-card/cup-tools.png",
  },
  imageAlt: {
    type: String,
  },
  linkUrl: {
    type: String,
  },
  linkText: {
    type: String,
    default: "Web ChileAtiende",
  },
  linkTarget: {
    type: String as () => "_self" | "_blank",
  },
  textFirstTab: {
    type: String,
  },
  textSecondTab: {
    type: String,
  },
  smallText: {
    type: String,
    default: "+ De 200 servicios",
  },
});
</script>

<template>
  <article
    :class="[
      'border overflow-hidden rounded-lg flex flex-col md:col-span-3 h-auto',
      cardBackgroundColorClasses[cardColor],
    ]"
  >
    <header class="p-4 text-white w-full">
      <DsLink :href="linkUrl" :target="linkTarget" title="Ir al artículo">
        <DsTypography :text="linkText" color="white" variant="h3" />
      </DsLink>
      <small class="mb-0">{{ smallText }}</small>
    </header>
    <figure class="flex justify-center px-4 py-0">
      <img :alt="imageAlt" :src="imageSrc" class="max-h-[200px]" />
    </figure>
    <footer class="p-4 flex justify-start w-full">
      <DsTag :text="textFirstTab" class="mr-2" color="primary" />
      <DsTag :text="textSecondTab" color="primary" />
    </footer>
  </article>
</template>
