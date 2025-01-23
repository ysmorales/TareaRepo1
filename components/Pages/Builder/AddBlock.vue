<script lang="ts" setup>
import { DsIcon, DsButton } from "~/components/DesignSystem";

import FieldContainerLayout from "./FormBuilder/ContainerLayout/FieldContainerLayout.vue";

const props = defineProps({
  type: String,
});
const handleAdd = () => {};
</script>

<template>
  <div class="relative flex justify-center w-full">
    <div class="absolute mt-4">
      <FieldContainerLayout v-if="type === 'row'">
        <template v-slot:action>
          <DsButton color="tertiary" @click="handleAdd">
            <DsIcon name="plus" />
          </DsButton>
        </template>
      </FieldContainerLayout>
      <DsButton color="tertiary" @click="handleAdd" v-if="type !== 'row'">
        <DsIcon name="plus" />
      </DsButton>
    </div>
  </div>
</template>
