<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";

const store = useBuilderStore();
const {
  updateAreaMode,
  areaMode,
  updateViewMode,
  viewMode,
  updateViewModeFieldConfigs,
  viewModeFieldConfigs,
} = toRefs(store);

const toogleMode = () => {
  updateAreaMode.value(areaMode.value === "dragable" ? "normal" : "dragable");
};
const toogleView = () => {
  updateViewMode.value(viewMode.value === "edition" ? "default" : "edition");
};

const toogleViewModeFieldConfigs = () => {
  updateViewModeFieldConfigs.value(
    viewModeFieldConfigs.value === "single" ? "full" : "single"
  );
};
</script>

<template>
  <div class="relative float-right mt-[-200px] mr-1 z-30">
    <div class="bg-gray-200 float-right mt-[-10px] p-2 hover:bg-blue-100">
      <div class="flex justify-end w-full flex-col">
        <DsIcon
          color="primary"
          class="cursor-pointer"
          :name="viewMode === 'default' ? 'eye-slash' : 'eye'"
          title="Mostrar resultado final"
          @click="toogleView()"
        />
        <DsIcon
          color="primary"
          v-if="viewMode === 'edition'"
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
          @click="toogleViewModeFieldConfigs()"
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
