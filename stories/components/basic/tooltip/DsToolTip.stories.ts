import DsTooltip from "../../../../components/DesignSystem/components/basic/tooltip/DsTooltip.vue";
import DsButton from "../../../../components/DesignSystem/components/basic/button/DsButton.vue";
import DsInput from "../../../../components/DesignSystem/components/form/input/DsInput.vue";


export default {
    title: "Basic/Tooltip",
    component: DsTooltip,
    tags: ["autodocs"],
    argTypes: {
        text: {
            description: "Text of the tooltip",
        },
        position: {
            description: "Position of the tooltip",
        },
        default: {
            description: "Wrapper any component",
        }
    },
};

const Template = (args: any) => ({
    components: {DsTooltip, DsButton},
    setup() {


        return {args};
    },

    template: `
        <div class="container">
            <DsTooltip text="Este es un tooltip de ejemplo">
                <DsButton>Hover me</DsButton>
            </DsTooltip>
        </div>
    `,
});
export const Default = Template.bind({});
Default.args = {};

const BottomTemplate = (args: any) => ({
    components: {DsTooltip, DsButton},
    setup() {


        return {args};
    },

    template: `
        <div class="container">
            <DsTooltip position="bottom" text="Este es un tooltip de ejemplo, texto por debajo">
                <DsButton>Hover me</DsButton>
            </DsTooltip>
        </div>
    `,
});

export const BottomExample = BottomTemplate.bind({});
BottomExample.args = {};

const OtherComponentTemplate = (args: any) => ({
    components: {DsTooltip, DsInput},
    setup() {


        return {args};
    },

    template: `
        <div class="container">
            <DsTooltip text="Tooltip en otro componente">
                <DsInput/>
            </DsTooltip>
        </div>
    `,
});
export const OtherComponent = OtherComponentTemplate.bind({});
OtherComponent.args = {};

const ThemeTemplate = (args: any) => ({
    components: {DsTooltip, DsInput},
    setup() {


        return {args};
    },

    template: `
        <div class="container">
            <DsTooltip theme="dark" text="Tooltip con color oscuro">
                <DsInput/>
            </DsTooltip>
        </div>
    `,
});
export const Theme = ThemeTemplate.bind({});
Theme.args = {};




