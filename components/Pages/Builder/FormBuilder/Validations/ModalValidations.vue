<script lang="ts" setup>
import { DsModal, DsButton } from "~/components/DesignSystem";
import ListItemsForm from "./ListItemsForm.vue";

interface IProp {
  item?: any;
}

const props = withDefaults(defineProps<IProp>(), {
  item: {},
});
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
  >
    <div class="mt-2 p-2"><ListItemsForm ref="child" /></div>
  </DsModal>
  <div class="w-full">
    <div class="">Listado validaciones</div>

    <div class="mb-4 ml-2">
      <DsButton color="primary" @click="handlerAddValidations"
        >Adicionar
      </DsButton>
    </div>
  </div>
</template>
