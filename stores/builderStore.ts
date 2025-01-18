import type { IItemBuilder } from "~/interfaces/interfaces";
import { defineStore } from 'pinia';
import uniqid from "uniqid";
import { ref } from 'vue';

type IModalType = 'property' | 'save' | 'validate' | 'formData' | 'infoPanel'

export const useBuilderStore = defineStore('counter', () => {
    const itemsPage = ref({})
    const itemsPageList = ref([])
    const newProps = ref({})
    const itemOnHover = ref('')
    const itemOnSelect = ref('')
    const builderItems = ref<IItemBuilder[]>([] as IItemBuilder[])
    const currentDragItem = ref<null | IItemBuilder>(null)
    const currentEditItem = ref<any | IItemBuilder>({
        name: '',
        type: '',
        validation: {
            required: false,
            custom: ''
        }
    })
    const modalType = ref<IModalType>('property')
    const formValues = ref({} as any)
    const propertyCollapse = ref(
        true
    )

    let idCounter = 0; // Agrega un contador para los IDs

    function generateNumberId() {
        return idCounter++;
    }

    function changeCurrentDragItem(item: IItemBuilder) {
        if (Array.isArray(item)) {
            currentDragItem.value = item;
        } else {
            const temp = getStories()[item]; // Hacer una copia del objeto
            temp.keyName = item;
            temp.name = item.name + '-' + generateNumberId();
            currentDragItem.value = temp;
        }

    }

    function removeItemFromForm(index: number) {
        builderItems.value.splice(index, 1)
    }

    function addItemToForm() {
        let idS, idR, idC, idM;
        ({ idS =  uniqid('s'), idR= uniqid('r'), idC = uniqid('c'), idM = uniqid('m') } = currentDragItem.value)

        const list: any[] = itemsPageList.value
        const dicC = itemsPage.value
        if (!dicC.sections) {
            dicC.sections = {}
        }

        const baseSettings = {
            settings: {},
            sort: 1,
            props: {}
        }

        if (!dicC.sections[idS]) {
            dicC.sections[idS] = {
                ...baseSettings,
                rows: {}
            }
            list.push({
                ...baseSettings,
                type: 'section',
                id: idS,
                items: []
            })
        }

        if (!dicC.sections[idS].rows[idR]) {
            dicC.sections[idS].rows[idR] = {
                ...baseSettings,
                columns: {}
            }

            const idxS = list.findIndex(d => d.id === idS)
            list[idxS].items.push({
                ...baseSettings,
                type: 'row',
                id: idR,
                items: []
            })
        }

        if (!dicC.sections[idS].rows[idR].columns[idC]) {
            dicC.sections[idS].rows[idR].columns[idC] = {
                ...baseSettings,
                modules: {}
            }
            const idxS = list.findIndex(d => d.id === idS)
            const idxR = list[idxS].items.findIndex(d => d.id === idR)
            list[idxS].items[idxR].items.push({
                ...baseSettings,
                type: 'column',
                id: idC,
                items: []
            })
        }

        if (!dicC.sections[idS].rows[idR].columns[idC].modules[idM]) {
            dicC.sections[idS].rows[idR].columns[idC].modules[idM] = {
                ...baseSettings,
                module: currentDragItem.value.keyName
            }

            const idxS = list.findIndex(d => d.id === idS)
            const idxR = list[idxS].items.findIndex(d => d.id === idR)
            const idxC = list[idxS].items[idxR].items.findIndex(d => d.id === idC)
            list[idxS].items[idxR].items[idxC].items.push({
                ...baseSettings,
                type: 'module',
                id: idM,
                item: currentDragItem.value.keyName
            })
        }

        itemsPage.value = dicC
        itemsPageList.value = list

    }

    function addItemToEdit(item: IItemBuilder) {
        currentEditItem.value = item
    }

    function updateItemInForm({ idS, idR, idC, idM }: any, key: string, value: any) {

        const idxS = itemsPageList.value.findIndex(d => d.id === idS)
        const idxR = itemsPageList.value[idxS].items.findIndex(d => d.id === idR)
        const idxC = itemsPageList.value[idxS].items[idxR].items.findIndex(d => d.id === idC)
        const idxM = itemsPageList.value[idxS].items[idxR].items[idxC].items.findIndex(d => d.id === idM)

        itemsPageList.value[idxS].items[idxR].items[idxC].items[idxM].props[key] = value.value;
    }

    function clearStore() {
        builderItems.value = []
        currentEditItem.value = {}
        currentDragItem.value = null
    }

    function changeModal(type: IModalType) {
        modalType.value = type
    }

    function updateFormValues(newValues: { [key: string]: any }) {
        formValues.value = newValues;
    }

    function changePropertyCollapse() {
        propertyCollapse.value = !propertyCollapse.value
    }


    function handlerItemHover(id: string) {
        itemOnHover.value = id
    }

    function handlerItemOnSelect(id: string) {
        itemOnSelect.value = id
    }

    function handlerRemoveItem({ type, id }) {

        if (type === 'section') {
            const indexSection = itemsPageList.value.findIndex(d => d.id === id)
            if (indexSection !== -1) {
                itemsPageList.value.splice(indexSection, 1)
                return;
            }
        }

        for (let indexSections = 0; indexSections < itemsPageList.value.length; indexSections++) {

            if (type === 'row') {
                const indexRow = itemsPageList.value[indexSections].items.findIndex(d => d.id === id)
                if (indexRow !== -1) {
                    itemsPageList.value[indexSections].items.splice(indexRow, 1)
                    return;
                }
            }

            for (let indexRows = 0; indexRows < itemsPageList.value[indexSections].items.length; indexRows++) {

                if (type === 'column') {
                    const indexColumn = itemsPageList.value[indexSections].items[indexRows].items.findIndex(d => d.id === id)
                    if (indexColumn !== -1) {
                        itemsPageList.value[indexSections].items[indexRows].items.splice(indexColumn, 1)
                        return;
                    }
                }

                if (type === 'module') {
                    for (let indexColumns = 0; indexColumns < itemsPageList.value[indexSections].items[indexRows].items.length; indexColumns++) {
                        const indexModule = itemsPageList.value[indexSections].items[indexRows].items[indexColumns].items.findIndex(d => d.id === id)
                        if (indexModule !== -1) {
                            itemsPageList.value[indexSections].items[indexRows].items[indexColumns].items.splice(indexModule, 1)
                            return;
                        }
                    }
                }
            }
        }
    }

    function handlerCloneItem({ ids, idr, idc, idm }) {
        if (idm) {
            const idM = uniqid('m')
            const item = JSON.parse(JSON.stringify(itemsPage.value.sections[ids].rows[idr].columns[idc].modules[idm]))
            const sort = item?.sort + 1
            itemsPage.value.sections[ids].rows[idr].columns[idc].modules[idM] = { ...item, sort }
        }
    }


    return {
        propertyCollapse,
        changePropertyCollapse,
        formValues,
        updateFormValues,
        changeModal,
        modalType,
        builderItems,
        changeCurrentDragItem,
        currentDragItem,
        addItemToForm,
        removeItemFromForm,
        currentEditItem,
        addItemToEdit,
        itemsPage,
        updateItemInForm,
        clearStore,
        itemOnHover,
        handlerItemHover,
        itemOnSelect,
        handlerItemOnSelect,
        handlerRemoveItem,
        handlerCloneItem,
        itemsPageList
    }
})