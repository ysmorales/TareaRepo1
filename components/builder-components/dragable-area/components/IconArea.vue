<script lang="ts" setup>
import {DsIcon} from "~/components/DesignSystem";
import type {IItemBuilder} from "~/interfaces/interfaces";

const props = defineProps({
    index: Number,
    item: Object as () => IItemBuilder
});
const emit = defineEmits(["removeItem", "validate"])

// const showIcon = ref(false);

function removeItem(index: number) {
    emit("removeItem", index)
}

function validate(index: number) {
    emit("validate", index)
}

const isDsConfirmationButton = props.item?.name?.includes("DsConfirmationButton");
</script>

<template>

    <div
        class="flex justify-end w-full"
    >
        <DsIcon v-if="!isDsConfirmationButton" color="primary" name="code" title="Validación"
                @click="validate(index!)"/>
        <DsIcon color="danger" name="trash" title="Remover" @click="removeItem(index!)"/>
    </div>
</template>

