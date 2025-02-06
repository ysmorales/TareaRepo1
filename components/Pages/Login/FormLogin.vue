<script lang="ts" setup>
import { ref } from 'vue';
import {DsButton, DsInput, DsLink, DsTypography} from "~/components/DesignSystem";

const email = ref('');
const password = ref('');

const handleSubmit = () => {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
};
</script>

<template>
    <div class="max-w-md mt-10 p-6 bg-white">
        <DsTypography variant="h2">Inicio de sesión</DsTypography>
        <DsTypography>Para entrar al creador por favor ingrese sus credenciales de inicio.</DsTypography>
        <form class="mb-5" @submit.prevent="handleSubmit">
            <div class="mb-4">
                <DsInput v-model="email" label="Correo electrónico"/>
            </div>
            <div class="mb-6">
                <div class="mb-4">
                    <DsInput v-model="password" label="Contraseña"/>
                </div>
            </div>
            <DsButton type="submit" class="w-full"><span class="text-center w-full">Ingresar</span></DsButton>
        </form>
        <DsLink>Olvidé mi contraseña</DsLink>
    </div>
</template>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>