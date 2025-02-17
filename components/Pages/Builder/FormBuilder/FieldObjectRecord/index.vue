<script lang="ts" setup>
import { DsButton, DsModal } from "~/components/DesignSystem";
import ListItems from "./ListItems.vue";

interface IProp {
  modelValue: any;
  fieldInfo: any;
  label: string;
}

const props = withDefaults(defineProps<IProp>(), {});

const emit = defineEmits(["update:modelValue", "handlerUpdateConfig"]);

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
let currentConfig = {};
const handlerStoreChangesConfig = (newConfig) => {
  currentConfig = clone(newConfig);
};
const handlerEdit = () => {
  showModal.value = false;
  if (isNotEmpty(currentState)) {
    model.value = currentState;
  }
  if (isNotEmpty(currentConfig)) {
    emit("handlerUpdateConfig", clone(currentConfig));
  }
};
</script>

<template>
  <div class="mt-0">
    <DsModal
      v-if="showModal"
      :title="label"
      :model-value="showModal"
      accept-text="Guardar"
      color-button-ok="primary"
      @close="showModal = false"
      @accept="handlerEdit"
    >
      <div class="mt-2">
        <ListItems
          @handler-update="handlerStoreChanges"
          @onHandlerUpdateConfig="handlerStoreChangesConfig"
          :defaultValues="clone(model)"
          :fieldInfo="fieldInfo"
        />
      </div>
    </DsModal>
    <div class="mb-4">
      <label>{{ label }}</label>
      <DsButton color="primary" @click="handlerEditRecord">Editar </DsButton>
    </div>
  </div>
</template>
