<script lang="ts" setup>
import { DsCheck, DsSelect, DsIcon } from "~/components/DesignSystem";
import DsTooltip from "~/components/DesignSystem/components/basic/tooltip/DsTooltip.vue";
import FieldLayout from "../fieldLayout.vue";
import { useBuilderStore } from "~/stores/builderStore";

const store = useBuilderStore();
const { handlerChangeContainerSettings, itemsPageList } = toRefs(store);

interface IProp {}

const props = withDefaults(defineProps<IProp>(), {});
const inAdvanceMode = ref(false);
const currentConfig = ref({
  scope: false,
  scopeSubscribe: "",
});

const toogleMode = () => {
  inAdvanceMode.value = !inAdvanceMode.value;
};

const getFieldsToScope = () => {
  const items = getScopeFieldValues(itemsPageList.value);
  return Object.keys(items).map((d) => ({
    value: d,
    text: items[d],
  }));
};
const emit = defineEmits(["handlerUpdate"]);
watch(
  currentConfig,
  (newState) => {
    emit("handlerUpdate", newState);
  },
  { deep: true }
);
</script>

<template>
  <div class="flex items-start w-full">
    <div class="flex-1">
      <slot></slot>

      <div v-if="inAdvanceMode" class="ml-4 pl-2 bg-blue-300">
        {{ fieldKey }}
        <FieldLayout description="Subscribir a estado global">
          <DsCheck
            v-model="currentConfig.scope"
            label="Subscribir estado global"
            class="mb-4"
          />
        </FieldLayout>
        <FieldLayout
          description="La propiedad seleccionada cambiará cuando el objeto al que está subscrito cambie"
          v-if="currentConfig.scope"
        >
          <DsSelect
            v-model="currentConfig.scopeSubscribe"
            :option="getFieldsToScope()"
            label="Selecciona field"
            :placeholder="`Select`"
          />
        </FieldLayout>
      </div>
    </div>

    <div class="mb-4 ml-2 hover:cursor-pointer" @click="toogleMode">
      <DsTooltip text="Adición avanzada" position="right">
        <DsIcon name="tools" size="default" />
      </DsTooltip>
    </div>
  </div>
</template>
