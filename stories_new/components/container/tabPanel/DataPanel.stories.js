import DsDataPanel from '../../../../components/DesignSystem/components/container/data-panel/DsDataPanel.vue';
import DsAccordion from '../../../../components/DesignSystem/components/container/accordion/DsAccordion.vue';
import { configDataPanel, exampleConfigData } from './exampleData.ts';

export default {
	methods: {
		configDataPanel() {
			return configDataPanel;
		},
	},
	computed: {
		exampleConfigData() {
			return exampleConfigData;
		},
	},
	title: 'Container/DataPanel',
	component: DsDataPanel,
	tags: ['autodocs'],

	argTypes: {},
};

const Template = args => ({
	components: { DsAccordion, DsDataPanel },
	setup() {
		return { args };
	},
	template: `
      <DsAccordion title="Accordion example">
        <DsDataPanel v-bind="args" :config="exampleConfigData" :model="configDataPanel"/>
      </DsAccordion>
    `,
});
export const Default = {
	args: {},
};
export const Accordion = Template.bind({});
Accordion.args = {};
Accordion.parameters = {
	docs: {
		source: {
			code: `
<div>
    <DsAccordion title="Accordion example">
     <DsDataPanel :config="exampleConfigData" :model="configDataPanel"/>
    </DsAccordion>
</div>
<script setup lang="ts">
 const exampleConfigData = {
  applicant: "Familiar directo",
  reason: 3,
  docFile: "cuca.doc",
  date: "1903-04-04T05:29:36.000Z",
  phone: "5354157794",
  mail: "sdasda@gmail.com",
  healthStatus: 1,
  residence: 1,
  region: 4,
  comuna: 2,
  address: "telnostitlan Ecuador",
  number: 3453,
};
const configDataPanel = [
  {
    title: "Quién solicita la visita",
    field: "applicant",
  },
  {
    title: "Motivo fundado por el cual se está solicitando esta visita",
    field: "reason",
  },
  {
    title: "Certificado adjunto",
    field: "docFile",
  },
  {
    title: "Fecha de nacimiento",
    field: "date",
  },
  {
    title: "Teléfono",
    field: "phone",
  },
  {
    title: "Región",
    field: "region",
  },
  {
    title: "Estado de salud del pensionado",
    field: "healthStatus",
  },
  {
    title: "Residencia del pensionado",
    field: "residence",
  },
  {
    title: "Dirección",
    field: "address",
  },
  {
    title: "Número de teléfono",
    field: "phone",
  },
  {
    title: "Correo Electrónico",
    field: "mail",
  },
];

</script>
`,
		},
	},
};
