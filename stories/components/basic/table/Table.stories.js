import DsTable from '../../../../components/DesignSystem/components/basic/table/DsTable.vue';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';
import {miniDataTableExample} from '../../../../components/DesignSystem/components/basic/table/dataExample.ts';
import {exampleColumns} from './data.ts';

export default {
    components: {DsTable, DsButton},
    title: 'Basic/Table',
    component: DsTable,
    tags: ['autodocs'],
    argTypes: {
        border: {
            description: 'Adds a border to the table.',
        },
        addButtonLabel: {
            description: 'Label for the add button.',
        },
        deleteAllButtonHide: {
            description: 'Hide button delete.',
        },
        disabledPagination: {
            description: 'Disables the pagination component.',
        },
        itemsPerPageOptions: {
            description: 'An array of items per page options.',
        },
        paginationBorder: {
            description: 'Adds a border to the pagination component.',
        },
        messageEmptyComponent: {
            description: 'Message to display when the table is empty.',
        },
        iconEmptyComponent: {
            description: 'Icon to display when the table is empty.',
        },
        deleteAllButtonLabel: {description: 'Label for the delete button.'},
        addRow: {description: 'Event that is emitted when a new row is added.'},
        checkboxChange: {
            description: 'Event that is emitted when a checkbox is changed.',
        },
        parentAllCheckBoxChange: {
            description: 'Event that is emitted when the parent checkbox is changed.',
        },
        columns: {
            description:
                'An array of column objects. Each object can have a `title` and `key` property. Default is the `exampleColumn`.',
            table: {
                type: {
                    summary: 'IExampleColumn[]',
                    detail: 'Array of IExampleColumn objects',
                },
                defaultValue: {summary: 'exampleColumn'},
            },
        },
        data: {
            description:
                'An array of data objects. This is the data for the table which is displayed.',
            table: {
                type: {summary: 'any[]', detail: 'Array of any objects'},
                defaultValue: {
                    summary: '[{dessert: "Dessert 1", ...}, {dessert: "Dessert 2", ...}]',
                },
            },
        },
        pagination: {
            description:
                'The pagination property in your table component is used to handle the pagination of the table data.'
                + ' It uses an object that follows the IPagination interface for pagination behavior. If a pagination object '
                + 'is provided, the table component will display pagination controls based on its specifications. If not, no pagination'
                + ' will be shown.',
        },
        pageChange: {
            description:
                'Event that is emitted when the page changes. Provides the new page number as a parameter.',
        },
        loading: {
            description: 'Controls the loading state of data in the component.',
        },
        checkboxSelection: {
            description:
                'Enables or controls the checkbox selection feature within the component.',
        },
        sort: {
            description:
                'Enables or controls the sorting functionality within the component.',
        },
        striped: {
            description: 'Adds zebra-striping to any table row within the component.',
        },
        itemsPerPageChange: {
            description:
                'Event that is emitted when the number of items per page is changed. Provides the new item count as a parameter.',
        },
        reload: {
            description:
                'Event that is emitted when data is refreshed. This usually occurs when a user initiates a manual refresh.',
        },
        view: {
            description:
                'Event that is emitted when a specific item or detail is viewed. Provides the viewed item as a parameter.',
        },
        edit: {
            description:
                'Event that is emitted when an item starts being edited. Provides the item being edited as a parameter.',
        },
        delete: {
            description:
                'Event that is emitted when an item is requested to be deleted. It provides the item to be deleted as a parameter.',
        },
        multiDelete: {
            description:
                'Event that is emitted when multiple items are requested to be deleted. Provides an array of the selected items to be deleted as a parameter.',
        },
        filter: {
            description:
                'Event that is emitted when a filter operation is performed. Provides the filter criteria used for the operation as a parameter.',
        },
        hideCheckBox: {
            description: 'Hides the checkbox selection column in the table.',
        },
        error: {
            description:
                'Displays an error message in the table when there is a connection problem.',
        },
        class: {
            description:
                'Adds a custom class to the table component. This can be used to apply custom styles to the table.',
        },
        filterInfo: {
            description:
                'An object that contains the filter information for the table filter.',
        },
    },
};

