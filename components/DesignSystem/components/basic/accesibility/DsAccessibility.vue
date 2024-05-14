<script lang="ts" setup>

import {DsButton} from "~/components/DesignSystem";

const zoomLevel = ref(1);
const grayscale = ref(false);

function adjustFontSize(adjust: "increase" | "decrease" | "default" | "gray") {
    switch (adjust) {
        case "increase":
            zoomLevel.value += 0.1;
            break;
        case "decrease":
            zoomLevel.value -= 0.1;
            break;
        case "gray":
            grayscale.value = !grayscale.value;
            break;
        case "default":
            zoomLevel.value = 1;
            grayscale.value = false;
            break;
    }
}

onMounted(() => {
    watchEffect(() => {
        (document.body.style as any).zoom = zoomLevel.value;
        document.body.style.filter = grayscale.value ? 'grayscale(100%)' : '';
    });
});

</script>

<template>
    <div class="flex-wrap justify-end h-[31px] hidden lg:flex">
        <DsButton
            color="simple"
            icon-color="dark"
            icon-size="small"
            icon-style="mr-0"
            size="small"
            start-image="/images/accessibility/icon-disminuir.svg"
            @click="adjustFontSize('decrease')"
        >Disminuir textos
        </DsButton>
        <DsButton
            class="text-black"
            color="simple"
            icon-color="dark"
            icon-size="small"
            icon-style="mr-0"
            size="small"
            start-image="/images/accessibility/icon-aumentar.svg"
            @click="adjustFontSize('increase')"
        >Aumentar textos
        </DsButton>
        <DsButton
            class="text-black"
            color="simple"
            icon-color="dark"
            icon-size="small"
            icon-style="mr-0"
            size="small"
            start-image="/images/accessibility/icon-gris.svg"
            @click="adjustFontSize('gray')"
        >Ver sitio en gris
        </DsButton>
        <DsButton
            class="text-black"
            color="simple"
            icon-color="dark"
            icon-size="small"
            icon-style="mr-0"
            size="small"
            start-image="/images/accessibility/icon-restablecer.svg"
            @click="adjustFontSize('default')"
        >Restablecer
        </DsButton>
    </div>
</template>

