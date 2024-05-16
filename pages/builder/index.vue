<script lang="ts" setup>

import {DsButton} from "~/components/DesignSystem";
import DraggableArea from "~/components/builder-components/dragable-area/DraggableArea.vue";
</script>

<template>
    <div class="flex w-full">
        <div class="flex flex-col space-y-2 w-full p-2">
            <h1>Builder</h1>
            <DraggableArea/>
            <div class="flex justify-end">
                <DsButton>Regresar</DsButton>
            </div>
        </div>
        <div class="w-[400px] border border-gray-200 p-2 min-h-[75vh]">
            <h1>Tools</h1>
        </div>

    </div>
</template>

