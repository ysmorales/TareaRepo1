import DsModalFixed from "../../../../components/DesignSystem/components/container/modal-fixed/DsModalFixed.vue";
import DsButton from "../../../../components/DesignSystem/components/basic/button/DsButton.vue";
import { ref } from "vue";

export default {
  title: "Container/ModalFixed",
  component: DsModalFixed,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "boolean",
      description: "Controls the visibility of the modal.",
      defaultValue: false,
    },
    default: {
      control: "text",
      description: "Content of the modal.",
    },
    handlerClose: {
      control: "function",
      description: "Function to handle the close action of the modal.",
    },
    "update:modelValue": {
      table: { disable: true },
    },
    accept: {
      table: { disable: true },
    },
    close: {
      table: { disable: true },
    },
  },
};

const Template = (args) => ({
  components: { DsModalFixed, DsButton },
  setup() {
    const showModal = ref(false);

    function toggleModal() {
      showModal.value = !showModal.value;
    }

    return { args, showModal, toggleModal };
  },
  template: `
        <div style="height: 300px;">
            <DsButton @click="toggleModal">Open Modal</DsButton>
            <DsModalFixed v-bind="args" v-model="showModal">
                <template #default>
                    <div class="p-4">
                        <h2 class="text-xl font-bold">Modal Content</h2>
                        <p>This is an example of the modal content.</p>
                    </div>
                </template>
            </DsModalFixed>
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: false,
};

Default.parameters = {
  docs: {
    source: {
      code: `
<script setup lang="ts">
   const showModal = ref(false);

    function toggleModal() {
      showModal.value = !showModal.value;
    }
</script>

<div>
        <div>
            <DsButton @click="toggleModal">Open Modal</DsButton>
            <DsModalFixed v-model="showModal">
                    <div class="p-4">
                        <h2 class="text-xl font-bold">Modal Content</h2>
                        <p>This is an example of the modal content.</p>
                    </div>
            </DsModalFixed>
        </div>
</div>
`,
    },
  },
};
