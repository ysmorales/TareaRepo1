<script lang="ts" setup>
import DsButton from "../button/DsButton.vue";
import DsIcon from "../icon/DsIcon.vue";

const emit = defineEmits(["reload"]);
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

function handleReload() {
  emit("reload");
}
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-2 w-full">
    <DsIcon class="m-4" name="box" size="xlarge" />
    <p class="text-lg text-gray-500 m-4">No hay datos disponibles</p>
    <DsButton
      v-if="!loading"
      color="primary"
      text="Recargar"
      @click="handleReload"
    />
  </div>
</template>
