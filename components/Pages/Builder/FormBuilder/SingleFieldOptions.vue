<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import CardFieldOptions from "./CardFieldOptions.vue";
const store = useBuilderStore();
const { itemOnSelect, itemsPageList } = toRefs(store);

const item = computed(() => {
  if (itemOnSelect.value.id) {
    const ruta = encontrarRutaPorIndice(
      itemsPageList.value,
      itemOnSelect.value.id
    );
    const nodo = getNodeByPath(itemsPageList.value, ruta);

    return getInfoFieldsComponent(nodo);
  }
});
</script>

<template>
  <div class="mt-5">
    <CardFieldOptions :item="item" :index="11" />
  </div>
</template>
