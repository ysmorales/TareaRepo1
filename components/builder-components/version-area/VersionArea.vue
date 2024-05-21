<script lang="ts" setup>

import {DsTypography} from "~/components/DesignSystem";

defineProps({
    versionData: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="min-w-[365px] border border-gray-200 p-2 min-h-[75vh] overflow-auto">
        <DsTypography variant="h1">Historial de versiones</DsTypography>
        <div class="space-y-4">
            <div class="bg-gray-200 border border-gray-300 shadow-sm p-4 rounded-md">
                <h2 class="text-gray-800 font-semibold">Versión 1.0.0</h2>
                <p class="text-gray-700">Esta es la descripción de la versión 1.0.0.</p>
                <p class="text-gray-600">Fecha: '2024-05-11'</p>
            </div>
            <div class="bg-gray-200 border border-gray-300 shadow-sm p-4 rounded-md">
                <h2 class="text-gray-800 font-semibold">Versión 0.9.0</h2>
                <p class="text-gray-700">Esta es la descripción de la versión 0.9.0.</p>
                <p class="text-gray-600">Fecha: '2024-05-10'</p>
            </div>
            <div class="bg-gray-200 border border-gray-300 shadow-sm p-4 rounded-md">
                <h2 class="text-gray-800 font-semibold">Versión 0.8.1</h2>
                <p class="text-gray-700">Esta es la descripción de la versión 0.8.1.</p>
                <p class="text-gray-600">Fecha: '2024-05-01'</p>
            </div>
        </div>
    </div>
</template>

