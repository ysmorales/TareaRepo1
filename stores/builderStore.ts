import type {IItemBuilder} from "~/interfaces/interfaces";
import {defineStore} from 'pinia';
import {ref} from 'vue';


export const useCounterStore = defineStore('counter', () => {
    const builderItems = ref<IItemBuilder[]>([] as IItemBuilder[])
    const sideMenuType = ref<'default' | 'builder'>('default')
    const currentDragItem = ref<null | IItemBuilder>(null)
    const currentEditItem = ref<any | IItemBuilder>({})
    let idCounter = 0; // Agrega un contador para los IDs

    function generateId() {
        return idCounter++;
    }


    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    function changeCurrentDragItem(item: IItemBuilder) {
        currentDragItem.value = item;
    }

    function removeItemFromForm(index: number) {
        builderItems.value.splice(index, 1)
    }

    function addItemToForm() {
        const newItem = {
            ...currentDragItem.value,
            id: (currentDragItem.value?.name == 'DsConfirmationButton' ? (idCounter++) + 1000 : idCounter++)
        } as IItemBuilder; // Usa el contador para los IDs
        builderItems.value.push(newItem);
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
        generateId,
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