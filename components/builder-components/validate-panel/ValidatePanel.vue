<script lang="ts" setup>
import {useBuilderStore} from "~/stores/builderStore";
import {toRefs} from "vue";

const store = useBuilderStore()
const {currentEditItem} = toRefs(store)
const radioGroupValue = ref('')

</script>

<template>
    <div class="p-4 bg-white shadow rounded-md">
        <div class="flex justify-between">
            Nombre:
            <span class="text-blue-500">{{
                    (currentEditItem?.name ?? '') + ' ' + (currentEditItem?.id ?? '')
                }}</span>

        </div>
        <div class="mt-5">
            <div class="flex items-center justify-between">
                <label class="text-gray-700 font-medium" for="required">Requerido</label>
                <input class="form-radio h-5 w-5 text-blue-500" type="checkbox">
            </div>
        </div>
        <div class="mt-2">
            <div class="flex items-center justify-between">
                <label class="text-gray-700 font-medium" for="run">RUN</label>
                <input id="run" v-model="radioGroupValue" class="form-radio h-5 w-5 text-blue-500" type="radio"
                       value="run">
            </div>
        </div>
        <div class="mt-2">
            <div class="flex items-center justify-between">
                <label class="text-gray-700 font-medium" for="email">Email</label>
                <input id="email" v-model="radioGroupValue" class="form-radio h-5 w-5 text-blue-500" type="radio"
                       value="email">
            </div>
        </div>
        <div class="mt-2">
            <div class="flex items-center justify-between">
                <label class="text-gray-700 font-medium" for="text">Solo texto</label>
                <input id="text" v-model="radioGroupValue" class="form-radio h-5 w-5 text-blue-500" type="radio"
                       value="text">
            </div>
        </div>
        <div class="mt-2">
            <div class="flex items-center justify-between">
                <label class="text-gray-700 font-medium" for="numbers">Solo números</label>
                <input id="numbers" v-model="radioGroupValue" class="form-radio h-5 w-5 text-blue-500" type="radio"
                       value="numbers">
            </div>
        </div>
    </div>
</template>