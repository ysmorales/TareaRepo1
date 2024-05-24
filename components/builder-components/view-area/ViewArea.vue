<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
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
import {required} from "@vuelidate/validators";

const store = useCounterStore()
const {builderItems} = toRefs(store)

const components: { [key: string]: any } = {
    DsInput,
    DsTextArea,
    DsButton,
    DsSelect,
    DsConfirmationButton
}


const formValues: { [key: string]: any } = reactive({});
const formRules: { [key: string]: any } = reactive({});

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
            formRules[item.name + item.id] = {required};
        }
    });
});

watch(builderItems, (newVal) => {
    newVal.forEach((item) => {
        if (item && typeof item.name === 'string' && typeof item.id === 'number' && !item.name.includes('DsConfirmationButton')) {
            const key = item.name + item.id;
            if (!(key in formRules)) {
                formRules[key] = {required};
            }
        }
    });
}, {deep: true});
const $V = useVuelidate(formRules, formValues);

function submitForm() {
    $V.value.$touch();
    console.log(formValues)
    console.log(formRules)
    if (!$V.value.$error) {
        console.log(formValues)
        console.log(formRules)
    } else {
        console.log('error')
    }
}


</script>

<template>
    <h1>valores del form</h1>
    {{ JSON.stringify(formValues) }}
    <h1>valores de validación</h1>
    {{ JSON.stringify(formRules) }}
    <div
        class="w-full flexp-5 flex-col  items-center justify-center border border-gray-300 shadow-md rounded-md p-5 min-h-[400px]"
    >
        <div v-if="builderItems.length==0" class="flex flex-col h-full justify-center items-center">
            <DsTypography>Area de previsualización, no se ha adicionado componentes aún.</DsTypography>
        </div>
        <form @submit.prevent="submitForm">
            <component :is="components[item.name!]"
                       v-for="(item, index) in builderItems"
                       v-if="builderItems.length>0"
                       :key="index" v-model="formValues[item.name! + item.id]"
                       :error="$V[item.name! + item.id]?.$error ? $V[item.name! + item.id].required.$message : ''"
                       v-bind="filterProps(item.props || {})"/>
        </form>
    </div>
</template>