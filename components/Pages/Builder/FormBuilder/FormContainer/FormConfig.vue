<script lang="ts" setup>
import { DsCheck, DsIcon, DsInput } from "~/components/DesignSystem";
import { useBuilderStore } from "~/stores/builderStore";
import FieldLayout from "../fieldLayout.vue";

interface IProp {
  item: any;
}

const props = withDefaults(defineProps<IProp>(), {
  item: {},
});

const isForm = ref(false);
const formConfig = ref({
  endpoint: "",
});

const store = useBuilderStore();
const { updateToogleShowSlotInForm } = toRefs(store);
</script>

<template>
  <div class="m-2 mt-0">
    <div>Formulario:</div>
    <FieldLayout
      description="Todos los elementos contenidos se capturan y preparan para enviar a un servidor"
    >
      <DsCheck v-model="isForm" label="Aplicar como un formulario" />
    </FieldLayout>

    <div v-if="isForm">
      <FieldLayout description="Url del servidor">
        <DsInput v-model="formConfig.endpoint" label="Endpoint servidor" />
      </FieldLayout>
    </div>
  </div>
</template>
