import {commonArgTypes, commonInputArgTypes} from '../../../common/common';
import {DsSelect} from '../../../../components/DesignSystem';
import {ref} from "vue";

export default {
    title: 'Form/Select',
    component: DsSelect,
    tags: ['autodocs'],

    argTypes: {
        ...commonArgTypes,
        ...commonInputArgTypes,
        rounded: {
            description: 'Enables rounded corners for the select component.',
        },
        multiple: {
            description: 'Allows multiple selections within the select component.',
        },
        labelStyle: {
            description: 'Defines the style for the label of the select component.',
        },
        exampleText: {
            description: 'Displays example text within the select component.',
        },
        option: {
            description: 'Specifies the options available for selection.',
        },
        addOption: {
            description: 'Enables the option to add new items to the select component.',
        },
        loading: {
            description: 'Indicates whether the select component is in a loading state.',
        },

    },
};

export const Default = {
    args: {},
};
export const Error = {
    args: {
        error: 'Campo requerido.',
    },
};
export const Label = {
    args: {
        label: 'Seleccione la opción:',
    },
};
export const Size = {
    args: {
        size: 'small',
    },
};
export const Rounded = {
    args: {
        rounded: true,
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const HelpMessage = {
    args: {
        helpMessage: 'Text help',
    },
};
export const Option = {
    args: {
        option: [
            {value: 1, text: 'Other option 1'},
            {value: 2, text: 'Other option 2'},
            {value: 3, text: 'Other option 3'},
        ],
    },
};

export const MultiOptions = {
    args: {
        multiple: true,
    },
};

const Template = args => ({
    components: {DsSelect},
    setup() {
        const selectValue = ref([]); // Declara una ref como una variable reactiva
        return {args, selectValue};
    },
    template: `
        {{selectValue}}
        <div style="height: 200px">
            <DsSelect v-model="selectValue" multiple/> <!-- Usa esa ref aquí -->
        </div>
    `,
    methods: {
        handleClick() {
            // Aquí estás accediendo al valor de textAreaValue cuando haces clic en el botón
            // alert('Current value of textarea: ' + this.textAreaValue);
        },
    },
});

export const MultiSelect = Template.bind({});
MultiSelect.args = {
    title: 'My account',
    userData: {name: 'guest', email: 'email not defined'},
    class: '',
};
MultiSelect.parameters = {
    docs: {
        source: {
            code: `
<script setup lang="ts">
const selectValue = ref([]); // Declara una ref como una variable reactiva
</script>
<template>
{{selectValue}}
<DsSelect v-model="selectValue" multiple/>
</template>
`,
        }
    },
};

const SecondTemplate = args => ({
    components: {DsSelect},
    setup() {
        const selectValue = ref([]);
        const options = [
            {value: 'Option 1', text: 'Other option 1'},
            {value: 'Option 2', text: 'Other option 2'},
            {value: 'Option 3', text: 'Other option 3'},
            {value: 'Option 4', text: 'Other option 4'},
            {value: 'Option 5', text: 'Other option 5'},
            {value: 'Option 6', text: 'Other option 6'},
        ]
        return {args, selectValue, options};
    },
    template: `
        {{selectValue}}
        <div style="height: 350px">
            <DsSelect v-model="selectValue" multiple :option="options"/> <!-- Usa esa ref aquí -->
        </div>
    `,
    methods: {
        handleClick() {
            // Aquí estás accediendo al valor de textAreaValue cuando haces clic en el botón
            // alert('Current value of textarea: ' + this.textAreaValue);
        },
    },
});

export const OtherOptionsMultiSelect = SecondTemplate.bind({});
OtherOptionsMultiSelect.args = {
    title: 'My account',
    userData: {name: 'guest', email: 'email not defined'},
    class: '',
};
OtherOptionsMultiSelect.parameters = {
    docs: {
        source: {
            code: `
<script setup lang="ts">
const selectValue = ref([]); // Declara una ref como una variable reactiva
const options = [
            {value: 'Option 1', text: 'Other option 1'},
            {value: 'Option 2', text: 'Other option 2'},
            {value: 'Option 3', text: 'Other option 3'},
            {value: 'Option 4', text: 'Other option 4'},
            {value: 'Option 5', text: 'Other option 5'},
            {value: 'Option 6', text: 'Other option 6'},
        ]
</script>
<template>
{{selectValue}}
<DsSelect v-model="selectValue" multiple :option="options"/>
</template>
`,
        }
    },
};
