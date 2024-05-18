<template>
    <div class="flex flex-col justify-between p-4 bg-gray-800 text-white rounded-md shadow h-full">
        <pre class="text-sm overflow-auto text-white" v-text="code"></pre>
        <div class="flex justify-end">
            <DsButton @click="copyCode">Copiar
            </DsButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {DsButton} from "~/components/DesignSystem";

const code = ref('<h1>Holaaaa</h1>');

const copyCode = () => {
    navigator.clipboard.writeText(code.value)
        .then(() => {
            alert('Código copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el código: ', err);
        });
};
</script>

<style scoped>
pre {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    max-height: 200px;
}
</style>