<script setup lang="ts">

import {DsButton, DsInput, DsTypography} from "~/components/DesignSystem";
import FormPasswordRecovery from "~/components/Pages/Login/FormPasswordRecovery.vue";
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
           <FormPasswordRecovery/>
        </div>
    </NuxtLayout>

</template>
