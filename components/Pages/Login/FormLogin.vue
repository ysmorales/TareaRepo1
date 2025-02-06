<script lang="ts" setup>
import { ref } from 'vue';
import {DsTypography} from "~/components/DesignSystem";

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
        <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
                <input
                    v-model="email"
                    type="email"
                    id="email"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
                <input
                    v-model="password"
                    type="password"
                    id="password"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Iniciar sesión
            </button>
        </form>
    </div>
</template>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>