<script lang="ts" setup>

import {useCounterStore} from "~/stores/builderStore";
import {DsComponents} from "~/components/builder-components/builder-menu/dsComponents";
import Item from "~/components/builder-components/builder-menu/components/item.vue";
import {menuItemsData} from "./components/menuItemsData";

const store = useCounterStore()
const {changeCurrentDragItem, generateId, builderItems} = toRefs(store)

function dragStart(type: string) {
    const component = DsComponents.find(component => component.name === type);
    if (component) {
        changeCurrentDragItem.value({...component, id: generateId.value()});
    }
}

const isDsConfirmationButtonPresent = computed(() => {
    return builderItems.value.some(item => item.name === 'DsConfirmationButton');
});
</script>

<template>
    <div class="flex flex-col ">
        <div aria-describedby="vfb-elements-description" aria-label="Elements" class="flex flex-col space-y-1"
             tabindex="0">
            <Item
                v-for="component in menuItemsData"
                :key="component.name"
                :description="component.description"
                :draggable="!(isDsConfirmationButtonPresent && component.name === 'DsConfirmationButton')"
                :icon="component.icon"
                :name="component.name"
                @drag-start="dragStart(component.name)"
            />
        </div>
    </div>
</template>
