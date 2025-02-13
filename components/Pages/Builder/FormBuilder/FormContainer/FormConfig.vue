<script lang="ts" setup>
import { DsCheck, DsSelect, DsInput } from "~/components/DesignSystem";
import FieldLayout from "../fieldLayout.vue";
import ModalValidations from "../Validations/ModalValidations.vue";
import CurrentFormData from "../Validations/CurrentFormData.vue";

interface IProp {
  formDefault: Record<string, any>;
}

const props = withDefaults(defineProps<IProp>(), {
  formDefault: {
    isForm: false,
    runValidations: false,
    handlerEventValidations: false,
    sendToServer: false,
    endpoint: "",
    handlerEventSubmit: "",
    validations: [],
  },
});

const emit = defineEmits(["handlerChange"]);
const formConfig = ref(props.formDefault);
const handlersEventSubmit = [
  {
    value: "submit",
    text: "Input submit",
  },
  {
    value: "setpChange",
    text: "Step Change",
  },
];

const handlerChangeValidations = (newVals) => {
  formConfig.value.validations = newVals;
};

watch(
  formConfig,
  () => {
    emit("handlerChange", { form: formConfig.value });
  },
  { deep: true }
);
</script>

<template>
  <div class="m-2 mt-0">
    <div>Formulario:</div>
    <FieldLayout
      description="Todos los elementos contenidos se capturan y preparan para enviar a un servidor"
    >
      <DsCheck v-model="formConfig.isForm" label="Aplicar como un formulario" />
    </FieldLayout>

    <FieldLayout
      v-if="formConfig.isForm"
      description="Ejecuta las validaciones antes de pasar a siguiente paso"
    >
      <DsCheck
        v-model="formConfig.runValidations"
        label="Ejecutar validaciones"
      />
    </FieldLayout>

    <FieldLayout
      v-if="formConfig.runValidations"
      description="Evento que ejecuta las validaciones"
    >
      <DsSelect
        v-model="formConfig.handlerEventValidations"
        :option="handlersEventSubmit"
        label="Selecciona evento previo a ejecutar las validaciones"
        :placeholder="`Select event`"
      />
    </FieldLayout>

    <FieldLayout description="" v-if="formConfig.isForm">
      <DsCheck
        v-model="formConfig.sendToServer"
        label="Envio de modelo de datos al servidor"
      />
    </FieldLayout>

    <FieldLayout v-if="formConfig.sendToServer" description="Url del servidor">
      <DsInput v-model="formConfig.endpoint" label="Endpoint servidor" />
    </FieldLayout>

    <FieldLayout
      v-if="formConfig.sendToServer"
      description="Evento que ejecuta el submit del formulario"
    >
      <DsSelect
        v-model="formConfig.handlerEventSubmit"
        :option="handlersEventSubmit"
        label="Selecciona evento trigger"
        :placeholder="`Select event`"
      />
    </FieldLayout>

    <FieldLayout
      v-if="formConfig.runValidations"
      description="Listado de validaciones a ejecutar"
    >
      <div class="mt-2">Validaciones:</div>
      <div class="m-2">
        <ModalValidations
          @handlerChange="handlerChangeValidations"
          :validationsDefault="formConfig.validations"
        />
      </div>
    </FieldLayout>

    <FieldLayout description="Current scope Form Values">
      <div class="mt-2">Valores actuales en el formulario:</div>
      <div class="m-2">
        <CurrentFormData />
      </div>
    </FieldLayout>
  </div>
</template>
