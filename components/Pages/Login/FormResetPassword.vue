<script lang="ts" setup>
import {DsButton, DsInput, DsTypography} from "~/components/DesignSystem";
import {required, minLength, helpers} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {getErrorMessage} from "~/components/DesignSystem/utils/translateErrorMessage";
import useApplications from '~/api-services/applications';
import { useRoute } from 'vue-router';

const route = useRoute();
const token = route.query.token as string;
const email = route.query.email as string;

const form = reactive({
    newPassword: "",
    confirmPassword: "",
});

const sameAsNewPassword = helpers.withMessage(
    'Las contraseñas no coinciden',
    (value: string) => value === form.newPassword
);

const formRules = reactive({
    newPassword: {required, minLength: minLength(8)},
    confirmPassword: {required, sameAsNewPassword},
});
const validateForm = useVuelidate(formRules, form);
const loading = ref(false);
const backendError = ref<string | null>(null);
const applicationsService = useApplications();

const handleSubmit = async () => {
    validateForm.value.$touch();
    if (!validateForm.value.$invalid) {
        loading.value = true;
        backendError.value = null;
        try {
            const response = await applicationsService.procedure.createOne("/api/password/reset", {
                token: token,
                email: email,
                password: form.newPassword,
                password_confirmation: form.confirmPassword,
            });
            if (response.codigoRetorno == 200) {
                navigateTo('/login');
            }
        } catch (e) {
            backendError.value = "Error al comunicarse con el servidor.";
            console.log('Viendo error en consola.',e);
        }

        loading.value = false;
    }
};

</script>

<template>
    <div class="max-w-md mt-10 p-6 bg-white">
        <DsTypography variant="h2">Recuperar Contraseña</DsTypography>
        <DsTypography>Para recuperar su contraseña, por favor ingrese la nueva contraseña y confírmela.</DsTypography>
        <form class="mb-5" @submit.prevent="handleSubmit">
            <div class="mb-4">
                <DsInput type="password" v-model="form.newPassword" label="Nueva Contraseña" :error="getErrorMessage(validateForm?.newPassword.$errors[0])"/>
            </div>
            <div class="mb-6">
                <DsInput type="password" v-model="form.confirmPassword" label="Confirmar Nueva Contraseña" :error="getErrorMessage(validateForm?.confirmPassword.$errors[0])"/>
            </div>
            <div v-if="backendError" class="text-red-500 mb-4">{{ backendError }}</div>
            <DsButton :loading="loading" type="submit" class="w-full"><span class="text-center w-full">Cambiar Contraseña</span></DsButton>
        </form>
    </div>
</template>