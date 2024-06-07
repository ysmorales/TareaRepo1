<script lang="ts" setup>
import cookies from 'js-cookie';
import {computed, onMounted} from 'vue';
import {Service} from "~/api-services/services";


// Define PageMeta
definePageMeta({
    layout: false
})

// // Define RuntimeConfig
// const runtimeConfig = useRuntimeConfig();
//
// // Define Store
// const authStore = useAuthStore();
//
// // Define Router
// const router = useRouter();

// Define props
// const props = defineProps({});

// Define emits
const emits = defineEmits([]);

// Variables reactivas
// const data = ref('');

// Computeds
const redirect = computed(() => {
    try {
        return cookies.get('redirect-url') || '/';
    } catch {
        return '/';
    }
});

const fetchToken = async (token: string) => {

    const service = new Service($fetch);
    try {
        const response = await service.get('/users/me', token);
        // Si la respuesta no es correcta, manejar el error
        if (response) {
            console.log(response)
        }


    } catch (e) {
        console.error(e);
    } finally {
        // loading.value = false; // Siempre paramos el spinner, incluso si hubo un error
    }
    // const params = new URLSearchParams();
    // params.append('grant_type', 'authorization_code');
    // params.append('client_id', runtimeConfig.public.PASSPORT_CLIENT_ID);
    // params.append('redirect_uri', runtimeConfig.public.PASSPORT_CALLBACK);
    // params.append('code_verifier', localStorage.getItem('verifier') || '');
    // params.append('code', code);
    //
    // try {
    //     const response = await fetch(runtimeConfig.public.PASSPORT_TOKEN, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: params
    //     });
    //
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //
    //     const data = await response.json();
    //     localStorage.removeItem('state');
    //     localStorage.removeItem('verifier');
    //     const {token_type, expires_in, access_token, refresh_token} = data;
    //
    //     // this.$store.dispatch('setToken', { token: access_token, expires: expires_in });
    //     authStore.setToken(access_token);
    //
    //     // se guarda en store data de usuario logeado
    //     const dataUser = decodeToken(access_token);
    //     authStore.setUser(dataUser);
    //
    //     // redirect a pagina guardada en cookie
    //     router.push(redirect.value);
    // } catch (error) {
    //     console.error('Error:', error);
    // }
}

// onMounted(async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     // const code = urlParams.get('code');
//     // const state = urlParams.get('state');
//     //
//     // if (code && state) {
//     //     if (state === localStorage.getItem('state')) {
//     //         fetchToken(code);
//     //     }
//     // }
// });
onMounted(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
        // Aquí puedes usar el token
        await fetchToken(token);
    }
});
</script>

<template>
    <NuxtLayout name="auth-layout">
        <div>
            <div class="w-full flex">
                Validando...
            </div>
        </div>
    </NuxtLayout>
</template>