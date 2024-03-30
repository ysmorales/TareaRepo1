<script lang="ts" setup>

import type { IBorderCardColor } from "../../container/card/interfaces";
import { colorClass } from "../../container/card/library";

defineProps({
  headerTitle: {
    type: String,
  },
  linkImage: {
    type: Object as () => {
      src: string;
      url: string;
      target: "_blank" | "_self";
      title: string;
    },
  },
  srcImage: {
    type: String,
  },
  imageLeft: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
  },
  targetUrl: {
    type: String as () => "_self" | "_blank" | "_paren" | "_top",
    default: "_blank",
  },
  textSmallTop: {
    type: String,
  },
  textSmallTopPrimaryColor: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String as () => IBorderCardColor,
    default: "default",
  },
  textInfo: {
    type: String,
  },
  linkTop: {
    type: String,
  },
  urlLinkTop: {
    type: String,
    default: "_blank",
  },
  targetLinkTop: {
    type: String as () => "_self" | "_blank" | "_paren" | "_top",
  },
});
</script>

<template>
  <article
    :class="[
      'border overflow-hidden rounded-lg mb-3 flex ',
      { 'flex-col': !imageLeft },
      colorClass[color],
    ]"
  >
    <figure
      v-if="srcImage || linkImage"
      :class="[
        {
          'h-[200px] overflow-hidden relative w-full flex items-center justify-center':
            !imageLeft,
        },
        { 'w-1/3': imageLeft },
      ]"
    >
      <a
        v-if="linkImage?.src"
        :href="linkImage.url"
        :target="linkImage.target"
        class="h-full w-full overflow-hidden block relative cursor-pointer"
        tabindex="-1"
        title="Ir al artículo"
      >
        <img
          :src="linkImage.src"
          alt="Aporte Familiar Permanente 2024"
          class="absolute top-0 bottom-0 inset-x-2/4 translate-x-[-50%] m-auto max-h-full max-w-none hover:scale-110 transition-transform"
        />
      </a>
      <img
        v-if="srcImage"
        :src="srcImage"
        alt="Aporte Familiar Permanente 2024"
        class="absolute top-0 bottom-0 inset-x-2/4 translate-x-[-50%] m-auto max-h-full max-w-none"
      />
    </figure>

    <header class="flex flex-col p-4">
      <small
        v-if="textSmallTop"
        :class="['mb-0', { 'text-primary-500': textSmallTopPrimaryColor }]"
        >{{ textSmallTop }}</small
      >
      <a
        v-if="linkTop"
        :href="urlLinkTop ?? '#'"
        :target="targetLinkTop"
        class="mb-2"
        title="Ir al sitio"
        >{{ linkTop }}</a
      >
      <a
        v-if="headerTitle"
        :class="[
          'cursor-pointer',
          {
            'text-white hover:text-neutral-300':
              color == 'dark' || color == 'fullWhite',
          },
        ]"
        :href="url"
        :target="targetUrl"
        title="Ir al artículo"
        ><h3>{{ headerTitle }}</h3></a
      >
    </header>
    <div
      v-if="textInfo"
      id="info"
      :class="[
        'p-4 pt-0 mb-0',
        { 'text-white': color == 'dark' || color == 'fullWhite' },
      ]"
    >
      <p class="mb-0">{{ textInfo }}</p>
    </div>
  </article>
</template>