export const Default = {
    args: {},
};
export const ExternalPagination = {
    args: {
        data: miniDataTableExample,
        pagination: {
            totalItems: 10,
            currentPage: 1,
            itemPerPage: 10,
        },
    },
    parameters: {
        docs: {
            description: {
                story:
                    'This story demonstrates how the table handles external paging. When a paging object is provided to the table, '
                    + 'it assumes that paging is being handled externally, for example by the backend server. In this case, the table '
                    + 'will not attempt to paginate the data internally, but will instead display the data as it is given and use the '
                    + 'pagination object to control which page is currently being displayed and how many items there are in total. '
                    + 'This is useful when working with large data sets that would be inefficient to handle on the client.',
            },
        },
    },
};
export const Loading = {
    args: {
        loading: true,
    },
};
export const EmptyComponent = {
    args: {
        data: [],
        pagination: {
            totalItems: 200,
            currentPage: 1,
            itemPerPage: 5,
            itemsPerPageOptions: [5, 10, 50],
        },
    },
};
export const ColumnActionDefault = {
    args: {
        columns: [
            {title: 'Name1', key: 'name'},
            {title: 'Name2', key: 'name2'},
            {title: 'Name3', key: 'name3'},
            {title: 'Name4', key: 'name4'},
            {title: 'Name5', key: 'name5'},
            {title: 'Name6', key: 'name6'},
            {title: 'Name7', key: 'name5'},
            {title: 'Name8', key: 'name6'},
            {title: 'Actions', actions: {edit: true, delete: true, view: true}},
        ],
        data: [
            {
                name: 'Dessert 1',
                name2: 100,
                name3: 212,
                name4: 100,
                name5: 212,
                name6: 100,
                name7: 212,
                name8: 100,
            },
            {
                name: 'Dessert 2',
                name2: 200,
                name3: 112,
                name4: 200,
                name5: 212,
                name6: 100,
                name7: 212,
                name8: 100,
            },
        ],
        pagination: {
            totalItems: 200,
            currentPage: 1,
            itemPerPage: 5,
            itemsPerPageOptions: [5, 10, 50],
        },
    },
};
export const ConditionalActions = {
    args: {
        columns: [
            {title: 'Name1', key: 'name'},
            {title: 'Name2', key: 'name2'},
            {title: 'Name3', key: 'name3'},
            {title: 'Name4', key: 'name4'},
            {title: 'Name5', key: 'name5'},
            {title: 'Name6', key: 'name6'},
            {title: 'Name7', key: 'name5'},
            {title: 'Name8', key: 'name6'},
            {title: 'Actions', actions: {view: true}},
        ],
        data: [
            {
                name: 'Dessert 1',
                name2: 100,
                name3: 212,
                name4: 100,
                name5: 212,
                name6: 100,
                name7: 212,
                name8: 100,
            },
            {
                name: 'Dessert 2',
                name2: 200,
                name3: 112,
                name4: 200,
                name5: 212,
                name6: 100,
                name7: 212,
                name8: 100,
            },
        ],
        pagination: {
            totalItems: 200,
            currentPage: 1,
            itemPerPage: 5,
            itemsPerPageOptions: [5, 10, 50],
        },
    },
};
const Template = args => ({
    components: {DsTable, DsButton},
    setup() {
        // Declara una ref como una variable reactiva
        return {args};
    },
    template: `
        <DsTable
            :columns="[
      { title: 'Name1', key: 'name' },
      { title: 'Name2', key: 'name2' },
      { title: 'Name3', key: 'name3' },
      { title: 'Name4', key: 'name4' },
      { title: 'Name5', key: 'name5' },
      { title: 'Name6', key: 'name6' },
      { title: 'Name7', key: 'name5' },
      { title: 'Name8', key: 'name6' },
      { title: 'Actions', actions: { edit: true } },
      ]"
            :data=" [
          {
          name: 'Dessert 1',
      name2: 100,
      name3: 212,
      name4: 100,
      name5: 212,
      name6: 100,
      name7: 212,
      name8: 100,
      },
      {
      name: 'Dessert 2',
      name2: 200,
      name3: 112,
      name4: 200,
      name5: 212,
      name6: 100,
      name7: 212,
      name8: 100,
      },
      ]"
        >
            <template v-slot:actions="{ row }">
                <div class="flex">
                    <DsButton color="tertiary" @click="handleAction(row)">Custom</DsButton>
                </div>
            </template>
        </DsTable>
    `,
    methods: {
        handleAction(row) {
            alert(JSON.stringify(row));
        },
    },
});
export const CustomAction = Template.bind({});
CustomAction.args = {};
CustomAction.parameters = {
    docs: {
        source: {
            code: `
<script setup lang="ts">

  handleAction(row) {
      alert(JSON.stringify(row));
    }
</script>
<template>
   <DsTable
      >
        <template v-slot:actions="{ row }">
          <div class="flex">
            <DsButton color="tertiary" @click="handleAction(row)">Custom</DsButton>
          </div>
        </template>
      </DsTable>
   </template>
`,
        },
    },
};
const MultiDeleteAlert = args => ({
    components: {DsTable, DsButton},
    setup() {
        return {args};
    },
    template: `
        <DsTable
            :columns="args.columns"
            :data="args.data"
            @multiDelete="handleMultiDelete"
            :checkboxSelection="true"
        >
        </DsTable>
    `,
    methods: {
        handleMultiDelete(selectedRows) {
            alert(JSON.stringify(selectedRows));
        },
    },
});
export const MultiDeleteExample = MultiDeleteAlert.bind({});
MultiDeleteExample.args = {
    columns: [
        {title: 'Name1', key: 'name1'},
        {title: 'Name2', key: 'name2'},
        // Agregar columnas adicionales...
    ],
    data: [
        {name1: 'Datasample 1', name2: 'Datasample 1'},
        {name1: 'Datasample 2', name2: 'Datasample 2'},
        // Agregar datos adicionales...
    ],
};
MultiDeleteExample.parameters = {
    docs: {
        source: {
            code: `
<script setup lang="ts">
  handleMultiDelete(selectedRows) {
    alert(JSON.stringify(selectedRows));
  }
</script>
<template>
   <DsTable
      :columns="args.columns" 
      :data="args.data" 
      @multiDelete="handleMultiDelete"
      :checkboxSelection="true"
   >
   </DsTable>
</template>
`,
        },
    },
};

