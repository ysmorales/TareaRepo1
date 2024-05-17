import type {IItemBuilder} from "~/interfaces/interfaces";
import {defineStore} from 'pinia';
import {reactive, ref} from 'vue';
import {InputProperty, SelectProperty, TextAreaProperty} from "~/library/ComponentsLibraryProperty";

export const useCounterStore = defineStore('counter', () => {
    const builderItems = reactive<IItemBuilder[]>([] as IItemBuilder[])
    const sideMenuType = ref<'default' | 'builder'>('default')
    const currentDragItem = ref<null | IItemBuilder>(null)
    const currentEditItem = ref<any | IItemBuilder>({})
    let idCounter = 0; // Agrega un contador para los IDs

    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    function changeCurrentDragItem(item: IItemBuilder) {
        currentDragItem.value = item;
    }

    function removeItemFromForm(index: number) {
        builderItems.splice(index, 1)
    }

    function addItemToForm() {
        const newItem = {...currentDragItem.value, id: idCounter++} as IItemBuilder; // Usa el contador para los IDs
        builderItems.push(newItem);
    }

    function addItemToEdit(item: IItemBuilder) {
        // const newItem = computed(() => {
        //         switch (item.name) {
        //             case 'DsInput':
        //                 item.props = InputProperty
        //                 return item
        //             case 'DsTextArea':
        //                 item.props = TextAreaProperty
        //                 return item
        //             case 'DsSelect':
        //                 item.props = SelectProperty
        //                 return item
        //             default:
        //                 return {id: -1} // return an object with 'id' property if item.name doesn't match any case
        //         }
        //     }
        // );

        currentEditItem.value = item
    }

    function updateItemInForm(itemToUpdate: IItemBuilder) {
        const index = builderItems.findIndex(item => item.id === itemToUpdate.id);
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