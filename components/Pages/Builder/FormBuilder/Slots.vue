<script lang="ts" setup>
import { DsCheck } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";

interface IProp {
  item: any;
}

const props = withDefaults(defineProps<IProp>(), {
  item: {},
});

const slotsNames = ref({});

const store = useBuilderStore();
const { updateToogleShowSlotInForm } = toRefs(store);

watch(
  slotsNames,
  () => {
    updateToogleShowSlotInForm.value(
      props?.item,
      Object.keys(slotsNames.value)
        .filter((d) => slotsNames.value[d])
        .map((d) => d)
    );
  },
  { deep: true }
);
</script>

<template>
  <div class="m-2 mt-0">
    <div>Slots</div>
    <div v-for="slotName in item.slots">
      <DsCheck v-model="slotsNames[slotName]" :label="slotName" />
    </div>
  </div>
</template>
