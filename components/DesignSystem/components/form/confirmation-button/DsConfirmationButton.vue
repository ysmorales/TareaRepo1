<script lang="ts" setup>

import {DsButton} from "~/components/DesignSystem";
import type {IButtonColor} from "~/components/DesignSystem/components/basic/button/interfaces";

defineProps({
    colorCancel: {
        type: String as () => IButtonColor,
        default: 'tertiary'
    },
    colorOk: {
        type: String as () => IButtonColor,
        default: 'primary'
    },
    textCancel: {
        type: String,
        default: 'Cancelar'
    },
    textOk: {
        type: String,
        default: 'Aceptar'
    }


})

const emit = defineEmits(["cancel", "ok"])

</script>

<template>
    <div class="flex justify-end space-x-2 w-full">
        <DsButton :color="colorCancel" type="button" @click="emit('cancel')">{{ textCancel }}</DsButton>
        <DsButton :color="colorOk" :text="textOk" type="submit" @click="emit('ok')">{{ textOk }}</DsButton>
    </div>
</template>

