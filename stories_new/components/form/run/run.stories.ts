import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { DsInput } from '../../../../components/DesignSystem';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';
import { formatRut, isValidRut } from '../../../utils/isValidRut';
import { getErrorMessage } from '../../../utils/translateErrorMessage';

export default {
	components: { DsInput },
	title: 'Form/RUN',
	tags: ['autodocs'],

	argTypes: {},
};

const Template = (args: any) => ({
	components: { DsInput, DsButton },
	setup() {
		const rucValidate = {
			$message: 'No es un RUN valido',
			$validator: isValidRut,
		};
		const form = reactive({
			run: '',
		});
		const formRules = reactive({
			run: { required, rucValidate },
		});
		const validateForm = useVuelidate(formRules, form);

		const handleClick = () => {
			validateForm.value.$touch();
			if (form.run != '') {
				form.run = formatRut(form.run);
			}
			if (!validateForm.value.$invalid) {
				alert('The validation is successfully!');
			}
		};

		function handleBlur() {
			if (form.run != '') {
				form.run = formatRut(form.run);
			}
		}

		return {
			args,
			form,
			validateForm,
			formRules,
			getErrorMessage,
			handleClick,
			handleBlur,
		};
	},
	template: `
        <div>
            <DsInput @blur="handleBlur" v-model="form.run" label="RUN"
                     :error="getErrorMessage(validateForm?.run.$errors[0])"/>
            <DsButton class="mt-2" @click="handleClick">Validar RUN</DsButton>
        </div>
    `,
});

export const Default: any = Template.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		description: {
			story: `
       ## Usage
\`\`\`typescript
import {isValidRut, formatRut} from "~/components/DesignSystem/utils/isValidRut";
\`\`\`
This story demonstrates the use of the functions \`isValidRut\` and Vuelidate for form validation, specifically for validating and handling RUN. 
We import \`isValidRut\` from the 'utils' directory within our design system and it's used to check whether a given RUN is valid or not based on the chile-atiende format. 
Additionally, we use the Vuelidate package, a model-based validation for Vue.js. Vuelidate provides simplicity and flexibility to validate any of your data, in our case, is used to validate a form based on specified validation rules.
To validate the run field on our form, we define a custom validation rule named rucValidate, which utilises isValidRut:

\`\`\`typescript
const rucValidate = {
      $message: "No es un RUN valido",
      $validator: isValidRut,
    };
\`\`\`
Then, we create a formRules object to specify the validation rules for our form using Vue's reactive method. This object includes both required (ensuring that the field is not left empty) and rucValidate rules for the run field:

\`\`\`typescript
import { reactive } from 'vue';
import { required } from '@vuelidate/validators';
const formRules = reactive({
  run: {required, rucValidate} // tells Vuelidate to ensure the 'run' field is not empty and follows our defined rucValidate rule
});

\`\`\`
This formRules object, along with the state of our form data, is then passed to the useVuelidate function upon setup:

\`\`\`typescript
import { useVuelidate } from '@vuelidate/core\`;
const validateForm = useVuelidate(formRules, form);

\`\`\`

To format the RUN, we use the 'formatRut' function. This function takes an unformatted RUN as input and returns the RUN with the correct format.

\`\`\`typescript
if(form.run!=''){
        form.run = formatRut(form.run)
      }
\`\`\`
      `,
		},
		source: {
			code: `
<script setup lang="ts">
    const rucValidate = {
      $message: "No es un RUN valido",
      $validator: isValidRut,
    };
    const form = reactive({
      run: '',
    });
    const formRules = reactive({
      run: {required, rucValidate}
    });
    const validateForm = useVuelidate(formRules, form);
    function handleClick() {
      validateForm.value.$touch();
      if(form.run!=''){
        form.run = formatRut(form.run)
      }
      if (!validateForm.value.$invalid) {
        alert("The validation is successfully!");
      }
    }
</script>

<div>
    <DsInput v-model="form.run"  label="RUN" :error="getErrorMessage(validateForm?.run.$errors[0])"/>
    <DsButton class="mt-2" @click="handleClick">Validar RUN</DsButton>
</div>
`,
		},
	},
};
