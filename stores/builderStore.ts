import type {IItemBuilder} from "~/interfaces/interfaces";

export const useCounterStore = defineStore('counter', () => {
    const builderItems = reactive<IItemBuilder[]>([] as IItemBuilder[])
    const sideMenuType = ref<'default' | 'builder'>('default')
    const currentDragItem = ref<null | IItemBuilder>(null)
    const currentEditItem = ref<null | IItemBuilder>(null)


    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    function changeCurrentDragItem(item: IItemBuilder) {
        currentDragItem.value = item;

    }

    // Define the removeItemFromForm method in your store
    function removeItemFromForm(index: number) {
        builderItems.splice(index, 1)
    }


    function addItemToForm() {
        builderItems.push(currentDragItem.value as IItemBuilder)

    }

    function addItemToEdit(item: IItemBuilder) {
        currentEditItem.value = item

    }

    function updateItemInForm(itemToUpdate: IItemBuilder) {
        const index = builderItems.findIndex(item => item === itemToUpdate);
        if (index !== -1) {
            builderItems[index] = itemToUpdate;
        }
    }


    return {
        builderItems,
        sideMenuType,
        changeSideMenuType,
        changeCurrentDragItem,
        currentDragItem,
        addItemToForm,
        removeItemFromForm,
        currentEditItem,
        addItemToEdit,
        updateItemInForm
    }
})