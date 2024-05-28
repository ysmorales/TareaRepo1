<script lang="ts" setup>
import {useBuilderStore} from "~/stores/builderStore";
import {toRefs} from "vue";
import BuilderGroupRadio from "~/components/builder-components/validate-panel/components/BuilderGroupRadio.vue";

const store = useBuilderStore()
const {currentEditItem} = toRefs(store)
const radioGroupValue = ref('')

const isDsInput = computed(() => currentEditItem?.value?.name?.includes('DsInput'))

</script>

<template>
    {{ currentEditItem }}
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
                <input v-model="currentEditItem.validation.required" class="form-radio h-5 w-5 text-blue-500"
                       type="checkbox"/>
            </div>
        </div>
        <div v-if="isDsInput">
            <BuilderGroupRadio id="run" v-model="currentEditItem.validation.custom" label="RUN" value="run"/>
            <BuilderGroupRadio id="email" v-model="currentEditItem.validation.custom" label="Email" value="email"/>
            <BuilderGroupRadio id="text" v-model="currentEditItem.validation.custom" label="Solo texto" value="text"/>
            <BuilderGroupRadio id="number" v-model="currentEditItem.validation.custom" label="Solo números"
                               value="number"/>
        </div>
    </div>
</template>