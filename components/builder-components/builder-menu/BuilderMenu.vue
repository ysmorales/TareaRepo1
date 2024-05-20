<script lang="ts" setup>

import {DsIcon} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";
import {DsComponents} from "~/components/builder-components/builder-menu/dsComponents";

const store = useCounterStore()
const {changeCurrentDragItem, generateId} = toRefs(store)

function dragStart(type: string) {
    const component = DsComponents.find(component => component.name === type);
    if (component) {
        changeCurrentDragItem.value({...component, id: generateId.value()});
    }
}
</script>

<template>
    <div class="flex flex-col ">
        <div aria-describedby="vfb-elements-description" aria-label="Elements" class="flex flex-col space-y-1"
             tabindex="0">

            <div
                class="flex transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-105 shadow-lg rounded-lg bg-white hover:shadow-2xl"
                draggable="true"
                role="option" tabindex="-1" @dragstart="dragStart( 'DsInput')">
                <div class=" p-2 ">
                    <DsIcon name="keyboard" size="medium"/>
                </div>
                <div class="vfb-element-text-container ml-4">
                    <div class="font-bold ">DsInput</div>
                    <div class="text-sm text-gray-500">Single line input</div>
                </div>
            </div>

            <div
                class="flex transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-105 shadow-lg rounded-lg bg-white hover:shadow-2xl"
                draggable="true"
                role="option" tabindex="-1" @dragstart="dragStart( 'DsTextArea')">
                <div class=" p-2 ">
                    <DsIcon name="align-left" size="medium"/>
                </div>
                <div class="vfb-element-text-container ml-4">
                    <div class="font-bold ">DsTextArea</div>
                    <div class="text-sm text-gray-500">Multi line input</div>
                </div>
            </div>
            <div
                class="flex transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-105 shadow-lg rounded-lg bg-white hover:shadow-2xl"
                draggable="true"
                role="option" tabindex="-1" @dragstart="dragStart( 'DsSelect')">
                <div class=" p-2 ">
                    <DsIcon name="list-alt" size="medium"/>
                </div>
                <div class="vfb-element-text-container ml-4">
                    <div class="font-bold ">DsSelect</div>
                    <div class="text-sm text-gray-500">Select-option</div>
                </div>
            </div>
        </div>
    </div>
</template>
