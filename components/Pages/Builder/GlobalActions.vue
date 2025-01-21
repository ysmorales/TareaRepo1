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
          title="Copiar"
          @click="toogleMode()"
        />
        <DsIcon
          color="primary"
          class="cursor-pointer"
          name="window-maximize"
          title="Expandir area de trabajo"
        />
      </div>
    </div>
  </div>
</template>
