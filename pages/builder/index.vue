<script lang="ts" setup>

import {DsButton} from "~/components/DesignSystem";
import DraggableArea from "~/components/builder-components/dragable-area/DraggableArea.vue";
</script>

<template>
    <div class="flex flex-col space-y-2">
        <h1>Builder</h1>
        <DraggableArea/>
        <div class="flex justify-end">
            <DsButton>Regresar</DsButton>
        </div>
    </div>
</template>

