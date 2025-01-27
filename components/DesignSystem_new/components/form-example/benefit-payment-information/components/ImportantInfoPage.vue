<script lang="ts" setup>
// import DsAlert from "../../../components/basic/alert/DsAlert.vue";
// import DsTypography from "../../../components/basic/typography/DsTypography.vue";
// import DsButton from "../../../components/basic/button/DsButton.vue";
import { DsTypography } from "../../../basic/typography";
import DsButton from "../../../basic/button/DsButton.vue";
import DsAlert from "../../../basic/alert/DsAlert.vue";
</script>

<template>
  <DsAlert class="mt-5" title="Información importante sobre su forma de pago">
    <div class="my-4">
      <DsTypography variant="h4">Sucursal Los Héroes.</DsTypography>
      <DsTypography variant="p">
        Este mes su beneficio será pagado en la forma presencial habitual. Sin
        embargo, si recibió la Tarjeta de Prepago de Los Héroes durante abril o
        marzo, a partir de mayo podrá retirar su pago directamente en cualquier
        cajero automático, esto como medida de protección ante la emergencia
        sanitaria.
      </DsTypography>
    </div>
    <div class="my-4">
      <DsTypography variant="h4">Depósito.</DsTypography>
      <DsTypography variant="p">
        Recibirá su pago mediante depósito en una cuenta bancaria. Si hasta
        marzo se pagaba en forma presencial, realizaremos el depósito en su
        CuentaRUT de BancoEstado, como medida de protección ante la emergencia
        sanitaria.
      </DsTypography>
    </div>
  </DsAlert>
  <section class="flex flex-col justify-center items-center my-4">
    <div class="flex justify-centers">
      <DsTypography class="my-5 text-center" color="primary" variant="h2"
        >Suscríbete ahora al pago bancario
      </DsTypography>
    </div>
    <div class="flex justify-center">
      <DsButton>Comenzar</DsButton>
    </div>
  </section>
</template>
