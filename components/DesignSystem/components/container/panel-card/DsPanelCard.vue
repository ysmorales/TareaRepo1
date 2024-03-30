<script lang="ts" setup>
import DsTypography from "../../basic/typography/DsTypography.vue";
import DsLink from "../../navigation/link/DsLink.vue";

defineProps({
  title: {
    type: String,
    default: "Dirección",
  },
  headerLink: {
    type: Object as () => {
      href: string;
      title: string;
      target?: "_blank" | "_self";
      text: string;
    },
  },
  listData: {
    type: Array as () => {
      mainTitle: string;
      firstText: string;
      secondText: string;
    }[],
    default: [
      {
        mainTitle: "Alameda Lib. B. O'Higgins N° 1324. Stgo - Chile",
        firstText: "Rut: 16.132.234-2",
        secondText: "Callcenter: 101",
      },
      {
        mainTitle: "Av. Apoquindo N° 4400. Las Condes - Chile",
        firstText: "Rut: 15.432.654-8",
        secondText: "Callcenter: 102",
      },
    ],
  },
  infoText: {
    type: String,
  },
});
</script>

<template>
  <article class="border overflow-hidden rounded-lg flex flex-col">
    <header class="p-4 pb-0">
      <DsTypography v-if="!headerLink" variant="h4">{{ title }}</DsTypography>
      <DsLink
        v-if="headerLink"
        :href="headerLink.href"
        :target="headerLink.target ?? '_blank'"
        :title="headerLink.title"
        ><i class="las la-link mr-1 no-underline"></i>
        <DsTypography class="inline" variant="h4"
          >{{ headerLink.title }}
        </DsTypography>
      </DsLink>
      <hr class="my-3" />
    </header>
    <div class="p-4 pt-0">
      <ul v-if="!infoText">
        <li v-for="el in listData">
          <strong>{{ el.mainTitle }}</strong>
          <div>{{ el.firstText }}</div>
          <div>{{ el.secondText }}</div>
        </li>
      </ul>
      <p v-if="infoText">{{ infoText }}</p>
    </div>
  </article>
</template>
