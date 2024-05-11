<script lang="ts" setup>
import { ref } from "vue";
import DsLink from "../link/DsLink.vue";
import DsIcon from "../../basic/icon/DsIcon.vue";

defineProps({
  data: {
    type: Array as () => { id: number; text: string; icon?: string }[],
    default: [
      { id: 1, text: "Ingresar solicitud", icon: "file-upload" },
      { id: 2, text: "Consultar", icon: "search" },
      { id: 3, text: "Bandeja de entrada" },
    ],
  },
});
const emit = defineEmits(["click"]);
let activeId = ref(1);

const setActive = (id: number) => {
  activeId.value = id;
  emit("click", id);
};
</script>

<template>
  <ul class="mb-20">
    <li
      v-for="link in data"
      :key="link.id"
      :class="{ 'border-l-4 border-blue-800': link.id === activeId }"
      class="p-2 py-4"
      @click="setActive(link.id)"
    >
      <DsLink class="flex items-center" title="Ir a la sección">
        <span class="no-underline"
          ><DsIcon v-if="link.icon" :name="link.icon" class="mr-2"
        /></span>
        {{ link.text }}
      </DsLink>
    </li>
  </ul>
</template>
