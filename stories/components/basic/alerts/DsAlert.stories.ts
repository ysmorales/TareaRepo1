import DsAlert from "../../../../components/DesignSystem/components/basic/alert/DsAlert.vue";
import { commonArgTypes, buildStory } from "../../../common/common";

export default {
  components: { DsAlert },
  title: "Basic/Alert",
  component: DsAlert,
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes,

    default: { table: { disable: true } },

    type: {
      control: "select",
      description: "Alert type",
      options: ["info", "success", "danger"],
    },

    rounded: {
      control: "boolean",
      description: "Enable/disable rounded borders",
    },

    title: {
      control: "text",
      description: "Text shown on alert's title",
    },

    text: {
      control: "text",
      description: "Text shown on alert's main content",
    },

    showIcon: {
      control: "boolean",
      description: "Shows/hides icon on title.",
    },
  },
};

export const Default = {
  args: {},
};

export const Info = {
  args: {
    type: "info",
    title: "Some title",
  },
};

export const Success = {
  args: {
    type: "success",
    title: "Some title",
  },
};

export const Danger = {
  args: {
    type: "danger",
    title: "Some title",
  },
};

export const Title = {
  args: {
    title: "Custom title",
  },
};

export const HideIcon = {
  args: {
    showIcon: false,
    title: "Some title",
  },
};

export const HtmlContent = buildStory({
  components: { DsAlert },
  code: {
    template: `
      <DsAlert title="Some title">
        Irure aliquip in irure incididunt in. Ullamco tempor proident amet non non laborum ex non ullamco mollit ullamco incididunt ipsum eiusmod. Tempor sit elit id mollit amet sunt proident.
      </DsAlert>
    `,
  },
});
