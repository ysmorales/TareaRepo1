<script lang="ts" setup>
import {reactive} from "vue";

import DsInput from "../../../form/input/DsInput.vue";
import DsButton from "../../button/DsButton.vue";
import type {ITableColumnData} from "../interface";
import {useVuelidate} from "@vuelidate/core";
// import {formatRut, isValidRut} from "../../../../utils/isValidRut.ts";
import DsSelect from "../../../form/select/DsSelect.vue";
// import {getErrorMessage} from "../../../../utils/translateErrorMessage.ts";
import {formatRut, isValidRut} from "../../../../utils/isValidRut";
import {getErrorMessage} from "../../../../utils/translateErrorMessage";
type FormData = Record<string, string> & { run?: string };

const props = defineProps({
    columns: {
        type: Array as () => ITableColumnData[],
        default: () => [],
    },
});
//generando los valores del form dinámicos
let constructFormValues = props.columns.reduce((obj: FormData, item) => {
    if (item.key && item.filter) {
        obj[item.key] = '';
    }

    // Ensure `run` property is always present in the form
    if (!obj.run) {
        obj.run = '';
    }

    return obj;
}, {} as FormData);

const rucValidate = {
    $message: "No es un run valido",
    $validator: isValidRut,
};
const form = reactive<FormData>(
    constructFormValues
);

const formRules = reactive({
    run: {rucValidate},
});
const validateForm = useVuelidate(formRules, form as any);

const emit = defineEmits(["filter", "clean"]);

function handleSearch() {
    const allEmpty = Object.values(form).every(value => value === '');

    // Si todas las propiedades de `form` son cadenas vacías, interrumpe la ejecución de la función
    if (allEmpty) {
        return;
    }
    if (!form.run) {
        emit("filter", form);
    } else {
        validateForm.value.$touch();
        if (!validateForm.value.$invalid) {
            emit("filter", form);
        }
    }

}

function initializeObjectProperties(obj:any) {
    Object.keys(obj).forEach((key) => {
        obj[key] = '';
    });
}

function handleClean() {
    // searchValues.value = {};
    validateForm.value.$reset()
    initializeObjectProperties(form)
    emit("clean");
}

function handleBlur() {
    if (form.run != '') {
        form.run = formatRut(form.run!);
        validateForm.value.$touch();
    } else {
        validateForm.value.$reset()
    }

}
</script>
<template>
    <fieldset class="border border-gray-300">
        <legend class="font-bold mb-2 text-gray-500"></legend>
        <div class="flex justify-between">
            <div class="flex p-2">
                <div
                    v-for="(column, index) in columns"
                    :key="'filter' + index"
                    class="mr-2"
                >
                    <DsInput
                        v-if="column.filter?.filterType=='text'"
                        :id="column.key"
                        v-model="form[column.key as string]"
                        :label="column.title"
                        size="full"
                        type="text"
                    />
                    <DsSelect
                        v-if="column.filter?.filterType=='select'"
                        :id="column.key"
                        v-model="form[column.key as string]"
                        :label="column.title"
                        :option="column.filter.config"
                        size="full"
                    />
                    <DsInput
                        v-if="column.filter?.filterType=='run'"
                        :id="column.key"
                        v-model="form.run"
                        :error="getErrorMessage(validateForm?.run.$errors[0])"
                        :label="column.title"
                        size="full"
                        type="text"
                        @blur="handleBlur()"
                    />
                </div>
            </div>
            <div class="flex justify-end items-center">
                <DsButton
                    class="m-1 max-h-[50px]"
                    color="tertiary"
                    @click="handleSearch"
                >Buscar
                </DsButton>
                <DsButton class="m-1 max-h-[50px]" color="tertiary" @click="handleClean"
                >Limpiar
                </DsButton>
            </div>
        </div>
    </fieldset>
</template>
