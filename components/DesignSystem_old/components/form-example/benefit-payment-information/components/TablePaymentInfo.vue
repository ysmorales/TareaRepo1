<script lang="ts" setup>
// import DsTypography from "../../../components/basic/typography/DsTypography.vue";
// import { dataTable } from "../../../components/form-example/benefit-payment-information/components/mock-data-sarver/data";
// import DsButton from "../../../components/basic/button/DsButton.vue";
// import useFocus from "../../../composables/useFocus";
import { computed, ref } from "vue";
// import useFocus from "../../../../composables/useFocus.ts";
import { dataTable } from "./mock-data-sarver/data";
import DsButton from "../../../basic/button/DsButton.vue";
import { DsTypography } from "../../../basic/typography";

defineProps({
  focus: {
    type: Boolean,
    default: true,
  },
});
const tableExpanded = ref(false);
const borderStyle = computed(() => {
  return tableExpanded ? "" : "border border-gray-300";
});

function handleClick() {
  tableExpanded.value = true;
}

// const { elementRef: inputRef } = useFocus(() => props.focus);
</script>

<template>
  <div class="cont-form-sector mt-5">
    <div class="mb-4">
      <DsTypography variant="h4">
        La información de pago de
        <strong> GUEVARA PEREZ MARIA LUISA</strong>, RUN: 7.592.158-6 es la
        siguiente:
      </DsTypography>
    </div>
    <div class="cont-form-group columns">
      <div class="column">
        <table
          :class="[
            'w-full rounded-md overflow-hidden border border-gray-300',
            borderStyle,
          ]"
        >
          <thead class="bg-white font-bold">
            <tr>
              <th :class="['px-4 py-2 text-left', borderStyle]">
                Fecha de pago
              </th>

              <th :class="['px-4 py-2 text-left', borderStyle]">
                Forma de pago
              </th>

              <th :class="['px-4 py-2 text-left', borderStyle]">Beneficio</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-300">
            <template v-for="el in dataTable">
              <tr>
                <td :class="['px-4 py-4 text-gray-500', borderStyle]">
                  {{ el.paymentDate }}
                </td>
                <td :class="['px-4 py-4 text-gray-500', borderStyle]">
                  {{ el.paymentMethod }}
                </td>
                <td :class="['px-4 py-4 text-gray-500', borderStyle]">
                  {{ el.benefit }}
                </td>
              </tr>
              <template v-if="tableExpanded">
                <tr class="bg-gray">
                  <td
                    :class="[
                      'px-0 py-4 text-gray-500',
                      borderStyle,
                      'bg-[#F5F5F5]',
                    ]"
                    colspan="3"
                  >
                    <h4 class="mb-0">Detalle del beneficio</h4>
                  </td>
                </tr>
                <tr class="bg-gray">
                  <td
                    class="px-0 py-4 text-gray-500 border border-gray-300 bg-[#F5F5F5]"
                    colspan="3"
                  >
                    <strong class="text-[#363636]">Calidad:</strong>
                    BENEFICIARIO
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-0 py-4 text-gray-500 border border-gray-300 bg-[#F5F5F5]"
                    colspan="3"
                  >
                    <strong class="text-[#363636]">Lugar de pago:</strong> BANCO
                    ESTADO - SAN ANTONIO
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-0 py-4 text-gray-500 border border-gray-300 bg-[#F5F5F5]"
                    colspan="3"
                  >
                    <strong class="text-[#363636]">Nombre beneficiario:</strong>
                    SHONFFELDT ROJAS LILIANA
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-0 py-4 text-gray-500 border border-gray-300 bg-[#F5F5F5]"
                    colspan="3"
                  >
                    <strong class="text-[#363636]">Forma de pago:</strong>
                    DEPOSITO EN CUENTAS NACIONALES
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-0 py-4 text-gray-500 border border-gray-300 bg-[#F5F5F5]"
                    colspan="3"
                  >
                    <strong class="text-[#363636]">Run beneficiario:</strong>
                    5.544.417-k
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex cont-form-group cont-btn">
      <DsButton
        v-if="tableExpanded == false"
        class="mt-5"
        color="tertiary"
        @click="handleClick"
        >Más detalles
      </DsButton>
    </div>
  </div>
</template>
