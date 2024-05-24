<script lang="ts" setup>
import {ref, toRefs, watch} from 'vue';
import {type FormItem, objectToVueCode} from "~/components/DesignSystem/utils/convertObjectToView";
import {useCounterStore} from "~/stores/builderStore";
import Prism from 'prismjs';
import beautify from 'js-beautify';
import 'prismjs/themes/prism-tomorrow.css';
import DsToast from "~/components/DesignSystem/components/basic/toast/DsToast.vue";

const store = useCounterStore()
const {builderItems} = toRefs(store)
const code = ref('');
const showToast = ref(false);

const options = {
    indent_size: 2,
    indent_char: " ",
    max_preserve_newlines: 5,
    preserve_newlines: true,
    keep_array_indentation: false,
    break_chained_methods: false,
    brace_style: "collapse",
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: false,
    wrap_line_length: 0,
    indent_inner_html: true,
    comma_first: false,
    e4x: false,
    indent_empty_lines: true
};

let formattedCode = '';
const html = ref('');

watch(builderItems, (newVal) => {
    code.value = objectToVueCode(newVal as FormItem[]);
    formattedCode = beautify.html(code.value, options);
    html.value = Prism.highlight(
        formattedCode,
        Prism.languages.javascript,
        "javascript",
    );
}, {immediate: true});

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(formattedCode);
        showToast.value = true;
    } catch (err) {
        console.error('Error al copiar el código al portapapeles: ', err);
    }
};

</script>
<template>
    <div
        class="md:min-w-[723px]  border border-gray-300 shadow-md rounded-md p-5  flex-col  items-center min-h-[400px]">
        <DsToast v-model="showToast" message="El código se ha copiado al portapapeles correctamente."
                 title="Operación Exitosa"/>
        <div class="relative">
            <button
                class="absolute top-2 right-0 m-2 mt-2 rounded-2xl hover:bg-gray-700 text-white border-transparent font-bold py-2 px-4 text-xs"
                @click="copyToClipboard">Copiar
            </button>
            <pre class=" bg-gray-800 rounded-md shadow text-sm overflow-auto  language-javascript h-full"
                 v-html="html"></pre>
        </div>
    </div>
</template>
<style scoped>
pre {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>