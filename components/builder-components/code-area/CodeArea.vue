<script lang="ts" setup>
import {ref, toRefs} from 'vue';
import {type FormItem, objectToVueCode} from "~/components/DesignSystem/utils/ConvertObjectToView";
import {useCounterStore} from "~/stores/builderStore";
import Prism from 'prismjs';
import beautify from 'js-beautify';
import 'prismjs/themes/prism-tomorrow.css';

const store = useCounterStore()
const {builderItems} = toRefs(store)
const code = ref(objectToVueCode(builderItems.value as FormItem[]));

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

const formattedCode = beautify.html(code.value, options);

const html = ref(
    Prism.highlight(
        formattedCode,
        Prism.languages.javascript,
        "javascript",
    ),
);


</script>
<template>


    <pre class="p-4 bg-gray-800 rounded-md shadow h-full text-sm overflow-auto  language-javascript"
         v-html="html"></pre>

</template>

<style scoped>
pre {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    max-height: 200px;
}
</style>