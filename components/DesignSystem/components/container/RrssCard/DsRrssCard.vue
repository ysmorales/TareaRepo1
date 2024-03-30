<script lang="ts" setup>
import DsLink from "../../../components/navigation/link/DsLink.vue";

defineProps({
  headerTitle: {
    type: String,
    default: "Instituto de Previsión Social",
  },
  subTitle: {
    type: String,
    default: "Hace 1 hora",
  },
  description: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cupiditate.",
  },
  headerImage: {
    type: String,
    default: "/images/example-card/logo-ips-facebook.jpg",
  },
  altHeaderImage: {
    type: String,
  },
  imageLogo: {
    type: String,
    default: "/images/example-card/facebook.png",
  },
  altImageLogo: {
    type: String,
  },
  bodyImage: {
    type: String,
    default: "/images/example-card/nota-web-afper-1000x270.jpg",
  },
  altBodyImage: {
    type: String,
  },
  comments: {
    type: Number,
    default: 0,
  },
  like: {
    type: Number,
    default: 0,
  },
  linkUrl: {
    type: String,
    default: "#",
  },
  linkTitle: {
    type: String,
    default: "compartir",
  },
  linkTarget: {
    type: String as () => "_blank" | "_self",
    default: "compartir",
  },
});
</script>

<template>
  <article
    class="border overflow-hidden rounded-lg md:flex flex-col content-between max-w-[400px]"
  >
    <header
      class="p-4 border border-b-neutral-300 border-s-0 border-e-0 flex flex-row justify-between border-t-0"
    >
      <div class="flex flex-row">
        <figure class="w-12 h-12 mr-2">
          <img :alt="altHeaderImage" :src="headerImage" />
        </figure>
        <div>
          <h4 class="mb-0">{{ headerTitle }}</h4>
          <small>{{ subTitle }}</small>
        </div>
      </div>
      <figure class="w-6 h-6">
        <img :alt="altImageLogo" :src="imageLogo" />
      </figure>
    </header>
    <div>
      <p class="p-4">
        {{ description }}
      </p>
      <figure class="h-[200px] overflow-hidden block relative">
        <img
          :alt="altBodyImage"
          :src="bodyImage"
          class="absolute top-0 bottom-0 inset-x-2/4 translate-x-[-50%] m-auto max-h-full max-w-none"
        />
      </figure>
      <div class="p-4">
        <div class="flex justify-between">
          <small
            ><i class="las la-comment mr-1"></i>
            {{ comments }} comentarios</small
          >
          <small
            ><i class="las la-heart mr-1 text-primary"></i>{{ like }} Me
            gustan</small
          >
        </div>
      </div>
    </div>
    <footer
      class="p-4 flex items-center justify-center border border-t-neutral-300 border-s-0 border-e-0 border-b-0"
    >
      <i class="las la-share mr-1"></i>
      <DsLink :href="linkUrl" :target="linkTarget" :title="linkTitle"
        >Compartir</DsLink
      >
    </footer>
  </article>
</template>
