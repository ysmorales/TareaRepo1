import DsMultipleFileUploader from "../../../../components/DesignSystem/components/form/multiple-file-uploader/DsMultipleFileUploader.vue";

export default {
  title: "Form/MultipleFileUploader",
  component: DsMultipleFileUploader,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Label for the file uploader.",
      control: { type: "text" },
      defaultValue: "label",
    },
    modelValue: {
      description: "Array of files selected by the user.",
      control: { type: "object" },
      defaultValue: [],
    },
    viewMode: {
      description: "If true, the uploader is in view-only mode.",
      control: { type: "boolean" },
      defaultValue: false,
    },
    error: {
      description: "Error message to display.",
      control: { type: "text" },
      defaultValue: null,
    },
  },
};

export const Default = {
  args: {
    label: "Upload Files",
    modelValue: [],
    viewMode: false,
    error: null,
  },
};

export const WithError = {
  args: {
    label: "Upload Files",
    modelValue: [],
    viewMode: false,
    error: "An error occurred while uploading files.",
  },
};

export const ViewMode = {
  args: {
    label: "Uploaded Files",
    modelValue: [new File(["content"], "example.txt", { type: "text/plain" })],
    viewMode: true,
    error: null,
  },
};
