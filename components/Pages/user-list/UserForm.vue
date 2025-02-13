<script lang="ts" setup>

import {getErrorMessage} from "~/components/DesignSystem/utils/translateErrorMessage";
import {DsInput} from "~/components/DesignSystem";
import {email, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

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
</script>

<template>
    <form>
        <DsInput v-model="form.name" :error="getErrorMessage(validateForm?.name.$errors[0])" label="Nombre Completo:"/>
        <DsInput v-model="form.email" :error="getErrorMessage(validateForm?.email.$errors[0])"
                 label="Correo electrónico:"/>
        <DsInput v-model="form.rol" :error="getErrorMessage(validateForm?.rol.$errors[0])" label="Rol:"/>
        <DsInput v-model="form.empresa" :error="getErrorMessage(validateForm?.empresa.$errors[0])"
                 label="Empresa:"/>
    </form>
</template>
