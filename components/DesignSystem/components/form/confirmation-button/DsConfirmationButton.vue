<script lang="ts" setup>

import {DsButton} from "~/components/DesignSystem";

const emit = defineEmits(["cancel", "ok"])
</script>

<template>
    <div class="flex justify-end space-x-2 m-2 w-full">
        <DsButton @click="emit('cancel')">Cancelar</DsButton>
        <DsButton @click="emit('ok')">Aceptar</DsButton>
    </div>
</template>

