import DsImageMap from "../../../../components/DesignSystem/components/media/image-map/DsImageMap.vue";

export default {
    title: "Media/ImageMap",
    component: DsImageMap,
    tags: ["autodocs"],
    argTypes: {
        center: {
            description: " Center the image map",
        },
        zoom: {
            description: "Zoom the image map"
        },
        color: {
            description: "Color of the image map"
        },
        label: {
            description: "Label of the image map"
        },
        srcDefault: {
            description: "Default image map"
        }
    },
};

export const Default = {
    args: {},
};

