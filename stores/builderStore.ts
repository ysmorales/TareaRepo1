import type {IItemBuilder} from "~/interfaces/interfaces";

export const useCounterStore = defineStore('counter', () => {
    const builderItems = reactive([])
    const sideMenuType = ref<'default' | 'builder'>('default')
    const currentDragItem = ref<null | { name: string }>(null)


    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    function changeCurrentDragItem(item: { name: string }) {
        currentDragItem.value = item;

    }

    return {builderItems, sideMenuType, changeSideMenuType, changeCurrentDragItem}
})