const FilterTemplate = args => ({
    components: {DsTable, DsButton},
    setup() {
        return {args};
    },
    template: `
        <DsTable
            sort
            striped
            :columns="args.columns"
            :data="args.data"
            @multiDelete="handleMultiDelete"
            :checkboxSelection="true"
            @filter="handleFilter"
            :pagination="{
          totalItems: 200,
          currentPage: 1,
          itemPerPage: 5,
          itemsPerPageOptions: [5, 10, 50],
          }"
        >
        </DsTable>
    `,
    methods: {
        handleMultiDelete(selectedRows) {
            alert(JSON.stringify(selectedRows));
        },
        handleFilter(filter) {
            alert(JSON.stringify(filter));
        },
    },
});

export const FilterExample = FilterTemplate.bind({});

FilterExample.args = {
    columns: [
        {
            title: 'Name',
            key: 'name',
            filter: {filterType: 'text'},
        },
        {title: 'email', key: 'email'},
        {title: 'address', key: 'address'},
        // Agregar columnas adicionales...
    ],
    data: [
        {
            name: 'John Doe',
            email: 'john.doe@example.com',
            run: '12345',
        },
        {
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            run: '67890',
        },
        {
            name: 'Bill Smith',
            email: 'bill.smith@example.com',
            run: '98765',
        },
        // Añadir datos adicionales...
    ],
};

FilterExample.parameters = {
    docs: {
        description: {
            story: `
       ## Usage
\`\`\`typescript
import DsTable from "./components/DesignSystem/components/basic/table/DsTable.vue";
\`\`\`
First, you need to import the \`DsTable\` component into the component where you want to use it.

\`\`\`html
<DsTable :columns="columns" //put other props here
\`\`\`
You can now use the \`DsTable\` component in your template. You need to pass the required props to it. The \`columns\` prop is an array of objects, where each object represents a column in the table.

\`\`\`typescript
const column={
        columns: [
            {title: "Id", key: "id", size: "w-[2%]"},
            {title: "Nombre Completo", key: "fullName"},
            {title: "RUN", key: "run", filter: {filterType: 'run'}},
            {
                title: "Canal",
                key: "channel",
            },
            {
                title: "Estado",
                key: "status",
                filter: {filterType: 'select', config: [{value: '1', text: 'status1'}, {value: '2', text: 'status1'}]}
            },
            {title: "Rol", key: "role"},
            {title: "Acciones", actions: {edit: true}},
        ]
    }
}
\`\`\`
The \`columns\` data property should be an array of objects. Each object represents a column and should have a \`title\` and a \`key\` property. The \`title\` is the text that will be displayed in the column header, and the \`key\` is the property of the data objects that should be displayed in the column.


\`\`\`typescript
<DsTable :columns="columns" @filter="handleFilter" //put other props here

\`\`\`
The \`DsTable\` component emits a \`filter\` event when the user applies a filter. You can listen to this event and define a method to handle it. The \`filter\` event provides the current state of the filter form as a payload.

\`\`\`typescript
function handleFilter(filterData) {
        // filterData is an object that contains the current state of the filter form
        // You can now use this data to filter your table
    }
\`\`\`
That's it! You have now set up a filterable \`DsTable\` component. The table will automatically render input fields for the filters based on the \`
filterType\` you specified in the \`
columns\` prop. When the user applies a filter, your \`
handleFilter\` method will be called with the current state of the filter form.
  
      `,
        },
        source: {
            code: `
<script setup lang="ts">
  handleMultiDelete(selectedRows) {
    alert(JSON.stringify(selectedRows));
  }
  handleFilter(filter) {
    alert(JSON.stringify(filter));
  }
</script>
<template>
  <DsTable
    sort
    :columns="args.columns"
    :data="args.data"
    @multiDelete="handleMultiDelete"
    :checkboxSelection="true"
    @filter="handleFilter"
  >
  </DsTable>
</template>
`,
        },
    },
};

