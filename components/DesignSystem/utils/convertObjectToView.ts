export interface FormItem {
    name: string;
    props: { [key: string]: string };
    id: number;
}

export function objectToVueCode(formItems: FormItem[]) {
    if (formItems.length == 0) {
        return "No se ha editado el formulario..."
    }

    let imports = [
        `import { reactive } from 'vue';`,
        `import { useVuelidate } from '@vuelidate/core';`,
        `import { required, minLength } from '@vuelidate/validators';`
    ];

    let vueCode = `<script setup lang="ts">\n`;
    vueCode += imports.join(' ') + '\n\n';

    let reactiveObject = 'const formValues = reactive({\n';
    formItems.forEach((item: FormItem, index: number) => {
        reactiveObject += `${item.name}${index}: '',\n`;
    });
    reactiveObject += '});\n';
    vueCode += reactiveObject;

    vueCode += `\nconst v$ = useVuelidate();\n\n`;

    formItems.forEach((item: FormItem, index: number) => {
        vueCode += `$: v$.value.formValues.${item.name}${index} = { required, minLength: minLength(3) };\n`;
    });

    vueCode += `</script>\n`;

    vueCode += `<template>\n<form>\n`;

    formItems.forEach((item: FormItem, index: number) => {
        vueCode += `<${item.name} v-model="formValues.${item.name}${index}"`;
        for (let prop in item.props) {
            if (item.props[prop] !== '') {
                vueCode += ` ${prop}="${item.props[prop]}"`;
            }
        }
        vueCode += ' />\n';
        vueCode += `<div v-if="v$.value.formValues.${item.name}${index}.$error" class="text-red-500">Please enter a valid value</div>\n`;
    });

    vueCode += `</form>\n</template>`;

    return vueCode;
}