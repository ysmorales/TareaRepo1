import {ref} from "vue";
import type {IMeta, ITimeChangeRequest} from "../../../../components/DesignSystem/interfaces/elements";
import type {ITableColumnData} from "../../../../components/DesignSystem/components/basic/table/interface";
import TableWrapperOnlyHistory from "./TableWrapperOnlyHistory.vue";
import DsCard from "../../../../components/DesignSystem/components/container/card/DsCard.vue";
import {toLocaleDate} from "../../../../components/DesignSystem/utils/date";
import {defineEmits} from "vue";
import DsExampleCard from "../../container/time-line/DsExampleCard.vue";


export default {
    methods: {toLocaleDate},
    components: {DsExampleCard, DsCard},
    title: "Basic/TableWrapper",
    component: TableWrapperOnlyHistory,
    tags: ["autodocs"],
    argTypes: {
        data: {
            description: "Data to be displayed in the table",
            table: {
                type: {
                    summary: "object",
                },
            },
        },
        columns: {
            description: "Columns to be displayed in the table",
            table: {
                type: {
                    summary: "object",
                },
            },
        },
        error: {
            description: "Error message to be displayed",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        loading: {
            description: "Loading state of the table",
            table: {
                type: {
                    summary: "boolean",
                },
            },
        },
        othersProps: {
            description: "Other props to be passed to the table",
            table: {
                type: {
                    summary: "object",
                },
            },
        },
        eventsProps: {
            description: "Events props to be passed to the table",
            table: {
                type: {
                    summary: "object",
                },
            },
        },
        noUpdateDataOnPagination: {
            description: "No update data on pagination",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        getData: {
            description: "Function to get data",
            table: {
                type: {
                    summary: "function",
                },
            },
        },
        getPaginator: {
            description: "Function to get paginator",
            table: {
                type: {
                    summary: "function",
                },
            },
        },
        view: {
            description: "Triggered when an item is viewed",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        pageChange: {
            description: "Triggered when the page is changed",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        itemsPerPageChange: {
            description: "Triggered when the number of items per page is changed",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        edit: {
            description: "Triggered when an item is edited",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        addRow: {
            description: "Triggered when a new row is added",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        multiDelete: {
            description: "Triggered when multiple items are deleted",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        name: {
            description: "Slot to render custom actions",
            table: {
                type: {
                    summary: "string",
                },
            },
        }
    },
};

const Template = (args: any) => ({
    components: {TableWrapperOnlyHistory},
    setup() {
        const loading = ref(false);

        function getData(detail: any): any[] {
            return detail.data;
        }

        function getPaginator(data: any): IMeta {
            return data.paginationMeta;
        }

        const exampleColumns: ITableColumnData[] = [
            {
                id: 1,
                title: 'Name',
                key: 'name',
            },
            {
                id: 2,
                title: 'Email',
                key: 'email',
            },
            {
                id: 3,
                title: 'Profile Picture',
                key: 'profilePicture',
            },
            {
                id: 4,
                title: 'Status',
                key: 'status',
            },
            {
                id: 5,
                title: 'Actions',
                key: 'actions',
                dataType: 'string',
                size: '30%',
                actions: {
                    delete: true,
                    edit: true,
                    view: true,
                    type: 'button',
                    labels: {
                        delete: 'Delete',
                        edit: 'Edit',
                        view: 'View',
                    },
                },
            },
        ];

        const exampleData = {
            data: [
                {
                    name: 'John Doe',
                    email: 'alice.johnson@example.com',
                    profilePicture: 'https://example.com/bob.jpg',
                    status: 'Active',
                },
                {
                    name: 'Jane Smith',
                    email: 'alice.johnson@example.com',
                    profilePicture: 'https://example.com/bob.jpg',
                    status: 'Inactive',
                },
                {
                    name: 'Alice Johnson',
                    email: 'alice.johnson@example.com',
                    profilePicture: 'https://example.com/bob.jpg',
                    status: 'Pending',
                    actions: {},
                },
                {
                    name: 'Bob Brown',
                    email: 'alice.johnson@example.com',
                    profilePicture: 'https://example.com/bob.jpg',
                    status: 'Active',
                    actions: {},
                },
            ],
            paginationMeta: {
                current_page: 1,
                from: 1,
                last_page: 10,
                links: [
                    {url: null, label: 'Previous', active: false},
                    {url: 'http://example.com?page=1', label: '1', active: true},
                    {url: 'http://example.com?page=2', label: '2', active: false},
                    {url: 'http://example.com?page=3', label: '3', active: false},
                    {url: 'http://example.com?page=4', label: '4', active: false},
                    {url: 'http://example.com?page=5', label: '5', active: false},
                    {url: 'http://example.com?page=6', label: '6', active: false},
                    {url: 'http://example.com?page=7', label: '7', active: false},
                    {url: 'http://example.com?page=8', label: '8', active: false},
                    {url: 'http://example.com?page=9', label: '9', active: false},
                    {url: 'http://example.com?page=10', label: '10', active: false},
                    {url: 'http://example.com?page=2', label: 'Next', active: false},
                ],
                path: 'http://example.com',
                per_page: 10,
                to: 10,
                total: 100,
            },
        };

        return {args, loading, getData, getPaginator, exampleColumns, exampleData};
    },

    template: `
        <div class="container">
            <TableWrapperOnlyHistory
                :data="exampleData"
                :columns="exampleColumns"
                :get-data="getData"
                :get-paginator="getPaginator"
                :loading="loading"
            />
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
    docs: {
        description: {
            story:
                'This component handles table pagination generically using query parameters. It allows for seamless navigation and data management within the table.',
        },
        source: {
            code: `
<script lang="ts" setup>
import DsTableWrapper from "~/components/DesignSystem/components/basic/table-wrapper/DsTableWrapper.vue";
import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";
import type {IMeta} from "~/components/DesignSystem/interfaces/elements";

const loading = ref(false);

const exampleColumns: ITableColumnData[] = [
    {
        id: 1,
        title: 'Name',
        key: 'name',
    },
    {
        id: 2,
        title: 'Email',
        key: 'email',
    },
    {
        id: 3,
        title: 'Profile Picture',
        key: 'profilePicture',
    },
    {
        id: 4,
        title: 'Status',
        key: 'status',
    },
    {
        id: 5,
        title: 'Actions',
        key: 'actions',
        dataType: 'string',
        size: '30%',
        actions: {
            delete: true,
            edit: true,
            view: true,
            type: 'button',
            labels: {
                delete: 'Delete',
                edit: 'Edit',
                view: 'View',
            },
        },
    },
];

const exampleData = {
    data: [
        {
            name: 'John Doe',
            email: 'alice.johnson@example.com',
            profilePicture: 'https://example.com/bob.jpg',
            status: 'Active',
        },
        {
            name: 'Jane Smith',
            email: 'alice.johnson@example.com',
            profilePicture: 'https://example.com/bob.jpg',
            status: 'Inactive',
        },
        {
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            profilePicture: 'https://example.com/bob.jpg',
            status: 'Pending',
            actions: {},
        },
        {
            name: 'Bob Brown',
            email: 'alice.johnson@example.com',
            profilePicture: 'https://example.com/bob.jpg',
            status: 'Active',
            actions: {},
        },
    ], paginationMeta: {
        current_page: 1,
        from: 1,
        last_page: 10,
        links: [
            {url: null, label: 'Previous', active: false},
            {url: 'http://example.com?page=1', label: '1', active: true},
            {url: 'http://example.com?page=2', label: '2', active: false},
            {url: 'http://example.com?page=3', label: '3', active: false},
            {url: 'http://example.com?page=4', label: '4', active: false},
            {url: 'http://example.com?page=5', label: '5', active: false},
            {url: 'http://example.com?page=6', label: '6', active: false},
            {url: 'http://example.com?page=7', label: '7', active: false},
            {url: 'http://example.com?page=8', label: '8', active: false},
            {url: 'http://example.com?page=9', label: '9', active: false},
            {url: 'http://example.com?page=10', label: '10', active: false},
            {url: 'http://example.com?page=2', label: 'Next', active: false}
        ],
        path: 'http://example.com',
        per_page: 10,
        to: 10,
        total: 100
    }
};

function getData(
    detail: any,
): any[] {
    return detail.data
}

function getPaginator(data: any): IMeta {
    return data.paginationMeta
}
</script>

<template>
    <DsTableWrapper :columns="exampleColumns" :data="exampleData" :get-data="getData" :get-paginator="getPaginator"
                    :loading="loading"/>
</template>
`,
        },
    },
};

const CardTemplate = (args: any) => ({
    components: {TableWrapperOnlyHistory, DsCard},
    setup() {
        const loading = ref(false);
        const emit = defineEmits(["view"]);

        const exampleColumns: ITableColumnData[] = [
            {
                id: 1,
                title: 'Name',
                key: 'name',
            },
            {
                id: 2,
                title: 'Email',
                key: 'email',
            },
            {
                id: 3,
                title: 'Profile Picture',
                key: 'profilePicture',
            },
            {
                id: 4,
                title: 'Status',
                key: 'status',
            },
            {
                id: 5,
                title: 'Actions',
                key: 'actions',
                dataType: 'string',
                size: '30%',
                actions: {
                    delete: true,
                    edit: true,
                    view: true,
                    type: 'button',
                    labels: {
                        delete: 'Delete',
                        edit: 'Edit',
                        view: 'View',
                    },
                },
            },
        ];

        const exampleData = {
            data: [
                {
                    name: 'John Doe',
                    email: 'alice.johnson@example.com',
                    date: '01-Noviembre-2025',
                    url_image: './images/imagenchileatiende.png',
                    status: 'Active',
                    city: 'Santiago'
                },
                {
                    name: 'Jane Smith',
                    email: 'alice.johnson@example.com',
                    date: '05-Noviembre-2025',
                    city: 'Talca',
                    url_image: './images/imagenchileatiende.png',
                    status: 'Inactive',
                },
                {
                    name: 'Alice Johnson',
                    email: 'alice.johnson@example.com',
                    date: '06-Noviembre-2025',
                    url_image: './images/imagenchileatiende.png',
                    city: 'Arica',
                    status: 'Pending',
                    actions: {},
                },
                {
                    name: 'Bob Brown',
                    city: 'Temuco',
                    date: '07-Noviembre-2025',
                    email: 'alice.johnson@example.com',
                    url_image: './images/imagenchileatiende.png',
                    status: 'Active',
                    actions: {},
                },
            ],
            paginationMeta: {
                current_page: 1,
                from: 1,
                last_page: 10,
                links: [
                    {url: null, label: 'Previous', active: false},
                    {url: 'http://example.com?page=1', label: '1', active: true},
                    {url: 'http://example.com?page=2', label: '2', active: false},
                    {url: 'http://example.com?page=3', label: '3', active: false},
                    {url: 'http://example.com?page=4', label: '4', active: false},
                    {url: 'http://example.com?page=5', label: '5', active: false},
                    {url: 'http://example.com?page=6', label: '6', active: false},
                    {url: 'http://example.com?page=7', label: '7', active: false},
                    {url: 'http://example.com?page=8', label: '8', active: false},
                    {url: 'http://example.com?page=9', label: '9', active: false},
                    {url: 'http://example.com?page=10', label: '10', active: false},
                    {url: 'http://example.com?page=2', label: 'Next', active: false},
                ],
                path: 'http://example.com',
                per_page: 10,
                to: 10,
                total: 100,
            },
        };
        const othersProps = {
            cardMode: true,
        };

        function handleView(item: ITimeChangeRequest) {
            emit("view", item);
        }


        return {args, loading, exampleColumns, exampleData, othersProps, handleView, toLocaleDate};
    },

    template: `
        <div class="container">
            <TableWrapperOnlyHistory
                :data="exampleData"
                :get-data="detail => detail.data"
                :get-paginator="detail => detail.paginationMeta"
                :loading="loading"
                :others-props="othersProps"
            >
                <template #card-loader>
                    <div class="w-full">
                        <div
                            v-for="idx in 3"
                            :key="idx"
                            class="shadow rounded-md p-4 w-full mt-4 bg-slate-50"
                        >
                            <div class="animate-pulse flex space-x-4">
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="h-9 bg-slate-200 rounded w-[40%]"/>
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-4 w-[50%]">
                                            <div class="h-2 bg-slate-200 rounded col-span-1"/>
                                            <div class="h-2 bg-slate-200 rounded col-span-2"/>
                                        </div>
                                        <div class="h-2 bg-slate-200 rounded w-[20%]"/>
                                        <div class="h-2 bg-slate-200 rounded w-[40%]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #card="rowItem">
                    <DsCard
                        :key="rowItem.row.id"
                        :final-link="{text: rowItem.row.city,url: 'https://www.google.com/',target: '_blank',icon: 'map-marker-alt'}"
                        :header-title="rowItem.row.name"
                        :image-left="true"
                        :link-image="{ src: rowItem.row.url_image }"
                        :text-info="rowItem.row.details"
                        :text-small-top="{
              info: 'Fecha límite para postulación: ',
              text: (toLocaleDate(rowItem.row.date) ??'Fecha no establecida'),
              icon: 'calendar',
            }"
                        target-url="_blank"
                        @view="() => handleView(rowItem.row)"
                    />
                </template>
            </TableWrapperOnlyHistory>
        </div>
    `,
});
export const CardTemplateExample = CardTemplate.bind({});
CardTemplateExample.args = {};
CardTemplateExample.parameters = {
    docs: {
        description: {
            story:
                'This component renders generic cards and utilizes the same props as DsWrapperTable, eliminating the need to manage pagination.',
        },
        source: {
            code: `
<script lang="ts" setup>
import type {IListCardData, ITimeChangeRequest} from "./components/DesignSystem/interfaces/elements";
import type {IError} from "./components/DesignSystem/interfaces/elements";
import TableWrapper from "./components/DesignSystem/components/basic/table-wrapper/DsTableWrapper.vue";
import {toLocaleDate} from "./components/DesignSystem/utils/date";
import {DsCard} from "./components/DesignSystem";

defineProps({
    data: {
        type: Object as () => IListCardData,
        required: true,
    },
    loading: {
        type: Boolean,
        required: true,
    },
    errorConnection: {
        type: Object as () => IError,
        default: null,
    },
    filterInfo: {
        type: Object,
        default: () => {
        },
    },
});

const emit = defineEmits(["view"]);

function handleView(item: ITimeChangeRequest) {
    emit("view", item);
}

const othersProps = {
    cardMode: true,
};

function getLocalData(detail: { data: object }): unknown {
    return detail?.data;
}

function getLocalPaginator(detail: { data: object; meta: object }): unknown {
    return detail?.meta;
}

const sampleData: IListCardData = {
    data: [
        {
            id: 1,
            end_date: "2023-12-31",
            city: "New York",
            stages: [],
            bases: "Base 1",
            requirements: "Requirement 1",
            assignment: "Assignment 1",
            url_image: "./images/imagenchileatiende.png",
            zoomImageUrl: "./images/imagenchileatiende.png",
            summary: "Summary 1",
            expireDate: "2023-12-31",
            link: "https://example.com/link1",
            finalLInk: {
                icon: "icon1",
                url: "https://example.com/finalLink1",
                text: "Final Link 1"
            },
            responsibilities: "Responsibilities 1",
            name: "Name 1",
            details: "Details 1",
            status: "Status 1",
            address: "Address 1",
            created_at: "2023-01-01",
            updated_at: "2023-01-02"
        },
        {
            id: 2,
            end_date: "2023-11-30",
            city: "Los Angeles",
            stages: [],
            bases: "Base 2",
            requirements: "Requirement 2",
            assignment: "Assignment 2",
            url_image: "./images/imagenchileatiende.png",
            zoomImageUrl: "./images/imagenchileatiende.png",
            summary: "Summary 2",
            expireDate: "2023-11-30",
            link: "https://example.com/link2",
            finalLInk: {
                icon: "icon2",
                url: "https://example.com/finalLink2",
                text: "Final Link 2"
            },
            responsibilities: "Responsibilities 2",
            name: "Name 2",
            details: "Details 2",
            status: "Status 2",
            address: "Address 2",
            created_at: "2023-02-01",
            updated_at: "2023-02-02"
        }
    ],
    meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        links: [
            {url: null, label: "Previous", active: false},
            {url: "https://example.com/page1", label: "1", active: true},
            {url: null, label: "Next", active: false}
        ],
        path: "https://example.com",
        per_page: 10,
        to: 2,
        total: 2
    }
};
</script>

<template>
    <div>
        <div class="mt-5 container">
            <TableWrapper
                :data="sampleData"
                :get-data="getLocalData"
                :get-paginator="getLocalPaginator"
                :loading="loading"
                :others-props="othersProps"
            >
                <template #card-loader>
                    <div class="w-full">
                        <div
                            v-for="idx in 3"
                            :key="idx"
                            class="shadow rounded-md p-4 w-full mt-4 bg-slate-50"
                        >
                            <div class="animate-pulse flex space-x-4">
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="h-9 bg-slate-200 rounded w-[40%]"/>
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-4 w-[50%]">
                                            <div class="h-2 bg-slate-200 rounded col-span-1"/>
                                            <div class="h-2 bg-slate-200 rounded col-span-2"/>
                                        </div>
                                        <div class="h-2 bg-slate-200 rounded w-[20%]"/>
                                        <div class="h-2 bg-slate-200 rounded w-[40%]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #card="rowItem">
                    <DsCard
                        :key="rowItem.row.id"
                        :final-link="{
              rowItem.row.city!,
              url: 'https://www.google.com/',
              target: '_blank',
              icon: 'map-marker-alt',
            }"
                        :header-title="rowItem.row.name"
                        :image-left="true"
                        :link-image="{ rowItem.row.url_image }"
                        :text-info="rowItem.row.details"
                        :text-small-top="{
              'Fecha límite para postulación: ',
              text: (toLocaleDate(rowItem.row.end_date) ??
                'Fecha no establecida') as string,
              icon: 'calendar',
            }"
                        target-url="_blank"
                        @view="() => handleView(rowItem.row)"
                    />
                </template>
            </TableWrapper>
        </div>
    </div>
</template>
`,
        },
    },
};

const OtherCardTemplate = (args: any) => ({
    components: {TableWrapperOnlyHistory, DsCard, DsExampleCard},
    setup() {
        const loading = ref(false);
        const emit = defineEmits(["view"]);

        const exampleColumns: ITableColumnData[] = [
            {
                id: 1,
                title: 'Name',
                key: 'name',
            },
            {
                id: 2,
                title: 'Email',
                key: 'email',
            },
            {
                id: 3,
                title: 'Profile Picture',
                key: 'profilePicture',
            },
            {
                id: 4,
                title: 'Status',
                key: 'status',
            },
            {
                id: 5,
                title: 'Actions',
                key: 'actions',
                dataType: 'string',
                size: '30%',
                actions: {
                    delete: true,
                    edit: true,
                    view: true,
                    type: 'button',
                    labels: {
                        delete: 'Delete',
                        edit: 'Edit',
                        view: 'View',
                    },
                },
            },
        ];

        const exampleData = {
            data: [
                {
                    name: 'John Doe',
                    email: 'alice.johnson@example.com',
                    date: '01-Noviembre-2025',
                    url_image: './images/imagenchileatiende.png',
                    status: 'Active',
                    city: 'Santiago'
                },
                {
                    name: 'Jane Smith',
                    email: 'alice.johnson@example.com',
                    date: '05-Noviembre-2025',
                    city: 'Talca',
                    url_image: './images/imagenchileatiende.png',
                    status: 'Inactive',
                },
                {
                    name: 'Alice Johnson',
                    email: 'alice.johnson@example.com',
                    date: '06-Noviembre-2025',
                    url_image: './images/imagenchileatiende.png',
                    city: 'Arica',
                    status: 'Pending',
                    actions: {},
                },
                {
                    name: 'Bob Brown',
                    city: 'Temuco',
                    date: '07-Noviembre-2025',
                    email: 'alice.johnson@example.com',
                    url_image: './images/imagenchileatiende.png',
                    status: 'Active',
                    actions: {},
                },
            ],
            paginationMeta: {
                current_page: 1,
                from: 1,
                last_page: 10,
                links: [
                    {url: null, label: 'Previous', active: false},
                    {url: 'http://example.com?page=1', label: '1', active: true},
                    {url: 'http://example.com?page=2', label: '2', active: false},
                    {url: 'http://example.com?page=3', label: '3', active: false},
                    {url: 'http://example.com?page=4', label: '4', active: false},
                    {url: 'http://example.com?page=5', label: '5', active: false},
                    {url: 'http://example.com?page=6', label: '6', active: false},
                    {url: 'http://example.com?page=7', label: '7', active: false},
                    {url: 'http://example.com?page=8', label: '8', active: false},
                    {url: 'http://example.com?page=9', label: '9', active: false},
                    {url: 'http://example.com?page=10', label: '10', active: false},
                    {url: 'http://example.com?page=2', label: 'Next', active: false},
                ],
                path: 'http://example.com',
                per_page: 10,
                to: 10,
                total: 100,
            },
        };
        const othersProps = {
            cardMode: true,
        };

        function handleView(item: ITimeChangeRequest) {
            emit("view", item);
        }


        return {args, loading, exampleColumns, exampleData, othersProps, handleView, toLocaleDate};
    },

    template: `
        <div class="container">
            <TableWrapperOnlyHistory
                :data="exampleData"
                :get-data="detail => detail.data"
                :get-paginator="detail => detail.paginationMeta"
                :loading="loading"
                :others-props="othersProps"
            >
                <template #card-loader>
                    <div class="w-full">
                        <div
                            v-for="idx in 3"
                            :key="idx"
                            class="shadow rounded-md p-4 w-full mt-4 bg-slate-50"
                        >
                            <div class="animate-pulse flex space-x-4">
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="h-9 bg-slate-200 rounded w-[40%]"/>
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-4 w-[50%]">
                                            <div class="h-2 bg-slate-200 rounded col-span-1"/>
                                            <div class="h-2 bg-slate-200 rounded col-span-2"/>
                                        </div>
                                        <div class="h-2 bg-slate-200 rounded w-[20%]"/>
                                        <div class="h-2 bg-slate-200 rounded w-[40%]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #card="rowItem">
                    <DsExampleCard/>
                </template>
            </TableWrapperOnlyHistory>
        </div>
    `,
});
export const OtherCardTemplateExample = OtherCardTemplate.bind({});
OtherCardTemplateExample.args = {};
OtherCardTemplateExample.parameters = {
    docs: {
        source: {
            code: `
<script lang="ts" setup>
import type {IListCardData, ITimeChangeRequest} from "./components/DesignSystem/interfaces/elements";
import type {IError} from "./components/DesignSystem/interfaces/elements";
import TableWrapper from "./components/DesignSystem/components/basic/table-wrapper/DsTableWrapper.vue";
import {toLocaleDate} from "./components/DesignSystem/utils/date";
import {DsCard} from "./components/DesignSystem";

defineProps({
    data: {
        type: Object as () => IListCardData,
        required: true,
    },
    loading: {
        type: Boolean,
        required: true,
    },
    errorConnection: {
        type: Object as () => IError,
        default: null,
    },
    filterInfo: {
        type: Object,
        default: () => {
        },
    },
});

const emit = defineEmits(["view"]);

function handleView(item: ITimeChangeRequest) {
    emit("view", item);
}

const othersProps = {
    cardMode: true,
};

function getLocalData(detail: { data: object }): unknown {
    return detail?.data;
}

function getLocalPaginator(detail: { data: object; meta: object }): unknown {
    return detail?.meta;
}

const sampleData: IListCardData = {
    data: [
        {
            id: 1,
            end_date: "2023-12-31",
            city: "New York",
            stages: [],
            bases: "Base 1",
            requirements: "Requirement 1",
            assignment: "Assignment 1",
            url_image: "./images/imagenchileatiende.png",
            zoomImageUrl: "./images/imagenchileatiende.png",
            summary: "Summary 1",
            expireDate: "2023-12-31",
            link: "https://example.com/link1",
            finalLInk: {
                icon: "icon1",
                url: "https://example.com/finalLink1",
                text: "Final Link 1"
            },
            responsibilities: "Responsibilities 1",
            name: "Name 1",
            details: "Details 1",
            status: "Status 1",
            address: "Address 1",
            created_at: "2023-01-01",
            updated_at: "2023-01-02"
        },
        {
            id: 2,
            end_date: "2023-11-30",
            city: "Los Angeles",
            stages: [],
            bases: "Base 2",
            requirements: "Requirement 2",
            assignment: "Assignment 2",
            url_image: "./images/imagenchileatiende.png",
            zoomImageUrl: "./images/imagenchileatiende.png",
            summary: "Summary 2",
            expireDate: "2023-11-30",
            link: "https://example.com/link2",
            finalLInk: {
                icon: "icon2",
                url: "https://example.com/finalLink2",
                text: "Final Link 2"
            },
            responsibilities: "Responsibilities 2",
            name: "Name 2",
            details: "Details 2",
            status: "Status 2",
            address: "Address 2",
            created_at: "2023-02-01",
            updated_at: "2023-02-02"
        }
    ],
    meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        links: [
            {url: null, label: "Previous", active: false},
            {url: "https://example.com/page1", label: "1", active: true},
            {url: null, label: "Next", active: false}
        ],
        path: "https://example.com",
        per_page: 10,
        to: 2,
        total: 2
    }
};
</script>

<template>
    <div>
        <div class="mt-5 container">
            <TableWrapper
                :data="sampleData"
                :get-data="getLocalData"
                :get-paginator="getLocalPaginator"
                :loading="loading"
                :others-props="othersProps"
            >
                <template #card-loader>
                    <div class="w-full">
                        <div
                            v-for="idx in 3"
                            :key="idx"
                            class="shadow rounded-md p-4 w-full mt-4 bg-slate-50"
                        >
                            <div class="animate-pulse flex space-x-4">
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="h-9 bg-slate-200 rounded w-[40%]"/>
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-4 w-[50%]">
                                            <div class="h-2 bg-slate-200 rounded col-span-1"/>
                                            <div class="h-2 bg-slate-200 rounded col-span-2"/>
                                        </div>
                                        <div class="h-2 bg-slate-200 rounded w-[20%]"/>
                                        <div class="h-2 bg-slate-200 rounded w-[40%]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #card="rowItem">
                 <DsExampleCard/>
                </template>
            </TableWrapper>
        </div>
    </div>
</template>
`,
        },
    },
};
