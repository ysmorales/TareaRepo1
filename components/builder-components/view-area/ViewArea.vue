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

// const obtainFormValues = computed(() => {
//     return builderItems.value.reduce((acc, item) => {
//         if (item && typeof item.name === 'string' && typeof item.id === 'number') {
//             acc[item.name + item.id] = '';
//         }
//         return acc;
//     }, {} as Record<string, string>);
// });

const obtainFormRules = computed(() => {
    return builderItems.value.reduce((acc, item) => {
        if (item && typeof item.name === 'string' && typeof item.id === 'number') {
            acc[item.name + item.id] = {required};
        }
        return acc;
    }, {} as Record<string, any>);
});

const formValues: { [key: string]: any } = reactive({});

onMounted(() => {
    builderItems.value.forEach((item) => {
        if (item && typeof item.name === 'string' && typeof item.id === 'number') {
            formValues[item.name + item.id] = '';
        }
    });
});

watch(builderItems, (newVal) => {
    newVal.forEach((item) => {
        if (item && typeof item.name === 'string' && typeof item.id === 'number') {
            const key = item.name + item.id;
            if (!(key in formValues)) {
                formValues[key] = '';
            }
        }
    });
}, {deep: true});
const formRules: { [key: string]: any } = reactive(obtainFormRules);
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
        <component :is="item && item.name && components[item.name]" v-for="(item, index) in builderItems"
                   v-if="builderItems.length>0" :key="index" v-model="formValues[item.name! + item.id]"
                   v-bind="filterProps(item.props || {})"/>
        <DsButton @click="submitForm">Submit</DsButton>
    </div>
</template>