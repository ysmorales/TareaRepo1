<script setup lang="ts">

import {DsButton, DsInput, DsTypography} from "~/components/DesignSystem";
import FormLogin from "~/components/Pages/Login/FormLogin.vue";
definePageMeta({
    layout: false,
});

const email = ref('');

const handleSubmit = () => {
    console.log('Recovery Email:', email.value);
};
</script>

<template>
    <NuxtLayout name="auth-layout">
        <div class="max-w-md mt-10 p-6 bg-white">
            <DsTypography variant="h2">Recuperación de correo</DsTypography>
            <DsTypography>Ingrese su correo electrónico para recuperar su cuenta.</DsTypography>
            <form class="mb-5" @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <DsInput v-model="email" label="Correo electrónico" />
                </div>
                <DsButton type="submit" class="w-full"><span class="text-center w-full">Enviar</span></DsButton>
            </form>
        </div>
    </NuxtLayout>

</template>
