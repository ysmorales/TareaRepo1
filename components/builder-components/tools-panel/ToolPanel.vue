<script lang="ts" setup>
import {ref} from 'vue';
import {DsIcon} from "~/components/DesignSystem";

const activeButton = ref('');

const setActiveButton = (buttonName: string) => {
    activeButton.value = buttonName;
};
</script>

<template>
    <div class="flex w-full items-center justify-between bg-gray-200 p-2 shadow-md">
        <button
            class="p-1 rounded-md hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
            <DsIcon name="arrow-left" title="Regresar"/>
        </button>

        <div class="flex space-x-1">
            <button
                :class="['p-1 rounded-md hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out', {'bg-blue-500 text-white':activeButton === 'save'}]"
                @click="setActiveButton('save')"
            >
                <DsIcon name="save" title="Guardar"/>
            </button>
            <button
                :class="['p-1 rounded-md hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out', {'bg-blue-500 text-white':activeButton === 'code'}]"
                @click="setActiveButton('code')"
            >
                <DsIcon name="code" title="Ver código"/>
            </button>
            <button
                :class="['p-1 rounded-md hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out',{'bg-blue-500 text-white':activeButton === 'edit'}]"
                @click="setActiveButton('edit')"
            >
                <DsIcon name="edit" title="Modo edición"/>
            </button>
            <button
                :class="['p-1 rounded-md hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out',{'bg-blue-500 text-white':activeButton === 'preview'}]"
                @click="setActiveButton('preview')"
            >
                <DsIcon name="eye" title="Vista previa"/>
            </button>
        </div>
    </div>
</template>