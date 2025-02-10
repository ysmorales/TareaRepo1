<script lang="ts" setup>
import {DsButton, DsInput, DsLink, DsTypography} from "~/components/DesignSystem";
import {required, email} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {getErrorMessage} from "~/components/DesignSystem/utils/translateErrorMessage";
import useApplications from '~/api-services/applications';
import { useAuthStore } from '~/stores/auth';

const form = reactive({
    email: "",
    password: "",
});

const formRules = reactive({
    email: {required, email},
    password: {required},
});
const validateForm = useVuelidate(formRules, form);
const loading = ref(false);
const backendError = ref<string | null>(null);
const applicationsService = useApplications();
const authStore = useAuthStore();

const handleSubmit = async () => {
    validateForm.value.$touch();
    if (!validateForm.value.$invalid) {
        loading.value = true;
        backendError.value = null;
        try {
            console.log("Sending to back");
            const response = await applicationsService.procedure.createOne("/api/login", {
                email: form.email,
                password: form.password,
            });
            if (response.codigoRetorno == 200) {
                await authStore.login(response.user, response.access_token, response.expires_at);
                navigateTo('/');
                // internalStatus.value = "success";
                // $emit('cancel');
            }
            if(response.codigoRetorno==404){
                backendError.value = "El correo electrónico no existe en el sistema";
            }
            if(response.codigoRetorno==401){
                backendError.value = "La contraseña es incorrecta";
            }
        } catch (e) {
            backendError.value = "Error al comunicarse con el servidor.";
            console.log('Viendo error en consola.',e);
        }

        loading.value = false;
    }
};

function handleClickLink() {
    navigateTo('/login/password-recovery');
}
</script>

<template>
    <div class="max-w-md mt-10 p-6 bg-white">
        <DsTypography variant="h2">Inicio de sesión</DsTypography>
        <DsTypography>Para entrar al creador por favor ingrese sus credenciales de inicio.</DsTypography>
        <form class="mb-5" @submit.prevent="handleSubmit">
            <div class="mb-4">
                <DsInput v-model="form.email" label="Correo electrónico" :error="getErrorMessage(validateForm?.email.$errors[0])"/>
            </div>
            <div class="mb-6">
                <div class="mb-4">
                    <DsInput v-model="form.password" label="Contraseña" :error="getErrorMessage(validateForm?.password.$errors[0])"/>
                </div>
            </div>
            <div v-if="backendError" class="text-red-500 mb-4">{{ backendError }}</div>
            <DsButton :loading="loading" type="submit" class="w-full"><span class="text-center w-full">Ingresar</span></DsButton>
        </form>
        <DsLink @click="handleClickLink">Olvidé mi contraseña</DsLink>
    </div>
</template>