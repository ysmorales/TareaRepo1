<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";
import type { IItemBuilder } from "~/interfaces/interfaces";

const props = defineProps({
  index: Number,
});
const emit = defineEmits(["handlerAction"]);

function handlerAction(mode: string) {
  emit("handlerAction", mode);
}
</script>

<template>
  <div>
    <div
      class="relative bg-white z-20 float-right mt-[-10px] mr-1 hover:bg-blue-100 hidden group-hover:inline"
    >
      <div class="flex justify-end w-full">
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
