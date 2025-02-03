<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import { DsTabs, DsTabItem } from "~/components/DesignSystem";
import ListFieldOptions from "./FormBuilder/ListFieldOptions.vue";
import ListContainerOptions from "./ListContainerOptions.vue";
import SingleFieldOptions from "./FormBuilder/SingleFieldOptions.vue";

const store = useBuilderStore();
const { itemOnSelect, viewModeFieldConfigs } = toRefs(store);
</script>

<template>
  <div class="">
    <div class="h-full flex m-2">
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
            <ListFieldOptions
              v-if="
                itemOnSelect?.type === 'module' &&
                viewModeFieldConfigs === 'full'
              "
            />
            <ListContainerOptions v-if="itemOnSelect?.type !== 'module'" />
            <SingleFieldOptions
              v-if="
                itemOnSelect?.type === 'module' &&
                viewModeFieldConfigs === 'single'
              "
            />
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
