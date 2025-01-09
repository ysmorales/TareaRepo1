import DsFile from "../../../../components/DesignSystem/components/form/file/DsFile.vue";

import { commonArgTypes, commonInputArgTypes } from "../../../common/common.ts";

export default {
  title: "Form/File",
  component: DsFile,
  tags: ["autodocs"],

  argTypes: {
    ...commonArgTypes,
    ...commonInputArgTypes,

    buttonColor: {
      control: "select",
      options: ["primary", "default", "danger"],
      description: "Change the borderColor of the button",
    },
    id: {
      description:
        "The id property uniquely identifies the check component within the application.",
    },
    fileSelected: {
      control: "none",
      description:
        "Event triggered on the onChange method of the component. It returns a File object.",
    },
    focus: {
      description: "Controls whether the component has focus. - boolean",
    },
    disabled: {
      description: "Disable component. - boolean",
    },
    hideLabel: {
      description: "Hide the label of the file input",
    },
    showPlaceholder: {
      description: "Show or hide place holder text",
    },
    placeholder: {
      description: "Short text for the example",
    },
    buttonText: {
      description: "Text for the button",
    },
    helpMessage: {
      description: "Help message text for the component",
    },
  },
};

export const Default = {
  args: {},
};

export const HideLabel = {
  args: {
    hideLabel: true,
  },
};

export const Error = {
  args: {
    error: "Custom error",
  },
};

export const Size = {
  args: {
    size: "large",
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Focus = {
  args: {
    focus: true,
  },
};

export const hidePlaceholder = {
  args: {
    showPlaceholder: false,
  },
};

export const ButtonColor = {
  args: {
    buttonColor: "danger",
  },
};

export const ButtonText = {
  args: {
    buttonText: "custom button text",
  },
};
export const enablePreview = {
  args: {
    enablePreview: true,
  },
};
