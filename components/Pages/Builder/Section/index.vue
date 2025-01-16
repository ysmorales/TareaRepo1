<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";

import Row from "./Row";

const store = useBuilderStore();
const { itemsPage } = toRefs(store);
</script>

<template>
  <section v-for="ids in Object.keys(itemsPage?.sections ?? {})">
    <Row
      :idr="idr"
      :ids="ids"
      v-for="idr in Object.keys(itemsPage?.sections[ids].rows ?? {})"
    />
  </section>
</template>
