import DsConfirmItem from "../../../../components/DesignSystem/components/layout/Confirm-item/DsConfirmItem.vue";


export default {
    title: "Layout/ConfirmItem",
    component: DsConfirmItem,
    tags: ["autodocs"],
    argTypes: {
        subItems: {
            description: "Items to show in the confirm items",
        },
        loading: {
            description: "Shows/hides loading skeleton.",
        },
        title: {
            description: "Title of the confirm item",
        }
    },
};

export const Default = {
    args: {},
};
export const Title = {
    args: {
        title: "Title",
    },
};
export const OtherSubItems = {
    args: {
        title: "Otros sub items",
        subItems: [
            {
                label: "Nombre",
                value: "Juan Pérez",
            },
            {
                label: "Edad",
                value: "30 años",
            },
            {
                label: "Dirección",
                value: "Calle Falsa 123",
            }
        ]
    },
};
export const AddClassToTheItems = {
    args: {
        title: "Otros sub items",
        subItems: [
            {
                label: "Nombre",
                value: "Juan Pérez",
                class: "text-red-500",
            },
            {
                label: "Edad",
                value: "30 años",
                class: "text-blue-500",
            },
            {
                label: "Dirección",
                value: "Calle Falsa 123",
                class: "text-green-500",
            }
        ]
    },
};

