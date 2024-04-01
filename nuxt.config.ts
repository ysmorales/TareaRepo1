// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/css/main.css'],
    modules: ['nuxt-auth-sanctum'],
    sanctum: {
        baseUrl: 'http://localhost:80', // Laravel API
        origin: 'http://localhost:3000', // Nuxt app, by default will be used 'useRequestURL().origin'
    }
})
