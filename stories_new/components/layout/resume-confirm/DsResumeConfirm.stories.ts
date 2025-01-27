import DsResumeConfirm from "../../../../components/DesignSystem/components/pages/resume-confirm/DsResumeConfirm.vue";

export default {
    title: "Layout/ResumeConfirm",
    component: DsResumeConfirm,
    tags: ["autodocs"],
    argTypes: {
        items: {
            description: "Items to show in the resume confirm",
        },

        loading: {
            description: "Shows/hides loading skeleton.",
        },
    },
};

export const Default = {
    args: {},
};
export const ResumeConfirmConTag = {
    args: {
        items: [
            {
                title: "Resume confirm con tag",
                subItems: [
                    {
                        label: "Con tag",
                        value: "value",
                        isTag: true,
                        tagColor: "success",
                    },
                ],
            },
        ],
    },
};
export const Loading = {
    args: {
        loading: true,
        items: [
            {
                title: "Primer panel",
                subItems: [
                    {
                        label: "Con tag",
                        value: "value",
                        isTag: true,
                        tagColor: "success",
                    },
                ],
            },
            {
                title: "Segundo panel",
                subItems: [
                    {
                        label: "Con tag",
                        value: "value",
                        isTag: true,
                        tagColor: "success",
                    },
                ],
            },
        ],
    },
};




