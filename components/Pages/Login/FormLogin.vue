<script lang="ts" setup>
import {DsButton, DsInput, DsLink, DsTypography} from "~/components/DesignSystem";
import {required,email} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";


const form = reactive({
    email: "",
    password: "",
});

const formRules = reactive({
    email: {required,email},
    password: {required},
});
const validateForm = useVuelidate(formRules, form);

const handleSubmit = () => {
    if (!validateForm.value.$invalid) {
        loading.value = true;
        try {
            console.log("Sending to back")
            // const response =
            //     $props.mode !== FormMode.ADD
            //         ? await service($props.config).users.update(`/user`, {
            //             role: form.roles,
            //             run: form.run,
            //             regional_direction_id: form.regionalAddress,
            //         })
            //         : await service($props.config).users.createOne("/user", {
            //             run: form.run,
            //             role: form.roles,
            //             regional_direction_id: form.regionalAddress,
            //         });
            //
            // if (response.codigoRetorno == 200 || response.codigoRetorno == 201) {
            //     internalStatus.value = "success";
            //     // $emit('cancel');
            // }
        } catch (e) {
            handleError(e);
        }

        loading.value = false;
    }else{
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
                <DsInput v-model="form.email" label="Correo electrónico"/>
            </div>
            <div class="mb-6">
                <div class="mb-4">
                    <DsInput v-model="form.password" label="Contraseña"/>
                </div>
            </div>
            <DsButton type="submit" class="w-full"><span class="text-center w-full">Ingresar</span></DsButton>
        </form>
        <DsLink @click="handleClickLink">Olvidé mi contraseña</DsLink>
    </div>
</template>
