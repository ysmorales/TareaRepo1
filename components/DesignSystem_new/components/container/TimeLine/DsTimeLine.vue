<script lang="ts" setup>
import DsTypography from "../../basic/typography/DsTypography.vue";
import DsIcon from "../../basic/icon/DsIcon.vue";
import DsSeparator from "../../basic/separator/DsSeparator.vue";
import { approved, pending } from "../../../utils/constants";
import DsStatusIconCard from "../../container/status-icon-card/DsStatusIconCard.vue";

interface IProp {
  title?: string;
  infoText?: string;
}

withDefaults(defineProps<IProp>(), {
  title: "Historial de solicitud",
  infoText: "Revisa el historial completo de esta solicitud",
});

const items = [
  {
    id: 1,
    user: {
      image: "/images/avatar.jpg",
      name: "Armando Paredes del Castillo",
      note: "Operador",
    },
    date: new Date(),
    info: "Ha aprobado la solicitud",
    status: approved,
    extraInfo: [
      {
        label: "Motivo",
        value: "some motive",
      },
    ],
  },
  {
    id: 2,
    user: {
      image: "/images/avatar.jpg",
      name: "Armando Paredes del Castillo",
      note: "Operador",
    },
    date: new Date(),
    status: approved,
  },
  {
    id: 3,
    user: {
      image: "/images/avatar.jpg",
      name: "Armando Paredes del Castillo",
      note: "Operador",
    },
    date: new Date(),
    status: approved,
  },
  {
    id: 4,
    user: {
      image: "/images/avatar.jpg",
      name: "Armanda Paredes del Castillo",
      note: "Constructor",
    },
    date: "2024/3/9",
    info: "Ha ingresado una solicitud",
    status: pending,
  },
  {
    id: 5,
    user: {
      image: "/images/avatar.jpg",
      name: "Armando Paredes del Castillo",
      note: "Operador",
    },
    date: new Date(),
    status: approved,
  },
];
</script>

<template>
  <div class="mb-2">
    <DsTypography class="font-inriaSansBold text-3xl mb-0"
      >{{ title }}
    </DsTypography>

    <DsTypography class="font-inriaSans mb-0" variant="span"
      >{{ infoText }}
    </DsTypography>
  </div>
  <DsSeparator />

  <div class="flex flex-col">
    <slot>
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'pl-0': index === 0,
          'border border-l-[#cfeafe] border-b-0 border-r-0 border-t-0 border-l-2 pl-6':
            index > 0,
        }"
      >
        <DsStatusIconCard :key="item.id" />
      </div>
    </slot>
    <div class="mt-3 text-primary-500">
      <DsIcon name="calendar" />
      <DsTypography
        class="font-inriaSans mb-0 ml-2 text-primary-500"
        variant="span"
        >Inicio
      </DsTypography>
    </div>
  </div>
</template>
