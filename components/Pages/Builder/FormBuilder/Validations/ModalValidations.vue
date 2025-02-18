<script lang="ts" setup>
import { DsModal, DsCard } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import ListItemsForm from "./ListItemsForm.vue";
import AddFieldOptions from "../addFieldOptions.vue";

interface IProp {
  validationsDefault?: any;
}

const props = withDefaults(defineProps<IProp>(), {
  validationsDefault: [],
});

const store = useBuilderStore();
const { itemsPageList } = toRefs(store);

const emit = defineEmits(["handlerChange"]);
const showModalValidations = ref(false);

const handlerAddValidations = () => {
  showModalValidations.value = true;
};

const child = ref(null);
const addValidation = () => {
  const listValidations = clone(child.value.listValidations);
  showModalValidations.value = false;
  emit("handlerChange", listValidations);
};

const getLabelInfoFieldNode = (idNode) => {
  if (isNotEmpty(idNode)) {
    const ruta = encontrarRutaPorIndice(itemsPageList.value, idNode);
    const node = getNodeByPath(itemsPageList.value, ruta);
    return `${getNameComponentKey(node?.item)}.${getNameFieldFormNode(node)}`;
  }
  return "";
};
</script>

<template>
  <DsModal
    v-if="showModalValidations"
    title="Validaciones"
    :model-value="showModalValidations"
    accept-text="Adicionar"
    color-button-ok="primary"
    @close="showModalValidations = false"
    @accept="addValidation"
    :showFooter="false"
  >
    <div class="mt-2 p-2">
      <ListItemsForm ref="child" :validations-default="validationsDefault" />
    </div>
  </DsModal>
  <div class="w-full">
    <div v-for="vv in validationsDefault">
      <DsCard
        :headerTitle="vv.validation"
        :textInfo="getLabelInfoFieldNode(vv.id)"
      />
    </div>
    <div class="mb-4 ml-2">
      <AddFieldOptions
        label="Add/Edit validations"
        @add="handlerAddValidations"
      />
    </div>
  </div>
</template>
