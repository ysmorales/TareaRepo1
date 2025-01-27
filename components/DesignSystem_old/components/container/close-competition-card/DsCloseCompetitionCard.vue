<script lang="ts" setup>
import type { IBorderCardColor } from "../../container/card/interfaces";
import { colorClass } from "../../container/card/library";
import DsIcon from "../../../components/basic/icon/DsIcon.vue";
import DsTag from "../../../components/basic/tag/DsTag.vue";
import { toLocaleDate } from "../../../../DesignSystem/utils/date";

const props = defineProps({
  mainTitle: {
    type: String,
    default:
      "Ejecutivo o ejecutiva plataforma de atención CAPRI Puerto Natales",
  },
  item: {
    type: Object,
    default: () => ({}),
  },
  url: {
    type: String,
    default: "",
  },
  targetUrl: {
    type: String as () => "_self" | "_blank" | "_parent" | "_top",
    default: "_self",
  },
  textSmallTop: {
    type: String,
    default: "Concurso cerrado",
  },
  color: {
    type: String as () => IBorderCardColor,
    default: "default",
  },
});

const emit = defineEmits(["view"]);

const handleClick = () => {
  if (!props.url) {
    emit("view");
  }
};
</script>

<template>
  <article
    :class="[
      'border overflow-hidden rounded-lg mb-3 flex max-h-[210px]',
      colorClass[color],
    ]"
    @click="handleClick"
  >
    <div class="flex flex-col bg-white w-full">
      <header class="flex flex-col px-4 pt-2">
        <small v-if="textSmallTop" :class="['mb-0', 'text-primary-500']">
          {{ textSmallTop }}</small
        >
        <div class="flex justify-between">
          <a
            v-if="item?.row?.name"
            :class="[
              'cursor-pointer',
              {
                'text-white hover:text-neutral-300':
                  color == 'dark' || color == 'fullWhite',
              },
            ]"
            :href="url || 'javascript:void(0)'"
            :target="targetUrl"
            title="Ir al artículo"
            ><h3>{{ item?.row?.name }}</h3></a
          >
          <DsIcon color="primary" name="angle-right" />
        </div>
      </header>
      <div
        id="info"
        :class="[
          'px-4 mb-0',
          { 'text-white': color == 'dark' || color == 'fullWhite' },
        ]"
      >
        <div class="flex space-x-2 mb-2">
          <div>
            <DsTag
              :id="'initTag'"
              :text="'Inicio: ' + toLocaleDate(item?.row?.start_date)"
              class="text-primary-500"
            />
          </div>
          <div>
            <DsTag
              :id="'endTag'"
              :text="'Término: ' + toLocaleDate(item?.row?.end_date)"
              class="text-primary-500"
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
