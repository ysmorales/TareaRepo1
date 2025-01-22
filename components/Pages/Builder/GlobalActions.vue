<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";

const store = useBuilderStore();
const { updateAreaMode, areaMode } = toRefs(store);

const toogleMode = () => {
  updateAreaMode.value(areaMode.value === "dragable" ? "normal" : "dragable");
};
</script>

<template>
  <div class="relative float-right mt-[-200px] mr-1 z-30">
    <div class="bg-gray-200 float-right mt-[-10px] p-2 hover:bg-blue-100">
      <div class="flex justify-end w-full flex-col">
        <DsIcon
          color="primary"
          class="cursor-pointer"
          :name="areaMode === 'dragable' ? 'toggle-on' : 'toggle-off'"
          :title="
            areaMode === 'dragable'
              ? 'No mostrar contenedores'
              : 'Mostrar contenedores'
          "
          @click="toogleMode()"
        />
        <DsIcon
          color="primary"
          class="cursor-pointer"
          name="window-maximize"
          title="Expandir area de trabajo"
        />
        <DsIcon
          color="primary"
          class="cursor-pointer"
          name="long-arrow-alt-left"
          title="Ir atrás"
        />
        <DsIcon
          color="primary"
          class="cursor-pointer"
          name="long-arrow-alt-right"
          title="Ir hacia adelante"
        />
      </div>
    </div>
  </div>
</template>
