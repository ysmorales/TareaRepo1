<script lang="ts" setup>
import {DsButton, DsInput, DsLink, DsTypography} from "~/components/DesignSystem";
import {required,email} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {getErrorMessage} from "~/components/DesignSystem/utils/translateErrorMessage";
import service from "~/api-services/applications";


const form = reactive({
    email: "",
    password: "",
});

const formRules = reactive({
    email: {required,email},
    password: {required},
});
const validateForm = useVuelidate(formRules, form);
const loading = ref(false);

const handleSubmit = async () => {
    validateForm.value.$touch();
    if (!validateForm.value.$invalid) {
        loading.value = true;
        try {
            console.log("Sending to back")
            const response = await service.procedure.createOne("/user", {
                run: 2,
                role: 2,
                regional_direction_id: 2,
            });
            debugger

            if (response.codigoRetorno == 200 || response.codigoRetorno == 201) {
                console.log("Success")
                // internalStatus.value = "success";
                // $emit('cancel');
            }
        } catch (e) {
            console.log(e);
        }

        loading.value = false;
    } else {
        console.log("Form is invalid")
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
            <DsButton type="submit" class="w-full"><span class="text-center w-full">Ingresar</span></DsButton>
        </form>
        <DsLink @click="handleClickLink">Olvidé mi contraseña</DsLink>
    </div>
</template>
