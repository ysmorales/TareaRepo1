export interface FormItem {
	name: string;
	props: { [key: string]: string };
	id: number;
}

export function objectToVueCode(formItems: FormItem[]) {
	if (formItems.length == 0) {
		return 'No se ha editado el formulario...';
	}

	const imports = [
        `import { reactive } from 'vue';`,
        `import { useVuelidate } from '@vuelidate/core';`,
        `import { required, minLength } from '@vuelidate/validators';`,
	];

	// Crear un conjunto para almacenar los nombres de los componentes únicos
	const componentNames = new Set(formItems.map(item => item.name));

	// Agregar una importación para cada componente único
	const componentImports = Array.from(componentNames).join(', ');
	imports.push(`import { ${componentImports} } from "~/components/DesignSystem";`);

	let vueCode = `<script setup lang="ts">\n`;
	vueCode += imports.join(' ') + '\n\n';

	vueCode += `const emit = defineEmits(['submit', 'cancel']);\n\n`;

	let reactiveObject = 'const formValues = reactive({\n';
	formItems.forEach((item: FormItem, index: number) => {
		if (!item.name.startsWith('DsConfirmationButton')) {
			reactiveObject += `${item.name}${index}: '',\n`;
		}
	});
	reactiveObject += '});\n';
	vueCode += reactiveObject;

	let formRules = 'const formRules = reactive({\n';
	formItems.forEach((item: FormItem, index: number) => {
		if (!item.name.startsWith('DsConfirmationButton')) {
			formRules += `${item.name}${index}: { required},\n`;
		}
	});
	formRules += '});\n';
	vueCode += formRules;

	vueCode += `\nconst v$ = useVuelidate(formRules, formValues);\n\n`;

	vueCode += `function submitForm() {
    v$.value.$touch();
    if (!v$.value.$error) {
        emit('submit', formValues)
    } else {
        console.log('error')
    }
}\n`;

	vueCode += `function handleCancelForm() {
        emit('cancel')
}\n`;

	vueCode += `</script>\n`;

	vueCode += `<template>\n<form @submit.prevent="submitForm">\n`;

	formItems.forEach((item: FormItem, index: number) => {
		if (!item.name.startsWith('DsConfirmationButton')) {
			vueCode += `<${item.name} :error="v$.${item.name}${index}.$error" v-model="formValues.${item.name}${index}"`;
			for (const prop in item.props) {
				if (item.props[prop] !== '') {
					vueCode += ` ${prop}="${item.props[prop]}"`;
				}
			}
			vueCode += ' />\n';
		}
	});

	// Agregar DsConfirmationButton al final del formulario
	formItems.forEach((item: FormItem, index: number) => {
		if (item.name.startsWith('DsConfirmationButton')) {
			vueCode += `<${item.name} @cancel="handleCancelForm"`;
			for (const prop in item.props) {
				if (item.props[prop] !== '') {
					vueCode += ` ${prop}="${item.props[prop]}"`;
				}
			}
			vueCode += ' />\n';
		}
	});

	vueCode += `</form>\n</template>`;

	return vueCode;
}
