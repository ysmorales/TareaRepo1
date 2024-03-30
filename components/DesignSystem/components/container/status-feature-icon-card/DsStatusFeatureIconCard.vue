<script lang="ts" setup>
import { variantCard } from "./library";
import { computed } from "vue";

const props = defineProps({
  mainText: {
    type: String,
    default:
      "Pensión ex cajas de previsión para madres de hijos de afiliación no matrimonial - Estado",
  },
  href: {
    type: String,
    default: "#",
  },
  title: {
    type: String,
    default: "Ir al artículo",
  },
  variant: {
    type: String as () => "success" | "secondary" | "primary" | "danger",
    default: "primary",
  },
});
</script>

<template>
  <article
    :class="[
      'border overflow-hidden rounded-lg flex flex-colh-auto',
      variantCard[variant].bg,
    ]"
  >
    <header class="p-4 text-white w-full flex">
      <div class="mr-2">
        <i
          :class="`las la-${variantCard[variant].icon} text-white text-2xl`"
        ></i>
      </div>
      <div>
        <a :href="href" :title="title" class="text-white hover:text-neutral-300"
          ><h3>
            {{ mainText }}
          </h3></a
        >
      </div>
    </header>
  </article>
</template>
