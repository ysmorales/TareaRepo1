<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import { DsTypography, DsInput } from "~/components/DesignSystem";
import Item from "./CardItemComponent.vue";

const searchText = ref("");
const store = useBuilderStore();
const { changeCurrentDragItem, builderItems } = toRefs(store);

function dragStart(currentKeyName: string) {
  if (currentKeyName) {
    console.log(currentKeyName, "tttt");
    changeCurrentDragItem.value(currentKeyName);
  }
}

const listItems = computed(() =>
  getAllComponents().filter((d) =>
    getNameComponentKey(d)
      .toLowerCase()
      .includes(searchText.value.toLowerCase())
  )
);
</script>

<template>
  <div class="p-2">
    <DsInput v-model="searchText" placeholder="Buscador" type="text" />
  </div>
  <div>
    <DsTypography> Componentes </DsTypography>
    <div class="flex flex-col overflow-auto max-h-[calc(100vh-200px)]">
      <div
        aria-describedby="vfb-elements-description"
        aria-label="Elements"
        class="flex flex-col space-y-1 p-2"
        tabindex="0"
      >
        <Item
          v-for="keyName in listItems"
          :key="keyName"
          :icon="getStories()[keyName].icon ?? ''"
          :name="getNameComponentKey(keyName)"
          :keyName="keyName"
          @drag-start="dragStart(keyName)"
        />
      </div>
    </div>
  </div>
</template>
