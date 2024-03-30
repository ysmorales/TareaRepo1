<script lang="ts" setup>
import DsTypography from "../../../basic/typography/DsTypography.vue";
import DsAlert from "../../../basic/alert/DsAlert.vue";
</script>

<template>
  <article class="my-5">
    <DsTypography class="mb-4" variant="p"
      >Es muy importante que el agendamiento de visitas se puede solicitar
      únicamente bajo <strong>condiciones excepcionales</strong> que son las
      siguientes:
    </DsTypography>
    <ul class="mb-5">
      <li class="mb-2">
        <span
          class="h-5 w-5 mr-2 inline-flex justify-center items-center m-0 rounded-full p-3 bg-yellow-500"
          >1</span
        >
        Pensionados en hospitales o cárceles
      </li>
      <li class="mb-2">
        <span
          class="h-5 w-5 mr-2 inline-flex justify-center items-center m-0 rounded-full p-3 bg-yellow-500"
          >2</span
        >
        Pensionados con discapacidad mental
      </li>
      <li class="mb-2">
        <span
          class="h-5 w-5 mr-2 inline-flex justify-center items-center m-0 rounded-full p-3 bg-yellow-500"
          >3</span
        >

        Pensionados con enfermedades graves
      </li>
      <li class="mb-2">
        <span
          class="h-5 w-5 mr-2 inline-flex justify-center items-center m-0 rounded-full p-3 bg-yellow-500"
          >4</span
        >
        Pensionados en hospitales psiquiatricos
      </li>
      <li class="mb-2">
        <span
          class="h-5 w-5 mr-2 inline-flex justify-center items-center m-0 rounded-full p-3 bg-yellow-500"
          >5</span
        >
        Pensionados en casas de reposo
      </li>
      <li class="mb-2">
        <span
          class="h-5 w-5 mr-2 inline-flex justify-center items-center m-0 rounded-full p-3 bg-yellow-500"
          >6</span
        >
        Orfandad del ex SSS
      </li>
    </ul>

    <DsAlert>
      En el momento de la visita debe tener físicamente la cédula de identidad
      del apoderado y la cédula de identidad del pensionado vigentes.
    </DsAlert>
  </article>
</template>

<style scoped></style>
