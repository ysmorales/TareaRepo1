<script lang="ts" setup>
import beautify from "js-beautify";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import { options } from "~/components/Pages/Builder/utils/data";

interface IProp {
  text: any;
}

const props = withDefaults(defineProps<IProp>(), {
  text: "",
});

const getFormatCode = () => {
  const formValuesString = JSON.stringify(props.text, null, 2);
  const formattedCode = beautify.html(formValuesString, options);
  return Prism.highlight(
    formattedCode,
    Prism.languages.javascript,
    "javascript"
  );
};
</script>

<template>
  <pre
    class="bg-gray-800 rounded-md shadow text-sm overflow-auto language-javascript h-fit text-white"
    v-html="getFormatCode()"
  ></pre>
</template>
