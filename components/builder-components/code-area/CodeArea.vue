<script lang="ts" setup>
import {ref, toRefs} from 'vue';
import {DsButton} from "~/components/DesignSystem";
import {type FormItem, objectToVueCode} from "~/components/DesignSystem/utils/ConvertObjectToView";
import {useCounterStore} from "~/stores/builderStore";

const store = useCounterStore()
const {builderItems} = toRefs(store)

const code = ref(objectToVueCode(builderItems.value as FormItem[]));

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
<template>

    <div class="flex flex-col justify-between p-4 bg-gray-800 text-white rounded-md shadow h-full">
        <pre class="text-sm overflow-auto text-white" v-text="code"></pre>
        <div class="flex justify-end">
            <DsButton @click="copyCode">Copiar
            </DsButton>
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
    max-height: 200px;
}
</style>