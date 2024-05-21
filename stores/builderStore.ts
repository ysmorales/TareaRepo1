import type {IItemBuilder} from "~/interfaces/interfaces";
import {defineStore} from 'pinia';
import {ref} from 'vue';


export const useCounterStore = defineStore('counter', () => {
    const builderItems = ref<IItemBuilder[]>([] as IItemBuilder[])
    const sideMenuType = ref<'default' | 'builder'>('default')
    const currentDragItem = ref<null | IItemBuilder>(null)
    const currentEditItem = ref<any | IItemBuilder>({})
    let idCounter = 0; // Agrega un contador para los IDs

    // function generateId() {
    //     return idCounter++;
    // }


    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    function changeCurrentDragItem(item: IItemBuilder) {
        currentDragItem.value = item;
    }

    function removeItemFromForm(index: number) {
        builderItems.value.splice(index, 1)
    }

    function ensureConfirmationButtonAtEnd() {
        const index = builderItems.value.findIndex(item => item.name === 'DsConfirmationButton');

        if (index !== -1 && index !== builderItems.value.length - 1) {
            const item = builderItems.value.splice(index, 1)[0];
            builderItems.value.push(item);
        }
    }

    function addItemToForm() {
        if (Array.isArray(currentDragItem.value)) {
            builderItems.value = currentDragItem.value
        } else {
            const newItem = {
                ...currentDragItem.value,
                id: idCounter++
            } as IItemBuilder;
            builderItems.value.push(newItem);
            ensureConfirmationButtonAtEnd();
        }

    }

    function addItemToEdit(item: IItemBuilder) {
        currentEditItem.value = item
    }

    function updateItemInForm(id: number, key: string, value: any) {
        const index = builderItems.value.findIndex(item => item.id === id);
        if (index !== -1) {
            const temp = JSON.parse(JSON.stringify(builderItems.value));
            temp[index].props[key] = value.value;
            builderItems.value = temp;
        } else {
            console.error(`Item with id ${id} not found`);
        }
    }

    function clearStore() {
        builderItems.value = []
        currentEditItem.value = {}
        currentDragItem.value = null
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
        updateItemInForm,
        clearStore
    }
})