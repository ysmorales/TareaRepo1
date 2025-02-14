import type { IItemBuilder } from "~/interfaces/interfaces";
import { defineStore } from 'pinia';
import uniqid from "uniqid";
import { ref } from 'vue';
import { getEmptySection } from "~/utils/tree";

import { useVuelidate } from "@vuelidate/core";
import { email, helpers, numeric, required } from "@vuelidate/validators";

type IModalType = 'property' | 'save' | 'validate' | 'formData' | 'infoPanel'

const keyLocalStoreInfo = '667yuu'
const defaultBoard = [{ "settings": {}, "sort": 1, "props": { "totalSteps": 2 }, "type": "section", "id": "sm74o4ku4", "items": [{ "settings": {}, "sort": 1, "props": { "totalSteps": 2 }, "type": "row", "id": "rm74o4ku5", "items": [{ "settings": {}, "sort": 1, "props": { "totalSteps": 2 }, "type": "column", "id": "cm74o4ku6", "items": [{ "settings": {}, "sort": 1, "props": { "totalSteps": 3 }, "type": "module", "id": "mm74o4ku7", "item": "../components/builder-extra/Stepper/StepperExtra.stories.js", "items": [{ "id": "sm74o4vk6", "settings": {}, "type": "section", "items": [{ "id": "rm74o4vk7", "settings": { "rowNumCols": 12 }, "type": "row", "items": [{ "id": "cm74o4ycg", "settings": { "columnSpan": "col-span-12" }, "type": "column", "items": [{ "type": "module", "id": "mm74o4zlh", "item": "../components/builder-extra/Stepper/StepExtra.stories.js", "slots": ["default"], "items": [{ "id": "sm74o55q0", "settings": {}, "type": "section", "items": [{ "id": "rm74o55q1", "settings": { "rowNumCols": 12 }, "type": "row", "items": [{ "id": "cm74o57fi", "settings": { "columnSpan": "col-span-12" }, "type": "column", "items": [{ "type": "module", "id": "mm74o5d66", "item": "../components/builder-extra/Stepper/FieldInfoGroupExtra.stories.js" }] }, { "id": "m74o5gv8", "settings": { "columnSpan": "col-span-12" }, "type": "column", "items": [{ "type": "module", "id": "m74o5gv9", "item": "../components/builder-extra/Stepper/FieldInfoGroupExtra.stories.js" }] }, { "id": "m74o5g6f", "settings": { "columnSpan": "col-span-12" }, "type": "column", "items": [{ "type": "module", "id": "m74o5g6g", "item": "../components/builder-extra/Stepper/FieldInfoGroupExtra.stories.js", "slots": ["default"], "items": [{ "id": "sm74o5kel", "settings": {}, "type": "section", "items": [{ "id": "rm74o5kem", "settings": { "rowNumCols": 12 }, "type": "row", "items": [{ "id": "cm74o5lvb", "settings": { "columnSpan": "col-span-12" }, "type": "column", "items": [{ "type": "module", "id": "mm74pfk3p", "item": "../stories/components/basic/typography/DsTypography.stories.js", "props": { "text": "Selecciona la franja*" } }, { "type": "module", "id": "mm74pdumg", "item": "../stories/components/form/check/DsCheck.stories.ts", "props": { "label": "8:30 a 17:30" }, "data": false }, { "type": "module", "id": "m74pf14f", "item": "../stories/components/form/check/DsCheck.stories.ts", "props": { "label": "9:00 a 18:00" }, "data": false }, { "type": "module", "id": "m74pbm3f", "item": "../stories/components/form/input/Input.stories.ts", "data": "", "props": { "helpMessage": "other ramdon input here", "placeholder": "some" } }] }] }] }], "props": { "title": "Franja horaria solicitada" } }, { "type": "module", "id": "m74pgmxj", "item": "../components/builder-extra/Stepper/FieldInfoGroupExtra.stories.js", "slots": ["default"], "items": [{ "id": "m74pgmxk", "settings": {}, "type": "section", "items": [{ "id": "m74pgmxl", "settings": { "rowNumCols": 12 }, "type": "row", "items": [{ "id": "m74pgmxm", "settings": { "columnSpan": "col-span-12" }, "type": "column", "items": [{ "type": "module", "id": "mm74q18n8", "item": "../components/builder-extra/Form/Radio/RadioGroupExtra.stories.js" }] }] }] }], "props": { "title": "Inicio de la franja horaria solicitada" } }] }] }] }] }] }] }] }, { "id": "sm74o5uru", "settings": {}, "type": "section", "items": [{ "id": "rm74o5urv", "settings": { "rowNumCols": 12 }, "type": "row", "items": [{ "id": "cm74o8iht", "settings": { "columnSpan": "col-span-12" }, "type": "column", "items": [{ "type": "module", "id": "mm74o8jvd", "item": "../components/builder-extra/Stepper/StepConfirmExtra.stories.js", "slots": ["default"], "items": [{ "id": "sm74p81rd", "settings": {}, "type": "section", "items": [{ "id": "rm74p81re", "settings": { "rowNumCols": 12 }, "type": "row", "items": [{ "id": "cm74p84o0", "settings": { "columnSpan": "col-span-12", "margin": { "top": "13.0801687763713", "bottom": 0, "right": 0, "left": 0 } }, "type": "column", "items": [{ "settings": {}, "sort": 1, "props": {}, "type": "module", "id": "mm74p9i2e", "item": "../stories/components/container/accordion/DsAccordion.stories.js", "items": [] }] }] }] }] }] }] }] }, { "id": "sm74o8nyj", "settings": {}, "type": "section", "items": [{ "id": "rm74o8nyk", "settings": { "rowNumCols": 12 }, "type": "row", "items": [{ "id": "cm74o8v6a", "settings": { "columnSpan": "col-span-12" }, "type": "column", "items": [{ "type": "module", "id": "mm74o8wy3", "item": "../components/builder-extra/Stepper/StepResumeExtra.stories.js" }] }] }] }], "slots": ["default"] }] }] }] }]

