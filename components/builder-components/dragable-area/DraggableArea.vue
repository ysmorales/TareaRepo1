<script lang="ts" setup>
import {DsIcon, DsInput, DsTextArea, DsButton} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";

const store = useCounterStore()
const {builderItems, addItemToForm} = toRefs(store)

const components: { [key: string]: any } = {
    DsInput,
    DsTextArea,
    DsButton
}

const drop = () => {
    addItemToForm.value()
}
</script>

<template>
    <div
        class="w-full h-full flex  border border-gray-300 shadow-md rounded-md p-5  flex-col justify-center items-center"
        @drop="drop"
        @dragover.prevent
    >
        <div v-if="builderItems.length==0" class="flex flex-col justify-center items-center">
            <DsIcon class="mb-4" name="hand-pointer" size="medium"/>
            <p class="mb-2">Drag elements here</p>
            <p>Grab an element from the left and drop it here</p>
        </div>
        <component
            :is="components[item.name]"
            v-for="(item, index) in builderItems"
            :key="index"
            class="mt-4"
            draggable="true"
        />
    </div>
</template>