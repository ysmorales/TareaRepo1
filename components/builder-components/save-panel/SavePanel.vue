<script lang="ts" setup>

import {DsIcon, DsInput, DsTextArea} from "~/components/DesignSystem";
</script>

<template>
    <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
            <DsInput label="Nombre del prototipo" placeholder="Introduce el nombre del prototipo"/>
        </div>
        <div class="flex flex-col space-y-2">
            <DsInput label="Versión" placeholder="Introduce la versión"/>
        </div>
        <div class="flex flex-col space-y-2">
            <DsTextArea label="Descripción" placeholder="Introduce la descripción"/>
        </div>
        <button class="flex items-center justify-center bg-blue-500 text-white p-2  rounded-md hover:bg-blue-600">
            <DsIcon name="save"/>
            Guardar prototipo
        </button>
    </div>
</template>

