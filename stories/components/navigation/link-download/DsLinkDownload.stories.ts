import DsLinkDownload from "../../../../components/DesignSystem/components/navigation/link-download/DsLinkDownload.vue";

export default {
  title: "Navigation/LinkDownload",
  component: DsLinkDownload,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description:
        "The text to display inside the link. Default is 'Descargar comprobante (PDF)'.",
      control: { type: "text" },
      defaultValue: "Descargar comprobante (PDF)",
    },
    icon: {
      description:
        "The name of the icon to display inside the link. Default is 'download'.",
      control: { type: "text" },
      defaultValue: "download",
    },
  },
};

export const Default = {
  args: {
    text: "Descargar comprobante (PDF)",
    icon: "download",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default usage of the `DsLinkDownload` component with the default text and icon.",
      },
    },
  },
};

export const OtherText = {
  args: {
    text: "Other text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This example shows the `DsLinkDownload` component with a custom text.",
      },
    },
  },
};

export const OtherIcon = {
  args: {
    icon: "home",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This example shows the `DsLinkDownload` component with a custom icon.",
      },
    },
  },
};

export const ExampleUsage = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
       ## Usage
\`\`\`typescript
import {useAuthStore} from '~/store/auth';
export async function handleDownload(generateReceiptUrl: string) {
    const authStore = useAuthStore();

    // Ensure the URL uses HTTPS
    const secureUrl = generateReceiptUrl.replace(/^http:\\/\\//i, 'https://');

    try {
        const response = await fetch(secureUrl, {
            method: 'GET',
            headers: {
                'Authorization': \`Bearer \${authStore.auth_token}\`
            }
        });
        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'receipt.pdf'; // or any other file name
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } else {
            const errorText = await response.text();
            console.error(\`Failed to download file: \${response.status} - \${response.statusText}\`);
            console.error(\`Error details: \${errorText}\`);
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
}
\`\`\`
\`\`\`typescript
<script lang="ts" setup>
import {handleDownload} from './useDownloadHandler';
</script>
<template>
  <DsLinkDownload @click="() => handleDownload(props.item?.generate_receipt!)"/>
</template>
\`\`\`
      `,
      },
    },
  },
};
