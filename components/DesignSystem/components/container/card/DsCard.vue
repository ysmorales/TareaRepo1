<script lang="ts" setup>
import type { IBorderCardColor } from "../../container/card/interfaces";
import { colorClass } from "../../container/card/library";
import DsIcon from "../../../components/basic/icon/DsIcon.vue";
import { DsTypography } from "../../../../DesignSystem";
import DsLink from "../../navigation/link/DsLink.vue";

defineProps({
  headerTitle: {
    type: String,
  },
  linkImage: {
    type: Object as () => {
      src: string;
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
    type: Object as () => {
      info?: string;
      text: string;
      icon?: string;
    },
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
  finalLink: {
    type: Object as () => {
      url: string;
      target: "_self" | "_blank" | undefined;
      text: string;
      icon: string;
    },
  },
});
defineEmits(["view"]);
</script>

<template>
  <article
    :class="[
      'border overflow-hidden rounded-lg mb-3 flex max-h-[210px]',
      { 'flex-col': !imageLeft },
      colorClass[color],
    ]"
    @click="$emit('view')"
  >
    <figure
      v-if="srcImage || linkImage"
      :class="[
        {
          'h-[200px] overflow-hidden relative w-full flex items-center justify-center':
            !imageLeft,
        },
        { 'w-1/3 min-h-[80px]': imageLeft },
      ]"
    >
      <a
        v-if="linkImage?.src"
        class="h-full w-full overflow-hidden block relative cursor-pointer"
        tabindex="-1"
        title="Ir al artículo"
        @click="$emit('view')"
      >
        <img
          :src="linkImage.src"
          alt="Aporte Familiar Permanente 2024"
          class="absolute top-0 bottom-0 inset-x-2/4 translate-x-[-50%] m-auto h-full hover:scale-110 transition-transform w-full"
        />
      </a>
      <img
        v-if="srcImage"
        :src="srcImage"
        alt="Aporte Familiar Permanente 2024"
        class="absolute top-0 bottom-0 inset-x-2/4 translate-x-[-50%] m-auto max-h-full max-w-none"
      />
    </figure>
    <div class="flex flex-col bg-white w-full">
      <header class="flex flex-col px-4 pt-2">
        <small
          v-if="textSmallTop"
          :class="['mb-0', { 'text-primary-500': textSmallTopPrimaryColor }]"
        >
          <DsIcon
            v-if="textSmallTop?.icon"
            :name="textSmallTop?.icon!"
            size="small"
          />
          {{ textSmallTop.info }}
          <span class="font-bold">{{ textSmallTop.text }}</span></small
        >
        <a
          v-if="linkTop"
          :href="urlLinkTop ?? '#'"
          :target="targetLinkTop"
          class="mb-2"
          title="Ir al sitio"
          >{{ linkTop }}</a
        >
        <div class="flex justify-between">
          <DsLink
            v-if="headerTitle"
            :class="[
              'cursor-pointer',
              {
                'text-white hover:text-neutral-300':
                  color == 'dark' || color == 'fullWhite',
              },
            ]"
            :href="url ?? undefined"
            title="Ir al artículo"
            @click="$emit('view')"
            ><h3>{{ headerTitle }}</h3></DsLink
          >
          <DsIcon color="primary" name="angle-right" />
        </div>
      </header>
      <div
        v-if="textInfo"
        id="info"
        :class="[
          'px-4 mb-0',
          { 'text-white': color == 'dark' || color == 'fullWhite' },
        ]"
      >
        <p class="mb-0">
          {{ textInfo }}
        </p>
      </div>
      <div
        v-if="finalLink"
        id="finalInfo"
        :class="[
          'p-4 pt-0 mb-0',
          { 'text-white': color == 'dark' || color == 'fullWhite' },
        ]"
      >
        <DsTypography
          :target="finalLink?.target"
          class="mb-0 flex no-underline text-primary-500 text-sm"
        >
          <p>
            <DsIcon :name="finalLink?.icon!" />
            {{ finalLink?.text }}
          </p>
        </DsTypography>
      </div>
    </div>
  </article>
</template>
