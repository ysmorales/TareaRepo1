<script lang="ts" setup>
import {ref, reactive} from 'vue'
import {DsIcon} from "~/components/DesignSystem";

defineProps({
    items: {
        type: Array,
        default: () => []
    }

})

let draggedItem: any = reactive({})

const dragStart = (event: DragEvent, item: string) => {
    draggedItem = item
}

const drop = (event: DragEvent) => {
    alert('dropped')
    // const index = items.value.indexOf(draggedItem)
    // if (index > -1) {
    //     items.value.splice(index, 1)
    // }
    // items.value.push(draggedItem)
}
</script>

<template>
    <div
        class="w-full h-full flex  border border-gray-300 shadow-md rounded-md p-5  flex-col justify-center items-center"
        @drop="drop($event)"
        @dragover.prevent
    >
        <div v-if="items.length==0" class="flex flex-col justify-center items-center">
            <DsIcon class="mb-4" name="hand-pointer" size="medium"/>
            <p class="mb-2">Drag elements here</p>
            <p>Grab an element from the left and drop it here</p>
        </div>
        <div
            v-for="(item, index) in items"
            :key="index"
            class="mt-4"
            draggable="true"
            @dragstart="dragStart($event, item)"
        >
            {{ item }}
        </div>
    </div>
</template>


<style scoped>

</style>