export const useBuilderStore = defineStore('counter', () => {
    const itemsPage = ref({})
    const itemsPageList = ref(JSON.parse(window.localStorage.getItem(keyLocalStoreInfo)) ?? defaultBoard)
    const areaMode = ref('dragable')
    const viewMode = ref('edition')
    const viewModeFieldConfigs = ref('single')
    const itemOnHover = ref('')
    const itemOnSelect = ref({})
    const itemToCopy = ref({})
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

    const $externalResults = ref({});
    const form = computed(() => {
        return { ...getFormFieldValues(itemsPageList.value) }
    });

    const formRules = computed(() => {
        const step1 = {}
        Object.keys(getFormFieldValues(itemsPageList.value)).forEach(element => {
            step1[element] = { required }
        });

        return step1
    });

    const isLoadingForm = ref(false)
    const validateForm = useVuelidate(formRules, form, { $externalResults });

    function setLoadingForm(newState) {
        isLoadingForm.value = newState
    }

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

        const baseSettings = {
            settings: {},
            sort: 1,
            props: {}
        }

        list.push({
            ...baseSettings,
            type: 'section',
            id: idS,
            items: [{
                ...baseSettings,
                type: 'row',
                id: idR,
                items: [{
                    ...baseSettings,
                    type: 'column',
                    id: idC,
                    items: [{
                        ...baseSettings,
                        type: 'module',
                        id: idM,
                        item: currentDragItem.value.keyName,
                        items: []
                    }]
                }]
            }]
        })

        itemsPageList.value = list

    }

    function addItemToEdit(item: IItemBuilder) {
        currentEditItem.value = item
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


    function updateViewMode(newMode: string) {
        viewMode.value = newMode;
    }

    function updateViewModeFieldConfigs(newMode: string) {
        viewModeFieldConfigs.value = newMode;
    }

    function handlerRemoveItem({ id, type }) {
        let foundSectionInRoot = false;
        const indexSection = itemsPageList.value.findIndex(d => d.id === id)
        if (indexSection !== -1) {
            foundSectionInRoot = true
            itemsPageList.value.splice(indexSection, 1)
        }
        if (!foundSectionInRoot) {
            const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
            deleteElementByPath(itemsPageList.value, ruta);
        }
    }

    function updateToogleShowSlotInForm({ id }: any, slotsToShow: string[]) {
        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);

        updateNodeByPath(itemsPageList.value, ruta, 'slots', slotsToShow, true);
    }

    function updateItemInForm({ id }: any, key: string, value: any) {
        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);

        updateNodeByPath(itemsPageList.value, ruta, 'props', { [key]: value.value });
    }

    function handlerCopyItem({ id, type }) {
        itemToCopy.value = { id, type }
    }

    function handlerPasteItem({ id }) {
        if (itemToCopy.value.id) {
            handlerCloneItem({ id }, itemToCopy.value.id)
        }
    }

    function handlerCloneItem({ id, type }, fromToClone) {
        let foundSectionInRoot = false;

        let nodoClone = {}
        if (fromToClone) {
            const ruta = encontrarRutaPorIndice(itemsPageList.value, fromToClone);
            nodoClone = getNodeByPath(itemsPageList.value, ruta);
        }

        const indexSection = itemsPageList.value.findIndex(d => d.id === id)
        if (indexSection !== -1) {
            foundSectionInRoot = true

            const nodeToDuplicate: any = JSON.parse(JSON.stringify(isNotEmpty(nodoClone) ? nodoClone : itemsPageList.value[indexSection]));

            assignNewIds(nodeToDuplicate);
            itemsPageList.value.splice(indexSection + 1, 0, nodeToDuplicate);

        }
        if (!foundSectionInRoot) {
            const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
            duplicateNodesByPath(itemsPageList.value, ruta, nodoClone);
        }
    }

    function handlerChangeContainerPaddingMargin({ id }, paddingMargin) {
        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
        const nodo = getNodeByPath(itemsPageList.value, ruta);
        nodo.settings.margin = { ...nodo.settings.margin, ...paddingMargin?.margin }
    }

    function handlerChangeContainerSettings({ id }, newSettingsToAdd) {
        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
        updateNodeByPath(itemsPageList.value, ruta, 'settings', newSettingsToAdd);
    }

    function getEmptyModule(moduleKeyName) {
        return {
            settings: {},
            sort: 1,
            props: {},
            type: 'module',
            id: uniqid('m'),
            item: moduleKeyName,
            items: []
        }
    }

    function handlerAddModule({ id }, moduleKeyName) {
        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);

        updateNodeByPath(itemsPageList.value, ruta, 'items', [getEmptyModule(moduleKeyName)], true);
    }

    function handlerAddEmptyContainerSectionInSlot({ id, type }) {
        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
        const nodo = getNodeByPath(itemsPageList.value, ruta);
        nodo.items = [getEmptySection()]
        nodo.props.totalSteps = nodo.items.length
    }

    function handlerAddEmptyContainerRow({ id, type }) {

        if (!id) {
            itemsPageList.value.push(getEmptySection())
        } else {

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
                const nodo = getNodeByPath(itemsPageList.value, ruta);
                if (!nodo.items) {
                    nodo.items = []
                }
                nodo.items = [emptyRow]
            }
        }
    }

    function handlerChangeLayout({ id, type }, newLayoutCols) {

        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
        const nodo = getNodeByPath(itemsPageList.value, ruta);

        if (!nodo.items) {
            nodo.items = []
        }
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

    function handlerChangeNumChildrensSections({ id }, numChildrenSections) {

        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
        const nodo = getNodeByPath(itemsPageList.value, ruta);

        if (!nodo.items) {
            nodo.items = []
        }
        if (nodo.items.length < numChildrenSections) {
            nodo.items.push(getEmptySection())
            nodo.props.totalSteps = nodo.items.length
        }
    }

    function handlerChangeRemoveChildrensSections({ id }, indexToRemove) {
        const ruta = encontrarRutaPorIndice(itemsPageList.value, id);
        const nodo = getNodeByPath(itemsPageList.value, ruta);
        nodo.items.splice(indexToRemove, 1)
        nodo.props.totalSteps = nodo.items.length
    }

    function handlerSaveBoard() {
        window.localStorage.setItem(keyLocalStoreInfo, JSON.stringify(itemsPageList.value))
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
        handlerCopyItem,
        handlerPasteItem,
        itemsPageList,
        areaMode,
        updateAreaMode,
        updateViewMode,
        viewMode,
        viewModeFieldConfigs,
        updateViewModeFieldConfigs,
        handlerChangeLayout,
        handlerChangeContainerPaddingMargin,
        handlerChangeContainerSettings,
        handlerAddEmptyContainerRow,
        handlerAddEmptyContainerSectionInSlot,
        updateToogleShowSlotInForm,
        handlerAddModule,
        itemToCopy,
        handlerSaveBoard,
        handlerChangeNumChildrensSections,
        handlerChangeRemoveChildrensSections,
        validateForm,
        setLoadingForm,
        isLoadingForm
    }
})