<script lang="ts" setup>

import {DsLink} from "~/components/DesignSystem";


definePageMeta({
    layout: false
})

</script>

<template>
    <!--    <div class="flex flex-col justify-center items-center container ">-->
    <!--        <div class="w-[500px]">-->
    <!--            <DsImages class="mb-5" src="./images/back-office/creador-logotipo.jpg"/>-->
    <!--            <DsTypography class="mb-5" variant="h2">Bienvenid@ nuevamente :)</DsTypography>-->
    <!--            <DsInput label="Usuario" size="full" type="text"/>-->
    <!--            <DsInput label="Contraseña" size="full" type="text"/>-->
    <!--            <div class="flex mt-5 justify-between items-center">-->
    <!--                <DsLink href="#">¿Olvidó su usuario / contraseña?</DsLink>-->
    <!--                <DsButton>Ingresar</DsButton>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <NuxtLayout name="auth-layout">
        <div>
            <div class="w-full flex">
                <DsLink
                    class="flex-1 bg-gray-500 hover:bg-blue-700 hover:text-white no-underline text-white font-bold text-center py-2 rounded-l"
                    href="http://127.0.0.1:8000/auth/login">
                    Ingresar con Google
                </DsLink>
                <DsLink
                    class="flex-1 bg-gray-400 hover:bg-blue-700 hover:text-white no-underline text-white font-bold text-center py-2 rounded-r">
                    Ingresar con Clave Única
                </DsLink>
            </div>
        </div>
    </NuxtLayout>
</template>

