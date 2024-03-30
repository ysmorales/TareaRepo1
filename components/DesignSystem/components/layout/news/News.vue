<script lang="ts" setup>
import DsCard from "../../../container/card/DsCard.vue";
import type { INewsData } from "./interface";
import { newsData } from "./data";

defineProps({
  title: {
    type: String,
    default: "Ejemplo de título",
  },
  newsData: {
    type: Array as () => INewsData[],
    default: newsData,
  },
});
</script>

<template>
  <div class="container max-w-[800px] mx-auto">
    <div class="mb-4">
      <h2 class="text-2xl font-bold mb-3">{{ title }}</h2>
      <div class="grid gap-3 md:grid-cols-3 sm:grid-cols-1">
        <DsCard
          v-for="card in newsData"
          :has-tag="false"
          text-top="News"
        ></DsCard>
      </div>
      <div class="text-right">
        <a
          class="text-primary-500 underline hover:text-primary-900 font-roboto"
          href="#"
          title="Abrir sección"
          >Ver más</a
        >
      </div>
    </div>
  </div>
</template>
