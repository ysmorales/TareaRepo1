<script setup lang="ts">

import FormResetPassword from "~/components/Pages/Login/FormResetPassword.vue";

definePageMeta({
    layout: false,
});

</script>

<template>
    <NuxtLayout name="auth-layout">
        <FormResetPassword/>
    </NuxtLayout>
</template>

