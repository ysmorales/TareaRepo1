<script lang="ts" setup>
import {useBuilderStore} from "~/stores/builderStore";
import {toRefs} from "vue";
import beautify from "js-beautify";
import Prism from "prismjs";
import {options} from "~/components/builder-components/utils/data";

const store = useBuilderStore()
const {formValues, builderItems} = toRefs(store)

const highlightedCode = computed(() => {
    const formValuesString = JSON.stringify(formValues.value, null, 2);
    const formattedCode = beautify.html(formValuesString, options);
    return Prism.highlight(
        formattedCode,
        Prism.languages.javascript,
        "javascript",
    );
});
</script>

<template>
    <!--    {{ formValues }}-->

    <pre
        class=" bg-gray-800 rounded-md shadow text-sm overflow-auto  language-javascript h-fit "
        v-html="highlightedCode "></pre>
</template>
