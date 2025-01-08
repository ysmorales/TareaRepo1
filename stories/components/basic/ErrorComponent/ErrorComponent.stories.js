import DsErrorComponent from "../../../../components/DesignSystem/components/basic/error-component/DsErrorComponent.vue";

export default {
  title: "Basic/ErrorComponent",
  component: DsErrorComponent,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {},
};

export const WithCustomMessage = () => ({
  components: { DsErrorComponent },
  template: `
        <DsErrorComponent
            title="Custom Error"
            message="This is a custom error message."
            alertType="warning"
        />
    `,
});

export const WithDebugInfo = () => ({
  components: { DsErrorComponent },
  template: `
        <DsErrorComponent
            title="Error with Debug Info"
            message="An error occurred."
            error="Detailed error information."
            showDebug
        />
    `,
});

export const WithErrorObject = () => ({
  components: { DsErrorComponent },
  template: `
        <DsErrorComponent
            title="Error Object"
            :error="{ message: 'Error message', glosaRetorno: 'Detailed error info' }"
            showDebug
        />
    `,
});
