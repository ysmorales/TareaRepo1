import type {IItemBuilder} from "~/interfaces/interfaces";
import {defineStore} from 'pinia';
import {ref} from 'vue';

type IModalType = 'property' | 'save' | 'validate'

export const useBuilderStore = defineStore('counter', () => {
    const builderItems = ref<IItemBuilder[]>([] as IItemBuilder[])
    const sideMenuType = ref<'default' | 'builder'>('default')
    const currentDragItem = ref<null | IItemBuilder>(null)
    const currentEditItem = ref<any | IItemBuilder>({})
    const modalType = ref<IModalType>('property')
    let idCounter = 0; // Agrega un contador para los IDs

    function generateNumberId() {
        return idCounter++;
    }

    function generateId(items: IItemBuilder[]): number {
        // Si el array está vacío, comienza desde 1
        if (items.length === 0) {
            return 1;
        }

        // Ordena los elementos en orden descendente por ID
        const sortedItems = [...items].sort((a, b) => b.id! - a.id!);

        // Toma el ID del primer elemento (el más grande) y añade 1
        return sortedItems[0].id! + 1;
    }


    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    function changeCurrentDragItem(item: IItemBuilder) {
        if (Array.isArray(item)) {
            currentDragItem.value = item;
        } else {
            const temp = {...item}; // Hacer una copia del objeto
            temp.name = item.name + '-' + generateNumberId();
            currentDragItem.value = temp;
        }

    }

    function removeItemFromForm(index: number) {
        builderItems.value.splice(index, 1)
    }

    function ensureConfirmationButtonAtEnd() {
        const index = builderItems.value.findIndex(item => item.type === 'DsConfirmationButton');

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
                id: generateId(builderItems.value),
                validation: {required: true, custom: null}
            } as IItemBuilder;
            builderItems.value.push(newItem);
            //para que se actualice el estado
            builderItems.value = [...builderItems.value];
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

    function changeModal(type: IModalType) {
        modalType.value = type

    }

    return {
        changeModal,
        modalType,
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