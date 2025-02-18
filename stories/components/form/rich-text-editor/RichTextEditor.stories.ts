import DsRichTextEditor from "../../../../components/DesignSystem/components/form/rich-text-editor/DsRichTextEditor.vue";

export default {
  title: "Form/RichTextEditor",
  component: DsRichTextEditor,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      description: "The content of the rich text editor.",
      control: { type: "text" },
      defaultValue: "",
    },
    error: {
      description: "Error message to display.",
      control: { type: "text" },
      defaultValue: null,
    },
    viewMode: {
      description: "If true, the editor is in view-only mode.",
      control: { type: "boolean" },
      defaultValue: false,
    },
    label: {
      description: "Label for the editor.",
      control: { type: "text" },
      defaultValue: "Rich Text Editor",
    },
  },
};

export const Default = {
  args: {
    modelValue: "<p>Initial content</p>",
    error: null,
    viewMode: false,
    label: "Rich Text Editor",
  },
};

export const WithError = {
  args: {
    modelValue: "<p>Initial content</p>",
    error: "This field is required.",
    viewMode: false,
    label: "Rich Text Editor",
  },
};

export const ViewMode = {
  args: {
    modelValue: "<p>Initial content</p>",
    error: null,
    viewMode: true,
    label: "Rich Text Editor",
  },
};
