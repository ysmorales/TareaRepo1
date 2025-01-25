import type { IItemBuilder } from "~/interfaces/interfaces";
import { defineStore } from 'pinia';
import uniqid from "uniqid";
import { ref } from 'vue';

type IModalType = 'property' | 'save' | 'validate' | 'formData' | 'infoPanel'

export const useBuilderStore = defineStore('counter', () => {
    const itemsPage = ref({})
    const itemsPageList = ref([])
    const newProps = ref({})
    const areaMode = ref('dragable')
    const itemOnHover = ref('')
    const itemOnSelect = ref({})
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

    function handlerItemOnSelect(id: string, type: string) {
        itemOnSelect.value = { id, type }
    }

    function updateAreaMode(newMode: string) {
        areaMode.value = newMode;
    }


    function deleteElementByPath(trees, path) {
        if (!Array.isArray(path) || path.length === 0) {
            throw new Error('La ruta debe ser un array de índices no vacío.');
        }

        let current = trees[path[0]];
        for (let i = 1; i < path.length - 1; i++) {
            if (!Array.isArray(current.items) || current.items[path[i]] === undefined) {
                throw new Error('Ruta inválida en el árbol.');
            }
            current = current.items[path[i]];
        }

        const lastIndex = path[path.length - 1];
        if (!Array.isArray(current.items) || current.items[lastIndex] === undefined) {
            throw new Error('Índice final inválido.');
        }

        current.items.splice(lastIndex, 1);
    }

    function encontrarRutaPorIndice(arbol, idBuscado, ruta = []) {
        for (let i = 0; i < arbol.length; i++) {
            const nodo = arbol[i];

            // Añadir el índice actual a la ruta
            ruta.push(i);

            // Si encontramos el nodo con el id buscado, retornamos la ruta
            if (nodo.id === idBuscado) {
                return ruta;
            }

            // Si el nodo tiene hijos, buscamos recursivamente en ellos
            if (nodo.items && nodo.items.length > 0) {
                const rutaEncontrada = encontrarRutaPorIndice(nodo.items, idBuscado, ruta);
                if (rutaEncontrada) {
                    return rutaEncontrada;
                }
            }

            // Si no se encontró el nodo, quitamos el índice de la ruta (retrocedemos)
            ruta.pop();
        }
        return null; // Si no se encuentra el nodo
    }

    function assignNewIds(node) {
        node.id = uniqid();
        if (Array.isArray(node.items)) {
            node.items.forEach(assignNewIds);
        }
    }


    function duplicateNodesByPath(trees, path) {
        if (!Array.isArray(path) || path.length === 0) {
            throw new Error('La ruta debe ser un array de índices no vacío.');
        }

        let current = trees[path[0]];
        for (let i = 1; i < path.length - 1; i++) {
            if (!Array.isArray(current.items) || current.items[path[i]] === undefined) {
                throw new Error('Ruta inválida en el árbol.');
            }
            current = current.items[path[i]];
        }

        const lastIndex = path[path.length - 1];
        if (!Array.isArray(current.items) || current.items[lastIndex] === undefined) {
            throw new Error('Índice final inválido.');
        }

        const nodeToDuplicate = JSON.parse(JSON.stringify(current.items[lastIndex]));
        assignNewIds(nodeToDuplicate);
        current.items.splice(lastIndex + 1, 0, nodeToDuplicate);
    }

    function getNodeByPath(trees, path) {
        if (!Array.isArray(path) || path.length === 0) {
            throw new Error('La ruta debe ser un array de índices no vacío.');
        }

        let current = trees[path[0]];
        for (let i = 1; i < path.length; i++) {
            if (!Array.isArray(current.items) || current.items[path[i]] === undefined) {
                throw new Error('Ruta inválida en el árbol.');
            }
            current = current.items[path[i]];
        }

        return current;
    }


    function updateNodeByPath(trees, path, key, value, allReplace = false) {
        if (!Array.isArray(path) || path.length === 0) {
            throw new Error('La ruta debe ser un array de índices no vacío.');
        }

        let current = trees[path[0]];
        for (let i = 1; i < path.length; i++) {
            if (!Array.isArray(current.items) || current.items[path[i]] === undefined) {
                throw new Error('Ruta inválida en el árbol.');
            }
            current = current.items[path[i]];
        }

        if (key) {
            if (allReplace) {
                current[key] = value;
            } else {
                current[key] = { ...current[key], ...value };
            }
        }
    }

    function findIndexs({ type, id }) {

        if (type === 'section') {
            const indexSection = itemsPageList.value.findIndex(d => d.id === id)
            if (indexSection !== -1) {
                return { indexSection };
            }
        }

        for (let indexSection = 0; indexSection < itemsPageList.value.length; indexSection++) {

            if (type === 'row') {
                const indexRow = itemsPageList.value[indexSection].items.findIndex(d => d.id === id)
                if (indexRow !== -1) {
                    return { indexSection, indexRow }
                }
            }

            for (let indexRow = 0; indexRow < itemsPageList.value[indexSection].items.length; indexRow++) {

                if (type === 'column') {
                    const indexColumn = itemsPageList.value[indexSection].items[indexRow].items.findIndex(d => d.id === id)
                    if (indexColumn !== -1) {
                        return { indexSection, indexRow, indexColumn }
                    }
                }

                if (type === 'module') {
                    for (let indexColumn = 0; indexColumn < itemsPageList.value[indexSection].items[indexRow].items.length; indexColumn++) {
                        const indexModule = itemsPageList.value[indexSection].items[indexRow].items[indexColumn].items.findIndex(d => d.id === id)
                        if (indexModule !== -1) {
                            return { indexSection, indexRow, indexColumn, indexModule }
                        }
                    }
                }
            }
        }

        return {}
    }

    function handlerRemoveItem({ id, type }) {
        let foundSectionInRoot = false;
        if (type === 'section') {
            const indexSection = itemsPageList.value.findIndex(d => d.id === id)
            if (indexSection !== -1) {
                foundSectionInRoot = true
                itemsPageList.value.splice(indexSection, 1)
            }
        }
        if (!foundSectionInRoot) {
            const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
            deleteElementByPath(itemsPageList.value, ruta);
        }
    }

    function handlerCloneItem({ id, type }) {
        let foundSectionInRoot = false;
        if (type === 'section') {
            const indexSection = itemsPageList.value.findIndex(d => d.id === id)
            if (indexSection !== -1) {
                foundSectionInRoot = true

                const nodeToDuplicate = JSON.parse(JSON.stringify(itemsPageList.value[indexSection]));
                assignNewIds(nodeToDuplicate);
                itemsPageList.value.splice(indexSection + 1, 0, nodeToDuplicate);

            }
        }
        if (!foundSectionInRoot) {
            const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
            duplicateNodesByPath(itemsPageList.value, ruta);
        }
    }

    function clone(item) {
        return JSON.parse(JSON.stringify(item))
    }

    function handlerChangeContainerPaddingMargin({ id, type }, paddingMargin) {
        const { indexSection, indexRow, indexColumn, indexModule } = findIndexs({ type, id })

        if (type === 'row') {
            const currentSettings = clone(itemsPageList.value[indexSection].items[indexRow].settings)
            itemsPageList.value[indexSection].items[indexRow].settings = {
                ...currentSettings,
                margin: paddingMargin?.margin ?? currentSettings.margin ?? {},
                padding: paddingMargin?.padding ?? currentSettings.padding ?? {},
            }
        }
        if (type === 'column') {
            const currentSettings = clone(itemsPageList.value[indexSection].items[indexRow].items[indexColumn].settings)
            itemsPageList.value[indexSection].items[indexRow].items[indexColumn].settings = {
                ...currentSettings,
                margin: paddingMargin?.margin ?? currentSettings.margin ?? {},
                padding: paddingMargin?.padding ?? currentSettings.padding ?? {},
            }
        }
    }

    function handlerChangeContainerSettings({ id, type }, newSettingsToAdd) {
        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
        updateNodeByPath(itemsPageList.value, ruta, 'settings', newSettingsToAdd);
    }

    function handlerAddEmptyContainerRow({ id, type }) {
        let foundSectionInRoot = false;
        const emptyRow = {
            id: uniqid('r'),
            settings: {},
            type: 'row',
            items: []
        }
        if (type === 'section') {
            const indexSection = itemsPageList.value.findIndex(d => d.id === id)
            if (indexSection !== -1) {
                foundSectionInRoot = true
                itemsPageList.value[indexSection].items.push(emptyRow)
            }
        }
        if (!foundSectionInRoot) {
            const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
            updateNodeByPath(itemsPageList.value, ruta, 'items', emptyRow, true);
        }
    }

    function handlerChangeLayout({ id, type }, newLayoutCols) {

        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
        const nodo = getNodeByPath(itemsPageList.value, ruta);

        if (type === 'row') {
            const colsConfig = Array.isArray(newLayoutCols.mode) ? newLayoutCols.mode : newLayoutCols.mode.split(',').map(d => `col-span-${d}`)
            for (let index = 0; index < colsConfig.length; index++) {
                if (nodo.items[index]?.settings) {
                    const itemd = clone(nodo.items[index])
                    nodo.items[index] = { ...itemd, settings: { ...itemd.settings, columnSpan: colsConfig[index] } }
                } else {
                    nodo.items.push({
                        id: uniqid('c'),
                        settings: {
                            columnSpan: colsConfig[index]
                        },
                        type: 'column',
                        items: []
                    })
                }
            }
            const newRow = { ...nodo, settings: { ...nodo.settings, rowNumCols: newLayoutCols?.row ?? 12 } }
            updateNodeByPath(itemsPageList.value, ruta, 'items', newRow.items, true);
            updateNodeByPath(itemsPageList.value, ruta, 'settings', newRow.settings);
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
        itemsPageList,
        areaMode,
        updateAreaMode,
        handlerChangeLayout,
        handlerChangeContainerPaddingMargin,
        handlerChangeContainerSettings,
        handlerAddEmptyContainerRow
    }
})