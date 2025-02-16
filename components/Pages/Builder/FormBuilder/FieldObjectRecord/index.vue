<script lang="ts" setup>
import { DsButton, DsModal } from "~/components/DesignSystem";
import ListItems from "./ListItems.vue";

interface IProp {
  modelValue: any;
  fieldInfo: any;
  label: string;
}

const props = withDefaults(defineProps<IProp>(), {});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", clone(value));
  },
});

const showModal = ref(false);

const handlerEditRecord = () => {
  showModal.value = true;
};

let currentState = {};
const handlerStoreChanges = (newState) => {
  currentState = clone(newState);
};
const handlerEdit = () => {
  showModal.value = false;
  if (isNotEmpty(currentState)) {
    model.value = currentState;
  }
};
</script>

<template>
  <div class="m-2 mt-0">
    <DsModal
      v-if="showModal"
      :title="label"
      :model-value="showModal"
      accept-text="Adicionar"
      color-button-ok="primary"
      @close="showModal = false"
      @accept="handlerEdit"
    >
      <div class="mt-2 p-2">
        <ListItems
          @handler-update="handlerStoreChanges"
          :defaultValues="clone(model)"
          :fieldInfo="fieldInfo"
        />
      </div>
    </DsModal>
    <DsButton color="primary" @click="handlerEditRecord"
      >{{ label }} Editar
    </DsButton>
  </div>
</template>
