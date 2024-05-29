<script lang="ts" setup>
import {useBuilderStore} from "~/stores/builderStore";
import {toRefs, reactive} from "vue";
import {filterProps} from "~/utils/filterProps";
import {
    DsButton,
    DsConfirmationButton,
    DsInput,
    DsSelect,
    DsTextArea,
    DsTypography
} from "~/components/DesignSystem";
import {useVuelidate} from "@vuelidate/core";
import {email, helpers, numeric, required} from "@vuelidate/validators";

const store = useBuilderStore()
const {builderItems, addItemToForm} = toRefs(store)

const components: { [key: string]: any } = {
    DsInput,
    DsTextArea,
    DsButton,
    DsSelect,
    DsConfirmationButton
}


const formValues: { [key: string]: any } = reactive({});
const formRules: { [key: string]: any } = reactive({});

const emit = defineEmits(["submit", "cancel"])

onMounted(() => {
    builderItems.value.forEach((item) => {
        if (item && typeof item.name === 'string' && typeof item.id === 'number' && !item.name.includes('DsConfirmationButton')) {
            formValues[item.name + item.id] = '';
        }
    });
});

watch(builderItems, (newVal) => {
    newVal.forEach((item) => {
        if (item && typeof item.name === 'string' && typeof item.id === 'number' && !item.name.includes('DsConfirmationButton')) {
            const key = item.name + item.id;
            if (!(key in formValues)) {
                formValues[key] = '';
            }
        }
    });
}, {deep: true});

onMounted(() => {
    builderItems.value.forEach((item) => {
        if (item && typeof item.name === 'string' && typeof item.id === 'number' && !item.name.includes('DsConfirmationButton')) {
            const key = item.name + item.id;
            formValues[key] = '';
            formRules[key] = createValidationRules(item.validation!);
        }
    });
});

watch(builderItems, (newVal) => {
    newVal.forEach((item) => {
        if (item && typeof item.name === 'string' && typeof item.id === 'number' && !item.name.includes('DsConfirmationButton')) {
            const key = item.name + item.id;
            if (!(key in formValues)) {
                formValues[key] = '';
            }
            if (!(key in formRules)) {
                formRules[key] = createValidationRules(item.validation!);
            }
        }
    });
}, {deep: true});


const $V = useVuelidate(formRules, formValues);

function submitForm() {
    $V.value.$touch();
    if (!$V.value.$error) {
        emit('submit', formValues)
    } else {
        console.log('error')
    }
}

const drop = () => {
    addItemToForm.value()
}

function createValidationRules(validation: {
    required: boolean,
    custom?: null | 'email' | 'number' | 'text' | 'run' | 'defecto'
}) {

    const rules: { [key: string]: any } = {};
    if (validation.required) {
        rules.required = required;
    }
    if (validation.custom) {
        switch (validation.custom) {
            case 'email':
                rules.email = email;
                break;
            case 'number':
                rules.numeric = numeric;
                break;
            case 'text':
                rules.text = helpers.regex('text', /^[a-zA-Z\s]*$/);
                break;
            // Aquí puedes agregar más casos si necesitas más tipos de validación
        }
    }
    return rules;
}

</script>

<template>
    <!--    <h1>valores del form</h1>-->
    {{ JSON.stringify(builderItems) }}
    <!--    <h1>valores de validación</h1>-->
    <!--    {{ JSON.stringify(formRules) }}-->
    <div
        class="w-full flexp-5 flex-col md:min-w-[723px]  items-center justify-center border border-gray-300 shadow-md rounded-md p-5 min-h-[400px]"
        @drop="drop"
        @dragover.prevent>
        <div v-if="builderItems.length==0" class="flex flex-col h-full justify-center items-center">
            <DsTypography>Area de previsualización, no se ha adicionado componentes aún.</DsTypography>
        </div>
        <form @submit.prevent="submitForm">
            <component :is="components[item.type!]"
                       v-for="(item, index) in builderItems"
                       v-if="builderItems.length>0"
                       :key="item.id" v-model="formValues[item.name! + item.id]"
                       :error="$V[item.name! + item.id]?.$error ? $V[item.name! + item.id].required.$message : ''"
                       v-bind="filterProps(item.props || {})"/>
        </form>
    </div>
</template>