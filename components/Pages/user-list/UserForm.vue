<script lang="ts" setup>
import useApplications from '~/api-services/applications';
import {getErrorMessage} from "~/components/DesignSystem/utils/translateErrorMessage";
import {DsButton, DsInput, DsSelect} from "~/components/DesignSystem";
import {email, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {companyOption, rolOption} from "~/components/Pages/user-list/selcectOptions";

const emit = defineEmits(["cancel", "success"]);

const form = reactive({
    name: "",
    email: "",
    rol: "",
    empresa: "",

});

const formRules = reactive({
    name: {required},
    email: {required, email},
    rol: {required},
    empresa: {required},
});

const validateForm = useVuelidate(formRules, form);
const loading = ref(false)
const backendError = ref<string | null>(null)
const applicationsService = useApplications();

async function handleSubmit() {
    validateForm.value.$touch();
    if (!validateForm.value.$invalid) {
        loading.value = true;
        backendError.value = null;
        try {
            const response = await applicationsService.procedure.createOne("/api/users", {
                name: form.name,
                email: form.email,
                password: "password123",
                password_confirmation: "password123",
                role: "visual",
                empresa: "Chile Atiende"
            });
            if (response.codigoRetorno == 201) {
                // await authStore.login(response.user, response.access_token, response.expires_at);
                emit('success')
                // internalStatus.value = "success";
                // $emit('cancel');
            }
            if (response.codigoRetorno == 404) {
                backendError.value = "El correo electrónico no existe en el sistema";
            }
            if (response.codigoRetorno == 401) {
                backendError.value = "La contraseña es incorrecta";
            }
        } catch (e) {
            backendError.value = "Error al comunicarse con el servidor.";
            console.log('Viendo error en consola.', e);
        }

        loading.value = false;
    }
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <DsInput v-model="form.name" :error="getErrorMessage(validateForm?.name.$errors[0])" label="Nombre Completo:"/>
        <DsInput v-model="form.email" :error="getErrorMessage(validateForm?.email.$errors[0])"
                 label="Correo electrónico:"/>
        <DsSelect v-model="form.rol" :error="getErrorMessage(validateForm?.rol.$errors[0])" :option="rolOption"
                  label="Rol:"/>
        <DsSelect v-model="form.empresa" :error="getErrorMessage(validateForm?.empresa.$errors[0])"
                  :option="companyOption" label="Empresa:"/>
        <div class="flex justify-end mt-5 p-2">
            <DsButton class="mr-2" color="secondary" text="Cancelar" type="button" @click="$emit('cancel')"/>
            <DsButton :loading="loading" text="Guardar" type="submit"/>
        </div>
    </form>
</template>
