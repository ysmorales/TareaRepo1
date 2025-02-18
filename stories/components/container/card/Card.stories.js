import DsCard from "../../../../components/DesignSystem/components/container/card/DsCard.vue";
import { loremItsum } from "../../../utils/loremItsum.ts";

export default {
  title: "Container/Card",
  component: DsCard,
  tags: ["autodocs"],

  argTypes: {
    headerTitle: {
      control: "text",
      description:
        "The headerTitle property is used to change the title displayed at the top header of the card. You can input any string value to customize the title as per your requirements.",
    },
    url: {
      control: "text",
      description:
        "The url property is a string that holds a web address or link to a web resource.",
    },
    textSmallTop: {
      control: "text",
      description: "Url of the link header.",
    },
    textSmallTopPrimaryColor: {
      description:
        "The smallTopPrimaryColor is a Boolean property utilized in the Card component. When set to true, it changes the text borderColor at the top of the card to the primary theme borderColor.",
    },
    textInfo: {
      description:
        "The textInfo property holds the informational text that is displayed on the button within a card component.",
    },
    linkTop: {
      description:
        "If you place a text in this property, a link at the top of the card gets activated.",
    },
    urlLinkTop: {
      description: "Url of the link top.",
    },
    targetLinkTop: {
      description: "Target of the link top.",
    },
    targetUrl: {
      description: "Target to the main link",
    },
    srcImage: {
      description: "Source the image to be displayed.",
    },
    urlLinkImage: {
      description: "URL of the link image.",
    },
    targetLinkImage: {
      description: "Target of the link image.",
    },
    srcLinkImage: {
      description: "URL or path to the image to be displayed.",
    },
    imageLeft: {
      description:
        "This boolean defines that the image is displayed on the left when it is true.",
    },
    color: {
      control: "select",
      options: [
        "primary",
        "danger",
        "secondary",
        "tertiary",
        "dark",
        "default",
        "fullWhite",
      ],
      description: "Change de color of the card.",
    },
  },
};

export const Default = {
  args: {
    headerTitle:
      "Monto máximo mensual del sistema de transporte público metropolitano.",
  },
};
export const SmallTop = {
  args: {
    textSmallTop: "Jueves 15 de febrero de 2024",
    headerTitle:
      "IPS extiende vigencia de poderes para el cobro de pensiones y beneficios en zonas afectadas por los incendios.",
  },
};
export const SmallTopPrimaryColor = {
  args: {
    headerTitle:
      "IPS extiende vigencia de poderes para el cobro de pensiones y beneficios en zonas afectadas por los incendios.",
    textSmallTop: "Jueves 15 de febrero de 2024",
    textSmallTopPrimaryColor: true,
  },
};

export const FeaturedColor = {
  args: {
    headerTitle:
      "IPS extiende vigencia de poderes para el cobro de pensiones y beneficios en zonas afectadas por los incendios.",
    color: "dark",
    textInfo: "Descárgala aquí",
  },
};
const Template = (args) => ({
  components: { DsCard },
  setup() {
    // Declara una ref como una variable reactiva
    return { args };
  },
  template: `
        <div class="container bg-primary-500">
            <DsCard color="fullWhite" text-info="Descárgala aquí"
                    headerTitle="Comienzan los primeros pagos del Aporte Familiar Permanente, ex Bono Marzo"/>
            <!-- Usa esa ref aquí -->
        </div>
    `,
});

export const OtherFeaturedColor = Template.bind({});
OtherFeaturedColor.args = {};
OtherFeaturedColor.parameters = {
  docs: {
    source: {
      code: `
    <div class="container bg-primary-500">
      <DsCard color="fullWhite" text-info="Descárgala aquí" headerTitle="Comienzan los primeros pagos del Aporte Familiar Permanente, ex Bono Marzo"/> 
    </div>
`,
    },
  },
};

export const LinkTop = {
  args: {
    headerTitle: "Permiso de circulación",
    linkTop: "Publicado por el Servicio de Registro Civil e Identificación",
    textInfo:
      "Permite que automóviles, camionetas, motos y otros vehículos puedan circular por las calles del país.",
    urlLinkTop: "https://www.google.com/",
    targetLinkTop: "_blank",
    url: "https://www.google.com/",
    targetUrl: "_blank",
  },
};

