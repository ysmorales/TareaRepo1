<template>
    <div class="p-2 border rounded">
        <pre class="overflow-auto">{{ code }}</pre>
        <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded" @click="copyCode">Copiar</button>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const code = ref('Aquí va tu código de ejemplo');

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
}
</style>

