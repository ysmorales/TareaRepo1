<script lang="ts" setup>
import { ref, watch } from "vue";
import DsLink from "../link/DsLink.vue";
import DsIcon from "../../basic/icon/DsIcon.vue";
import type { ISimpleSideMenu } from "~/components/DesignSystem/interfaces/elements";

const props = defineProps({
  data: {
    type: Array as () => ISimpleSideMenu[],
    default: () => [
      { id: 1, text: "Ingresar solicitud", icon: "file-upload" },
      { id: 2, text: "Consultar", icon: "search" },
      { id: 3, text: "Bandeja de entrada" },
    ],
  },
  topMenuTitle: {
    type: String,
    default: "Cambio de Franja Horaria",
  },
  active: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["click"]);
const activeId = ref(props.active);

const setActive = (id: number) => {
  activeId.value = id;
  emit("click", id);
};

watch(
  () => props.active,
  (newVal) => {
    setActive(newVal);
  },
);
</script>

<template>
  <div class="py-2">
    <p class="p-1">
      <span>Estás en la aplicación: </span><br />
      <strong>{{ topMenuTitle }}</strong>
    </p>
    <ul class="mb-20">
      <li
        v-for="link in data"
        :key="link.id"
        :class="{ 'border-l-[3px] border-primary-500': link.id === activeId }"
        class="px-[10px] py-[13px]"
        @click="link.url ? null : setActive(link.id)"
      >
        <DsLink
          :color="link.id === activeId ? 'primary' : 'dark'"
          :href="link.url"
          class="flex items-center no-underline"
          title="Ir a la sección"
        >
          <span class="no-underline">
            <DsIcon v-if="link.icon" :name="link.icon" class="mr-2" />
          </span>
          {{ link.text }}
        </DsLink>
      </li>
    </ul>
  </div>
</template>
