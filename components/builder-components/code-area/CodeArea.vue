<script lang="ts" setup>
import {ref, toRefs, watch} from 'vue';
import {type FormItem, objectToVueCode} from "~/components/DesignSystem/utils/convertObjectToView";
import {useBuilderStore} from "~/stores/builderStore";
import Prism from 'prismjs';
import beautify from 'js-beautify';
import 'prismjs/themes/prism-tomorrow.css';
import DsToast from "~/components/DesignSystem/components/basic/toast/DsToast.vue";
import {options} from "~/components/builder-components/utils/data";

const store = useBuilderStore()
const {builderItems, addItemToForm} = toRefs(store)
const code = ref('');
const showToast = ref(false);


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
const drop = () => {
    addItemToForm.value()
}

</script>
<template>
    <div
        class="md:min-w-[723px]  border border-gray-300 shadow-md rounded-md p-5  flex-col  items-center min-h-[400px]"
        @drop="drop"
        @dragover.prevent>
        <DsToast v-model="showToast" message="El código se ha copiado al portapapeles correctamente."
                 title="Operación Exitosa"/>
        <div class="relative ">
            <button
                class="absolute top-2 right-0 m-2 mt-2 rounded-2xl hover:bg-gray-700 text-white border-transparent font-bold py-2 px-4 text-xs"
                @click="copyToClipboard">Copiar
            </button>
            <pre
                class=" bg-gray-800 rounded-md shadow text-sm overflow-auto  language-javascript h-full"
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