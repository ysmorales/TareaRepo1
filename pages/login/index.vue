<script lang="ts" setup>
import FormLogin from "~/components/Pages/Login/FormLogin.vue";

definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="auth-layout">
    <FormLogin />
  </NuxtLayout>
</template>
