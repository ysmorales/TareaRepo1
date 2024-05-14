import type {IItemBuilder} from "~/interfaces/interfaces";

export const useCounterStore = defineStore('counter', () => {
    const builderItems = reactive<IItemBuilder[]>([] as IItemBuilder[])
    const sideMenuType = ref<'default' | 'builder'>('default')
    const currentDragItem = ref<null | { name: string }>(null)


    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    function changeCurrentDragItem(item: IItemBuilder) {
        currentDragItem.value = item;

    }

    function addItemToForm() {
        builderItems.push(currentDragItem.value as IItemBuilder)

    }

    return {builderItems, sideMenuType, changeSideMenuType, changeCurrentDragItem, currentDragItem, addItemToForm}
})