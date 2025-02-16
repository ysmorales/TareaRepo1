<script lang="ts" setup>
import { DsInput, DsCheck, DsSelect } from "~/components/DesignSystem";
import FieldLayout from "./fieldLayout.vue";
import { useBuilderStore } from "~/stores/builderStore";

interface IProp {
  item: any;
}

const props = withDefaults(defineProps<IProp>(), {
  item: {},
});

const store = useBuilderStore();
const { itemOnSelect, handlerChangeContainerSettings, itemsPageList } =
  toRefs(store);

const getValues = () => {
  if (itemOnSelect.value.id) {
    const ruta = encontrarRutaPorIndice(
      itemsPageList.value,
      itemOnSelect.value.id
    );
    const nodo = getNodeByPath(itemsPageList.value, ruta);
    return nodo?.settings?.extra ?? { name: "" };
  }
};

const valueField = ref(getValues());

function handleChange() {
  handlerChangeContainerSettings.value(itemOnSelect.value, {
    extra: valueField.value,
  });
}

let ttm;
watch(
  valueField,
  () => {
    clearTimeout(ttm);
    ttm = setTimeout(() => {
      handleChange();
    }, 300);
  },
  { deep: true }
);
const getFieldsToScope = () => {
  const items = getScopeFieldValues(itemsPageList.value);
  return Object.keys(items).map((d) => ({
    value: d,
    text: items[d],
  }));
};
</script>

<template>
  <FieldLayout description="Nombre a aplicar al field al enviar en el modelo">
    <DsInput v-model="valueField.name" label="Field name" />
  </FieldLayout>
  <FieldLayout description="Prepara escribir o leer del estado global">
    <DsCheck
      v-model="valueField.scope"
      label="Subscribir estado global"
      class="mb-4"
    />
  </FieldLayout>
  <FieldLayout
    description="La propiedad seleccionada cambiará cuando el objeto al que está subscrito cambie"
    v-if="valueField.scope"
  >
    <DsSelect
      v-model="valueField.scopeSubscribe"
      :option="getFieldsToScope()"
      label="Selecciona field"
      :placeholder="`Select`"
    />
  </FieldLayout>
</template>
