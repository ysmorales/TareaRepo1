import DsTimeLine from "../../../../components/DesignSystem/components/container/TimeLine/DsTimeLine.vue";
import DsStatusIconCard from "../../../../components/DesignSystem/components/container/status-icon-card/DsStatusIconCard.vue";
import { itemsTimeLineStories } from "./library";
import DsExampleCard from "./DsExampleCard.vue"; // Import itemsTimeLineStories

export default {
  components: { DsExampleCard, DsStatusIconCard },
  title: "Container/timeline",
  component: DsTimeLine,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the timeline.",
      defaultValue: "Historial de solicitud",
    },
    infoText: {
      control: "text",
      description: "The informational text displayed below the title.",
      defaultValue: "Revisa el historial completo de esta solicitud",
    },
    default: {
      defaultValue: "Card container",
      description:
        "The default slot is used to provide different types of cards within the timeline. " +
        "This allows for flexible content composition and reuse, enabling consumers to customize " +
        "the content displayed in each timeline item without altering the component structure.",
    },
  },
};

export const Default = {
  args: {},
};

export const OtherTitle = {
  args: {
    title: "Custom title",
  },
};

export const OtherInfoText = {
  args: {
    infoText: "Other info text",
  },
};

export const CustomCardExample = {
  args: {
    title: "Historial de solicitud",
    infoText: "Revisa el historial completo de esta solicitud",
    items: [
      {
        id: 1,
        user: {
          image: "/images/avatar.jpg",
          name: "Armando Paredes del Castillo",
          note: "Operador",
        },
        date: new Date(),
        info: "Ha aprobado la solicitud",
        status: "approved",
      },
      // Add more items as needed
    ],
  },
  render(args: unknown) {
    return {
      components: { DsTimeLine, DsExampleCard },
      setup() {
        return { args, itemsTimeLineStories };
      },
      template: `
                <div style="height: 900px;">
                    <DsTimeLine v-bind="args">
                        <template #default>
                            <div
                                v-for="(item, index) in itemsTimeLineStories"
                                :key="index"
                                :class="{
                  'pl-0': index === 0,
                  'border border-l-[#cfeafe] border-b-0 border-r-0 border-t-0 border-l-2 pl-6': index > 0,
                }"
                            >
                                <DsExampleCard/>
                            </div>
                        </template>
                    </DsTimeLine>
                </div>
            `,
    };
  },
};
