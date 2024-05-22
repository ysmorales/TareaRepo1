<script lang="ts" setup>
import {DsIcon} from "~/components/DesignSystem";

defineProps({
    index: Number,
});
const emit = defineEmits(["removeItem", "validate"])

// const showIcon = ref(false);

function removeItem(index: number) {
    emit("removeItem", index)
}

function validate(index: number) {
    emit("validate", index)
}


</script>

<template>

    <div
        class="flex justify-end w-full"
    >
        <DsIcon color="primary" name="code" title="Validación" @click="validate(index!)"/>
        <DsIcon color="danger" name="trash" title="Remover" @click="removeItem(index!)"/>
    </div>
</template>

