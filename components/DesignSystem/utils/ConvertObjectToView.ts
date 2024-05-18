export interface FormItem {
    name: string;
    props: { [key: string]: string };
    id: number;
}

export function objectToVueCode(formItems: FormItem[]) {
    if (formItems.length == 0) {
        return "No se ha editado el formulario..."
    }

    let vueCode = `<template>\n<form>\n`;

    formItems.forEach((item: FormItem) => {
        vueCode += `<${item.name}`;
        for (let prop in item.props) {
            if (item.props[prop] !== '') {
                vueCode += ` ${prop}="${item.props[prop]}"`;
            }
        }
        vueCode += ' />\n';
    });

    vueCode += `</form>\n</template>`;

    return vueCode;
}