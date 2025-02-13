<script lang="ts" setup>
import {
  getClassRow,
  getCustomStyleRow,
  getTypeVariant,
  getEventsVariant,
} from "./helpers";
import DefaultNodeAreaContainer from "./DefaultNodeAreaContainer.vue";
import ValidationContext from "./FormBuilder/Validations/ValidationContext.vue";

interface IProp {
  items?: any;
  indexShow: number | string;
}
const props = withDefaults(defineProps<IProp>(), {
  items: [],
  indexShow: "all",
});
</script>

<template>
  <ValidationContext :items="items">
    <template #form="{ validateForm }">
      <component
        v-for="(node, index) in items"
        :is="getTypeVariant(node)"
        :key="node.id"
        :class="[
          getClassRow(node),
          node.type === 'column'
            ? node.settings.columnSpan ?? 'col-span-12'
            : '',
          node.type,
        ]"
        :style="[getCustomStyleRow(node)]"
        v-on="getEventsVariant(node, validateForm)"
      >
        <DefaultNodeAreaContainer
          :node="node"
          :validateForm="validateForm"
          v-if="indexShow === 'all' || indexShow === index"
        />
      </component>
    </template>
  </ValidationContext>
</template>
