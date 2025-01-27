import DsPhone from "../../../../components/DesignSystem/components/form/DsPhone.vue";

export default {
  title: "Form/InputPhone",
  component: DsPhone,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    dropdownOptions: { control: "object" },
    inputOptions: { control: "object" },
    label: { control: "text" },
    defaultCountry: { control: "text" },
    mode: { control: "text" },
    placeholder: { control: "text" },
    helpMessage: { control: "text" },
    size: { control: "text" },
    class: { control: "text" },
    rounded: { control: "boolean" },
    onlyCountries: { control: "array" },
    error: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "This component uses the [vue-tel-input](https://github.com/EducationLink/vue-tel-input) library.",
      },
    },
  },
};

const Template = (args) => ({
  components: { DsPhone },
  setup() {
    return { args };
  },
  template: '<div style="height: 400px;"><DsPhone v-bind="args" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  readOnly: false,
  required: false,
  dropdownOptions: {
    showSearchBox: true,
    showFlags: true,
  },
  inputOptions: {
    showDialCode: true,
  },
  label: "Phone Number",
  defaultCountry: "cl",
  mode: "international",
  placeholder: "Enter your phone number",
  helpMessage: "Please enter a valid phone number",
  size: "full",
  class: "",
  rounded: true,
  onlyCountries: [],
  error: null,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  label: "Disabled Phone Number",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "Invalid phone number",
  label: "Phone Number with Error",
};

export const CustomCountry = Template.bind({});
CustomCountry.args = {
  ...Default.args,
  defaultCountry: "us",
  label: "Phone Number with US as Default Country",
};
