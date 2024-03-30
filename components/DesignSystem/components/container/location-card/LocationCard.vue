<script lang="ts" setup>
import  DsTypography  from "../../basic/typography/DsTypography.vue";

defineProps({
  title: {
    type: String,
    default: "Región de Antofagasta",
  },
  dataLink: {
    type: Array as () => {
      text: string;
      textLink: string;
      titleLink: string;
      urlLink: string;
      targetLink: "_blank" | "_self";
    }[],
    default: [
      {
        text: "ChileAtiende Antofagasta-",
        textLink: "Sucre N° 311, Piso 2",
        titleLink: "Ir al artículo",
        urlLink: "#",
        targetLink: "blank",
      },
      {
        text: "ChileAtiende Antofagasta-",
        textLink: "Sucre N° 311, Piso 2",
        titleLink: "Ir al artículo",
        urlLink: "#",
        targetLink: "blank",
      },
    ],
  },
});
</script>

<template>
  <article class="border overflow-hidden rounded-lg flex flex-col">
    <header class="p-4">
      <DsTypography variant="h3">{{ title }}</DsTypography>
    </header>
    <div class="p-4 pt-0">
      <ul>
        <li v-for="el in dataLink" class="flex mb-2">
          <i class="las la-map-marker text-primary-500 mr-1 mt-1"></i>
          <div>
            <DsTypography class="mb-2 inline" variant="h4"
              >{{ el.text }}
            </DsTypography>
            <a :href="el.urlLink" :title="el.titleLink">{{ el.textLink }}</a>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>