export const FullFilterTableExample = {
    args: {
        columns: exampleColumns,
        border: true,
        checkboxSelection: true,
        paginationBorder: true,
    },
};

export const Sort = {
    args: {
        sort: true,
    },
};

export const StripedTable = FilterTemplate.bind({});

StripedTable.args = {
    striped: true,
    columns: [
        {title: 'Name', key: 'name'},
        {title: 'Email', key: 'email'},
        {title: 'RUN', key: 'run'},
    ],
    data: [
        {name: 'John Doe', email: 'john.doe@example.com', run: '12345'},
        {name: 'Jane Doe', email: 'jane.doe@example.com', run: '67890'},
        {name: 'Bill Smith', email: 'bill.smith@example.com', run: '98765'},
        {name: 'Larry Johnson', email: 'larry.johnson@example.com', run: '11123'},
        {name: 'Sarah Connor', email: 'sarah.connor@example.com', run: '22234'},
        {
            name: 'Michael Jordan',
            email: 'michael.jordan@example.com',
            run: '33345',
        },
        {name: 'John Doe', email: 'john.doe@example.com', run: '12345'},
        {name: 'Jane Doe', email: 'jane.doe@example.com', run: '67890'},
        {name: 'Bill Smith', email: 'bill.smith@example.com', run: '98765'},
        {name: 'Larry Johnson', email: 'larry.johnson@example.com', run: '11123'},
        {name: 'Sarah Connor', email: 'sarah.connor@example.com', run: '22234'},
        {
            name: 'Michael Jordan',
            email: 'michael.jordan@example.com',
            run: '33345',
        },
    ],
};
export const DeleteAllButtonHide = {
    args: {
        columns: exampleColumns,
        deleteAllButtonHide: true,
        checkboxSelection: true,
    },
    parameters: {
        docs: {
            description: {
                story:
                    'This story demonstrates the use of the "deleteAllButtonHide" property. When "deleteAllButtonHide" is set to "true",'
                    + ' the button to delete all elements is hidden. The checkbox-selection property must be true as it is responsible for'
                    + ' activating this panel.',
            },
        },
    },
};

export const DisabledPagination = {
    args: {
        disabledPagination: true,
    },
    parameters: {
        docs: {
            description: {
                story:
                    'This story demonstrates the use of the "disabledPagination" property. When "disabledPagination" is set to "true", '
                    + 'the table pagination is disabled. This can be useful in situations where you do not want users to navigate through the table pages.',
            },
        },
    },
};

export const ItemsPerPageOptions = {
    args: {
        columns: exampleColumns,
        itemsPerPageOptions: [5, 10, 20, 50],
    },
    parameters: {
        docs: {
            description: {
                story:
                    'This story demonstrates the use of the "itemsPerPageOptions" property. "itemsPerPageOptions" is an array that '
                    + 'determines the options for the number of items per page in the pagination component. '
                    + 'In this case, the options for the number of items per page are 5, 10, 20, and 50.',
            },
        },
    },
};

export const EmptyComponentCustomization = {
    args: {
        columns: exampleColumns,
        data: [],
        messageEmptyComponent: 'No data available',
        iconEmptyComponent: 'home',
    },
    parameters: {
        docs: {
            description: {
                story:
                    'This story demonstrates the use of the "messageEmptyComponent" and "iconEmptyComponent" properties. '
                    + 'When the "messageEmptyComponent" is set, it customizes the message displayed when the table data is empty. '
                    + 'Similarly, "iconEmptyComponent" customizes the icon displayed when the table data is empty. '
                    + 'In this case, the empty data message is "No data available", and the icon is "warning".',
            },
        },
    },
};

const TableCardModeTemplate = args => ({
    components: {DsTable, DsButton},
    setup() {
        return {args};
    },
    template: `
        <DsTable
            sort
            striped
            :columns="args.columns"
            :data="args.data"
            @multiDelete="handleMultiDelete"
            :checkboxSelection="true"
            @filter="handleFilter"
            :pagination="{
          totalItems: 200,
          currentPage: 1,
          itemPerPage: 5,
          itemsPerPageOptions: [5, 10, 50],
          }"
        >
        </DsTable>
    `,
    methods: {
        handleMultiDelete(selectedRows) {
            alert(JSON.stringify(selectedRows));
        },
        handleFilter(filter) {
            alert(JSON.stringify(filter));
        },
    },
});
