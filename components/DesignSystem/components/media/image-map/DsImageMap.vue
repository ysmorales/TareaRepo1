<script lang="ts" setup>
import DsImages from "../images/imagesHtml/DsImages.vue";
import {ref, onMounted} from "vue";
import {isNotEmpty} from "../../../utils/notEmpty";

interface IProp {
    center?: string;
    zoom?: string;
    color?: string;
    label?: string;
    srcDefault?: string;
}

const props = withDefaults(defineProps<IProp>(), {
    center: "-34.60368440000001,-58.381559100000004",
    color: "#3b00ac",
    label: "",
});

const uri = ref<string | null | undefined>(null);
const errorMessage = ref<string | null>(null);
const defaultImage = "./images/imagenchileatiende.png"; // Replace with your default image path

const buildUri = (config: Record<string, string>) => {
    const base = "https://maps.googleapis.com/maps/api/staticmap?";
    const parms = Object.keys(config).map(
        (key) =>
            config[key] &&
            config[key] &&
            `${key}=${config[key].toString().replace(/\s/g, "")}`
    );
    return `${base}${parms.join("&")}`;
};

const init = () => {
    const currentColor = props.color && props.color.split("#").join("0x");

    const height = document.getElementsByClassName("image-map-container")[0]
        .clientWidth;

    const googleMapApiConfig: Record<string, string> = {
        center: props.center,
        size: `${height}x${height}`,
        zoom: props.zoom ?? "",
        key: "AIzaSyA6a2cPamEb2MN9dnTX8Lgb73wDN1G6218",
        maptype: "roadmap",
        markers: `color:${currentColor}%7Clabel:${props.label}%7C${props.center}`,
    };

    uri.value = isNotEmpty(props.srcDefault)
        ? props.srcDefault
        : buildUri(googleMapApiConfig);
};

const handleError = () => {
    uri.value = defaultImage;
    errorMessage.value = "Error loading Google Maps image. Please check your API key and billing status.";
};

onMounted(() => {
    init();
});
</script>

<template>
    <div class="w-full image-map-container">
        <DsImages :radius="true" :src="uri!" class="object-cover h-[300px] w-full" @error="handleError"/>
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </div>
</template>