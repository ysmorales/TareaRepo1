<script lang="ts" setup>
import {ref} from 'vue';
import {DsIcon} from "~/components/DesignSystem";

const activeButton = ref('edit');

const emit = defineEmits([
    'edit', 'view', 'code', 'save', 'clear'
])

const setActiveButton = (buttonName: 'edit' | 'view' | 'code' | 'save' | 'clear') => {
    if (buttonName !== 'clear' && buttonName !== 'save') {
        activeButton.value = buttonName;
    }

    emit(buttonName);
};
</script>

<template>
    <div class="flex w-full items-center justify-between bg-gray-200 p-2 shadow-md ">
        <button
            class="p-1 rounded-md hover:bg-gray-300 hover:text-black active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            @click="navigateTo('/')"
        >
            <DsIcon name="arrow-left" title="Regresar"/>
        </button>
        <div class="flex space-x-1">
            <button
                :class="['p-1 rounded-md hover:bg-gray-300 hover:text-black active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out',{'bg-blue-500 text-white':activeButton === 'edit'}]"
                @click="setActiveButton('edit')"
            >
                <DsIcon name="edit" title="Modo edición"/>
            </button>
            <button
                :class="['p-1 rounded-md  hover:bg-gray-300 hover:text-black  active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out',{'bg-blue-500 text-white':activeButton === 'view'}]"
                @click="setActiveButton('view')"
            >
                <DsIcon name="eye" title="Vista previa"/>
            </button>
            <button
                :class="['p-1 rounded-md hover:bg-gray-300 hover:text-black active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out', {'bg-blue-500 text-white':activeButton === 'code'}]"
                @click="setActiveButton('code')"
            >
                <DsIcon name="code" title="Ver código"/>
            </button>
        </div>

        <div class="flex space-x-1">
            <button
                :class="['p-1 rounded-md hover:bg-gray-300 hover:text-black active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out']"
                @click="setActiveButton('save')"
            >
                <DsIcon name="save" title="Guardar"/>
            </button>

            <button
                :class="['p-1 rounded-md  hover:bg-gray-300 hover:text-black  active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out']"
                @click="setActiveButton('clear')"
            >
                <DsIcon color="danger" name="trash" title="Limpiar todo el formulario"/>
            </button>
        </div>
    </div>
</template>