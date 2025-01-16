<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";

import Column from "./Column";

interface IProp {
  idr: string;
  ids: string;
}

const props = withDefaults(defineProps<IProp>(), {
  idr: "",
  ids: "",
});

const store = useBuilderStore();
const { itemsPage } = toRefs(store);
</script>

<template>
  <div class="row">
    <Column
      :idc="cc"
      :idr="idr"
      :ids="ids"
      v-for="cc in Object.keys(
        itemsPage?.sections[ids].rows[idr].columns ?? {}
      )"
    />
  </div>
</template>
