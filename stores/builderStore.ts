import type {IItemBuilder} from "~/interfaces/interfaces";

export const useCounterStore = defineStore('counter', () => {
    const builderItems = reactive([{type: 'input-text', name: 'valor'}])
    const sideMenuType = ref<'default' | 'builder'>('default')
    const currentDragItem = ref<null | { type: string, name: string }>(null)


    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    function changeCurrentDragItem(item: IItemBuilder) {
        currentDragItem.value = item;

    }

    return {builderItems, sideMenuType, changeSideMenuType}
})