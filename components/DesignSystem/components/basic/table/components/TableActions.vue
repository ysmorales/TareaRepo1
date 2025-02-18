<script lang="ts" setup>
import type {ITableColumnData} from "../interface";
import {exampleColumn} from "../exampleColumn";
import DsButton from "../../button/DsButton.vue";

const props = defineProps({
    column: {
        type: Object as () => ITableColumnData,
        default: () => [...exampleColumn],
    },
    row: {
        required: true,
    },
});
const emit = defineEmits(["delete", "edit", "view"]);

function handleClick(type: "edit" | "view" | "delete") {
    emit(type);
}

const actions = {
    view: "Ver",
    edit: "Editar",
    delete: "Eliminar",
};

interface IMap {
    [key: string]: string | undefined | boolean;
}

const foundAction = (keyName: string) =>
    (props.column.actions as unknown as IMap)[keyName];

const getLabel = (key: string, value: string) => {
    const label =
        props.column.actions?.labels &&
        (props.column.actions?.labels as unknown as IMap)[key];
    return label ? label : value;
};
</script>

<template>
    <div v-for="(value, key) in actions" :class="['flex', column.customStyle ? column.customStyle : 'justify-end']">
        <div v-if="foundAction(key)" class="mt-1 mb-1">
            <DsButton
                :key="key"
                class="mr-1 btn-link"
                color="tertiary"
                @click="handleClick(key)"
            >
                {{ getLabel(key, value) }}
            </DsButton>
        </div>
    </div>
</template>

<style scoped></style>