<script setup lang="ts">
import {DsButton, DsInput} from "~/components/DesignSystem";
import {required, email} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {getErrorMessage} from "~/components/DesignSystem/utils/translateErrorMessage";
import useApplications from '~/api-services/applications';

const form = reactive({
    email: "",
});

const formRules = reactive({
    email: {required, email},
});

const validateForm = useVuelidate(formRules, form);
const loading = ref(false);
const backendError = ref<string | null>(null);
const applicationsService = useApplications();
function handleInput() {
    backendError.value = null;
}

const handleSubmit = async () => {
    validateForm.value.$touch();
    if (!validateForm.value.$invalid) {
        loading.value = true;
        backendError.value = null;
        try {
            const response=await applicationsService.procedure.createOne("/api/password/email", {
                email: form.email,
            });
            if(response.codigoRetorno==400){
                backendError.value = "No podemos encontrar un usuario con esa dirección de correo electrónico";
            }
            // Add your API call here
        } catch (e) {
            backendError.value = "Error al comunicarse con el servidor.";
            console.log('Viendo error en consola.', e);
        }
        loading.value = false;
    }
};
</script>

<template>
    <form class="mb-5" @submit.prevent="handleSubmit">
        <div class="mb-4">
            <DsInput @input="handleInput" v-model="form.email" label="Correo electrónico" :error="getErrorMessage(validateForm?.email.$errors[0])"/>
        </div>
        <div v-if="backendError" class="text-red-500 mb-4">{{ backendError }}</div>
        <DsButton :loading="loading" type="submit" class="w-full"><span class="text-center w-full">Enviar</span></DsButton>
    </form>
</template>