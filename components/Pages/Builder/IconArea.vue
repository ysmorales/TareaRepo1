<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";

interface IProp {
  type?: string;
  id: string;
}

const props = withDefaults(defineProps<IProp>(), {
  type: "module",
});

const store = useBuilderStore();
const { itemToCopy } = toRefs(store);
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
          v-if="!isNotEmpty(itemToCopy) || itemToCopy?.type === type"
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
