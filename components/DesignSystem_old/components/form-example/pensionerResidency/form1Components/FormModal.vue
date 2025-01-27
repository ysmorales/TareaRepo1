<script lang="ts" setup>
import DsInput from "../../../form/input/DsInput.vue";
// import type { IUserProfile } from "../../../form-example/pensionerResidency/interface";
import { ref } from "vue";
import type{ IUserProfile } from "../interface";

const props = defineProps({
  dataForm: {
    type: Object as () => IUserProfile,
  },
});

const name = ref(props.dataForm?.name);
const ruc = ref(props.dataForm?.ruc);
const birthday = ref(props.dataForm?.birthday);
const phoneNumber = ref(props.dataForm?.phoneNumber);
const email = ref(props.dataForm?.email);
</script>

<template>
  <DsInput v-model="name" label="Nombre"></DsInput>
  <DsInput v-model="ruc" label="Run"></DsInput>
  <DsInput v-model="birthday" label="Fecha de nacimiento"></DsInput>
  <DsInput v-model="phoneNumber" label="Número de teléfono"></DsInput>
  <DsInput v-model="email" label="Correo"></DsInput>
</template>

<style scoped></style>