const ImageTopTemplate = (args) => ({
  components: { DsCard },
  setup() {
    // Declara una ref como una variable reactiva
    return { args };
  },
  template: `
        <div class="flex justify-center items-center">
            <div class="w-[500px]">
                <DsCard textSmallTop="Jueves 15 de febrero de 2024"
                        srcImage="/images/example-card/nota-web-afper-1000x270.jpg"
                        headerTitle="Comienzan los primeros pagos del Aporte Familiar Permanente, ex Bono Marzo"
                        url="https://www.google.com/"
                        targetUrl="_blank"
                />
            </div>
        </div>
    `,
});
export const ImageTop = ImageTopTemplate.bind({});
ImageTop.args = {};
ImageTop.parameters = {
  docs: {
    source: {
      code: `
      <div class="flex justify-center items-center">
          <div class="w-[500px]">
          <DsCard textSmallTop="Jueves 15 de febrero de 2024" 
                  :srcImage="{src:'/images/example-card/nota-web-afper-1000x270.jpg',url:'string',target:'_blank',title:'string'}"
                  headerTitle="Comienzan los primeros pagos del Aporte Familiar Permanente, ex Bono Marzo"
                  url="https://www.google.com/"
                  targetUrl="_blank"
          /> 
          </div>
      </div>
`,
    },
  },
};

const LinkImageTopTemplate = (args) => ({
  components: { DsCard },
  setup() {
    // Declara una ref como una variable reactiva
    return { args };
  },
  template: `
        <div class="flex justify-center items-center">
            <div class="w-[500px]">
                <DsCard textSmallTop="Jueves 15 de febrero de 2024"
                        :link-image="{src:'/images/example-card/nota-web-afper-1000x270.jpg',url:'string',target:'_blank',title:'string'}"
                        headerTitle="Comienzan los primeros pagos del Aporte Familiar Permanente, ex Bono Marzo"
                        url="https://www.google.com/"
                        targetUrl="_blank"
                />
            </div>
        </div>
    `,
});

export const LinkImageTop = LinkImageTopTemplate.bind({});
LinkImageTop.args = {};
LinkImageTop.parameters = {
  docs: {
    source: {
      code: `
      <div class="flex justify-center items-center">
          <div class="w-[500px]">
          <DsCard textSmallTop="Jueves 15 de febrero de 2024" 
                  :link-image="{src:'/images/example-card/nota-web-afper-1000x270.jpg',url:'string',target:'_blank',title:'string'}"
                  headerTitle="Comienzan los primeros pagos del Aporte Familiar Permanente, ex Bono Marzo"
                  url="https://www.google.com/"
                  targetUrl="_blank"
          /> 
          </div>
      </div>
`,
    },
  },
};

export const ImageLeft = {
  args: {
    imageLeft: true,
    headerTitle:
      "Comienzan los primeros pagos del Aporte Familiar Permanente, ex Bono Marzo",
    linkImage: {
      src: "/images/example-card/nota-web-afper-1000x270.jpg",
      url: "string",
      target: "_blank",
      title: "string",
    },
    targetUrl: "_blank",
    textSmallTop: "Jueves 15 de febrero de 2024",
    url: "https://www.google.com/",
  },
};
export const ImageLeftAdvanced = {
  args: {
    imageLeft: true,
    headerTitle:
      "Comienzan los primeros pagos del Aporte Familiar Permanente, ex Bono Marzo",
    linkImage: {
      src: "/images/example-card/nota-web-afper-1000x270.jpg",
      url: "string",
      target: "_blank",
      title: "string",
    },
    textInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    targetUrl: "_blank",
    textSmallTop: { text: "Jueves 15 de febrero de 2024", icon: "calendar" },
    url: "https://www.google.com/",
    finalLink: {
      text: "Puerto Natales",
      url: "https://www.google.com/",
      target: "_blank",
      icon: "map-marker-alt",
    },
  },
};
export const PrimaryColor = {
  args: {
    color: "primary",
    headerTitle: "Title card",
    textInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos" +
      "eum facere fugiat id ipsum odio perspiciatis quasi? Aliquam, distinctio est " +
      "impedit modi molestias neque nulla quam ratione sit tempore!",
    targetUrl: "_blank",
    url: "https://www.google.com/",
  },
};
export const SecondaryColor = {
  args: {
    color: "secondary",
    headerTitle: "Title card",
    textInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos" +
      "eum facere fugiat id ipsum odio perspiciatis quasi? Aliquam, distinctio est " +
      "impedit modi molestias neque nulla quam ratione sit tempore!",
    targetUrl: "_blank",
    url: "https://www.google.com/",
  },
};
export const DangerColor = {
  args: {
    color: "danger",
    headerTitle: "Title card",
    textInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos" +
      "eum facere fugiat id ipsum odio perspiciatis quasi? Aliquam, distinctio est " +
      "impedit modi molestias neque nulla quam ratione sit tempore!",
    targetUrl: "_blank",
    url: "https://www.google.com/",
  },
};
export const TertiaryColor = {
  args: {
    color: "tertiary",
    headerTitle: "Title card",
    textInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos" +
      "eum facere fugiat id ipsum odio perspiciatis quasi? Aliquam, distinctio est " +
      "impedit modi molestias neque nulla quam ratione sit tempore!",
    targetUrl: "_blank",
    url: "https://www.google.com/",
  },
};
