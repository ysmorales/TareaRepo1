<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";

const props = defineProps({
  index: Number,
});
const emit = defineEmits(["handlerAction"]);

function handlerAction(mode: string) {
  emit("handlerAction", mode);
}
</script>

<template>
  <div class="relative float-right mt-[-200px] mr-1 z-30">
    <div class="bg-gray-200 float-right mt-[-10px] p-2 hover:bg-blue-100">
      <div class="flex justify-end w-full flex-col">
        <DsIcon
          color="primary"
          class="cursor-pointer"
          name="copy"
          title="Copiar"
          @click="handlerAction('copy')"
        />
        <DsIcon
          color="primary"
          class="cursor-pointer"
          name="clone"
          title="Clonar"
          @click="handlerAction('clone')"
        />

        <DsIcon
          color="primary"
          class="cursor-pointer"
          name="paste"
          title="Pegar"
          @click="handlerAction('paste')"
        />
        <DsIcon
          color="danger"
          class="cursor-pointer"
          name="trash"
          title="Remover"
          @click="handlerAction('trash')"
        />
      </div>
    </div>
  </div>
</template>
