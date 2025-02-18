import LinkDownload from "~/components/generic-components/LinkDownload.vue";
import { createObjectUrl } from "~/components/DesignSystem/utils/createObjectUrl";

export const getLinkFileToDownload = (label: string, fileUp: File | string) => ({
    label,
    value: isNotEmpty(fileUp),
    rowRender: {
        component: LinkDownload,
        getProps: () => {
            return {
                link: fileUp?.name ? createObjectUrl(fileUp) : fileUp,
                title: (fileUp && !fileUp?.name) ? fileUp?.split(/(\\|\/)/g).pop() : fileUp?.name
            };
        },
    },
})