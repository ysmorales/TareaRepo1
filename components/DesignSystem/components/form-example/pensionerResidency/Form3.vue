<script lang="ts" setup>
import DsAccordion from "../../container/accordion/DsAccordion.vue";
// import DataPanel from "components/DesignSystem/components/container/data-panel/DsDataPanel.vue";
// import sampleData from "./form3-data";
// import type { ITotalData } from "../../../components/form-example/pensionerResidency/interface";
// import {
//   proxyConfigData,
//   solicitorConfigData,
//   warrantConfigData,
// } from "../../../components/form-example/pensionerResidency/form3Component/library";
import DsTypography from "../../../components/basic/typography/DsTypography.vue";
import { reactive } from "vue";
import type{ ITotalData } from "./interface";
import {
  proxyConfigData,
  solicitorConfigData,
  warrantConfigData,
} from "./form3Component/library";

defineProps({
  modelValue: {
    type: Object as () => ITotalData,
  },
});

const emit = defineEmits(["update:modelValue"]);

// const model = computed({
//   get() {
//     return props.modelValue;
//   },
//
//   set(value) {
//     emit("update:modelValue", value);
//   },
// });

// const data = reactive(sampleData);

const solicitorConfig = reactive(solicitorConfigData);

const proxyConfig = reactive(proxyConfigData);

const warrantConfig = reactive(warrantConfigData);
</script>

<template>
  <div class="text-left w-full">
    <header class="my-4">
      <DsTypography variant="h2"
        >Confirma la información de tu solicitud
      </DsTypography>
      <DsTypography variant="p"
        >Estás apunto de enviar tu solicitud. Por favor verifica la exactitud de
        tus datos. Si todo está bien, dale al botón “confirmar”.
      </DsTypography>
    </header>
  </div>

  <div class="w-full mt-5">
    <DsAccordion class="mt-2 w-full" title="Información del solicitante">
      <DataPanel :config="solicitorConfig" :model="modelValue?.solicitor" />
    </DsAccordion>

    <DsAccordion class="mt-2 w-full" title="Información del apoderado">
      <DataPanel :config="proxyConfig" :model="modelValue?.proxy" />
    </DsAccordion>

    <DsAccordion class="mt-2 w-full" title="Información de poder/mandato">
      <DataPanel :config="warrantConfig" :model="modelValue?.warrant" />
    </DsAccordion>
  </div>
</template>
