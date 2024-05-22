<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
import {toRefs} from "vue";

const store = useCounterStore()
const {currentEditItem} = toRefs(store)

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
                <input id="required" class="form-checkbox h-5 w-5 text-blue-500" type="checkbox">
            </div>
        </div>
        <div class="mt-2">
            <div class="flex items-center justify-between">
                <label class="text-gray-700 font-medium" for="required">RUN</label>
                <input id="required" class="form-checkbox h-5 w-5 text-blue-500" type="checkbox">
            </div>
        </div>
        <div class="mt-2">
            <div class="flex items-center justify-between">
                <label class="text-gray-700 font-medium" for="required">Email</label>
                <input id="required" class="form-checkbox h-5 w-5 text-blue-500" type="checkbox">
            </div>
        </div>
        <div class="mt-2">
            <div class="flex items-center justify-between">
                <label class="text-gray-700 font-medium" for="required">Solo texto</label>
                <input id="required" class="form-checkbox h-5 w-5 text-blue-500" type="checkbox">
            </div>
        </div>
        <div class="mt-2">
            <div class="flex items-center justify-between">
                <label class="text-gray-700 font-medium" for="required">Solo números</label>
                <input id="required" class="form-checkbox h-5 w-5 text-blue-500" type="checkbox">
            </div>
        </div>
    </div>
</template>

