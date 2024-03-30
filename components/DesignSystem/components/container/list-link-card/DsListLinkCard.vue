<script lang="ts" setup>
import DsTypography from "../../../components/basic/typography/DsTypography.vue";
import DsLink from "../../../components/navigation/link/DsLink.vue";

defineProps({
  textTitle: {
    type: String,
    default: "Te puede interesar:",
  },
  linkList: {
    type: Array as () => {
      textTitle: string;
      href: string;
      target: "_blank" | "_self";
      title: string;
    }[],
    default: [
      {
        textTitle: "Haz la solicitud a través de una videollamada",
        href: "https://www.google.com",
        target: "_blank",
        title: "Ir al sitio",
      },
      {
        textTitle: "Debes estar en el Registro Social de Hogares",
        href: "https://www.google.com",
        target: "_blank",
        title: "Ir al sitio",
      },
    ],
  },
});
</script>

<template>
  <article class="border overflow-hidden rounded-lg md:flex flex-col">
    <header class="p-4 pb-0">
      <DsTypography :text="textTitle" class="mb-4" variant="h4" />
    </header>
    <div class="p-4 pt-0">
      <ul>
        <li v-for="item in linkList" class="mb-2">
          <DsLink :href="item.href" :target="item.target" :title="item.title">
            <i class="las la-arrow-right mr-1 no-underline"></i
            >{{ item.textTitle }}
          </DsLink>
        </li>
      </ul>
    </div>
  </article>
</template>