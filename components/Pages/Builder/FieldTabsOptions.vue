<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import { DsTabs, DsTabItem } from "~/components/DesignSystem";
import ListFieldOptions from "./ListFieldOptions.vue";

const store = useBuilderStore();
const { modalType, currentEditItem } = toRefs(store);

const showTabs = computed(
  () =>
    currentEditItem?.value?.component?.__name && modalType.value === "property"
);
</script>

<template>
  <div class="">
    <div v-show="showTabs" class="h-full flex m-2">
      <DsTabs
        adjust
        :rounded="false"
        title-class="text-2xl font-semibold"
        title-class-active="text-2xl font-bold"
        class="mt-0"
      >
        <DsTabItem title="Diseño">
          <div
            class="overflow-auto min-h-[calc(100vh-145px)] max-h-[calc(100vh-145px)]"
          >
            <ListFieldOptions />
          </div>
        </DsTabItem>
        <DsTabItem title="Desarrollo">
          <div
            class="overflow-auto min-h-[calc(100vh-250px)] max-h-[calc(100vh-250px)]"
          >
            some
          </div>
        </DsTabItem>
      </DsTabs>
    </div>
  </div>
</template>
