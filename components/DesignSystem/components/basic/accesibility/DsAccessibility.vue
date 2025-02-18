<script lang="ts" setup>
import {ref, onMounted, watchEffect, watch} from 'vue';
import DsButton from '../button/DsButton.vue';

const zoomLevel = ref(1);
const grayscale = ref(false);
const isVisible = ref(true);

function adjustFontSize(adjust: 'increase' | 'decrease' | 'default' | 'gray') {
    switch (adjust) {
        case 'increase':
            zoomLevel.value += 0.1;
            break;
        case 'decrease':
            zoomLevel.value -= 0.1;
            break;
        case 'gray':
            grayscale.value = !grayscale.value;
            break;
        case 'default':
            zoomLevel.value = 1;
            grayscale.value = false;
            break;
    }
}

function checkResolution() {
    isVisible.value = window.innerWidth >= 800; // Adjust the resolution threshold as needed
}

onMounted(() => {
    watchEffect(() => {
        (document.body.style as any).zoom = zoomLevel.value;
        document.body.style.filter = grayscale.value ? 'grayscale(100%)' : '';
    });
    checkResolution();
    window.addEventListener('resize', checkResolution);
});

watch(() => window.innerWidth, checkResolution);
</script>

<template>
    <div v-if="isVisible" class="flex-wrap justify-end h-[31px] flex">
        <DsButton
            color="simple"
            icon-color="dark"
            icon-size="small"
            icon-style="mr-0"
            start-image="/images/accessibility/icon-disminuir.svg"
            @click="adjustFontSize('decrease')"
        >
            Disminuir textos
        </DsButton>
        <DsButton
            class="text-black"
            color="simple"
            icon-color="dark"
            icon-size="small"
            icon-style="mr-0"
            start-image="/images/accessibility/icon-aumentar.svg"
            @click="adjustFontSize('increase')"
        >
            Aumentar textos
        </DsButton>
        <DsButton
            class="text-black"
            color="simple"
            icon-color="dark"
            icon-size="small"
            icon-style="mr-0"
            start-image="/images/accessibility/icon-gris.svg"
            @click="adjustFontSize('gray')"
        >
            Ver sitio en gris
        </DsButton>
        <DsButton
            class="text-black"
            color="simple"
            icon-color="dark"
            icon-size="small"
            icon-style="mr-0"
            start-image="/images/accessibility/icon-restablecer.svg"
            @click="adjustFontSize('default')"
        >
            Restablecer
        </DsButton>
    </div>
</template>