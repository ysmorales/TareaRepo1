
import { ref } from 'vue';

import { useVuelidate } from "@vuelidate/core";
import { email, helpers, numeric, required } from "@vuelidate/validators";

export function useNodeValidator(items) {

    const $externalResults = ref({});
    const form = computed(() => {
        return { ...getFormFieldValues(items) }
    });

    const formRules = computed(() => {
        const step1 = {}
        Object.keys(getFormFieldValues(items)).forEach(element => {
            step1[element] = { required }
        });

        return step1
    });

    const validateForm = useVuelidate(formRules, form, { $externalResults });

    return {
        validateForm,
        formRules,
        form,
        $externalResults
    }
}