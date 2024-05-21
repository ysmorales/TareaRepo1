<script lang="ts" setup>

import {DsTypography} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";

defineProps({
    versionData: {
        type: Object,
        required: true
    }
})
const store = useCounterStore()
const {changeCurrentDragItem} = toRefs(store)

function dragStart(data: any) {
    changeCurrentDragItem.value(data);
}
</script>

<template>
    <div class="min-w-[365px] border border-gray-200 p-2 min-h-[75vh] overflow-auto text-sm">
        <DsTypography class="text-lg" variant="h1">Historial de versiones</DsTypography>
        <div class="space-y-2">
            <div v-for="version in versionData" :key="version.version"
                 class="bg-gray-200 border border-gray-300 shadow-sm p-2 rounded-md cursor-pointer text-xs"
                 draggable="true" @dragstart="dragStart(version.data)">
                <h2 class="text-gray-800 font-semibold text-sm">Versión {{ version.version }}</h2>
                <p class="text-gray-700">{{ version.description }}</p>
                <p class="text-gray-600">Fecha: '{{ version.date }}'</p>
            </div>
        </div>
    </div>
</template>

