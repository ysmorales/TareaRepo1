import DsMenuAsideSmartPhone
    from "../../../../components/DesignSystem/components/navigation/menu-aside-smart-phone/DsMenuAsideSmartPhone.vue";
import {exampleData} from "./dataExample";

export default {
    title: "Navigation/MenuAsideSmartPhone",
    component: DsMenuAsideSmartPhone,
    tags: ["autodocs"],
    argTypes: {
        data: {
            description: "Data of Menu items",
        },
    },
};

export const Default = {
    args: {},
};
export const OtherData = {
    args: {
        data: exampleData,
    },
};
