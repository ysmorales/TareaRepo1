<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import WrapperContainer from "../../../WrapperContainer.vue";

interface IProp {
  idr: string;
  ids: string;
  idc: string;
}

const props = withDefaults(defineProps<IProp>(), {
  idr: "",
  ids: "",
  idc: "",
});

const store = useBuilderStore();
const { itemsPage } = toRefs(store);
</script>

<template>
  <div
    class="cc"
    :key="mm"
    v-for="mm in Object.keys(
      itemsPage.sections[ids].rows[idr].columns[idc].modules
    )"
  >
    <WrapperContainer :idm="mm" :ids="ids" :idr="idr" :idc="idc">
      <component
        :is="
          getComponentKey(
            itemsPage.sections[ids].rows[idr].columns[idc].modules[mm].module
          )
        "
        v-bind="
          filterProps(
            itemsPage.sections[ids].rows[idr].columns[idc].modules[mm].props ??
              {}
          )
        "
      />
    </WrapperContainer>
  </div>
</template>
