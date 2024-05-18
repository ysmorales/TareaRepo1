export interface FormItem {
    name: string;
    props: { [key: string]: string };
    id: number;
}

export function objectToVueCode(formItems: FormItem[]) {
    let vueCode = `<template>\n<form>\n`;

    formItems.forEach((item: FormItem) => {
        vueCode += `<${item.name}`;
        for (let prop in item.props) {
            vueCode += ` ${prop}="${item.props[prop]}"`;
        }
        vueCode += ' />\n';
    });

    vueCode += `</form>\n</template>`;

    return vueCode;
    // return 'hola!!';
}