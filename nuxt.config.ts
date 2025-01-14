// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        // ...
        '@pinia/nuxt',
    ],

    pinia: {
        storesDirs: ['./stores/**'],
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },


    runtimeConfig: {
        public: {
            NODE_ENV: process.env.NODE_ENV,
            APP_ENV: process.env.APP_ENV,
            PASSPORT_CLIENT_ID: process.env.PASSPORT_CLIENT_ID,
            PASSPORT_CALLBACK: process.env.PASSPORT_CALLBACK,
            PASSPORT_LOGOUT: process.env.PASSPORT_LOGOUT,
            PASSPORT_TOKEN: process.env.PASSPORT_TOKEN,
            PASSPORT_AUT: process.env.PASSPORT_AUT,
            PASSPHRASE_ENCRYPT: process.env.PASSPHRASE_ENCRYPT,
            GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
            GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
        },
    },

    // devServer: {
    //     host: "aplicaciones-unidoos.loc",
    //     port: 31010,
    //     https: {
    //         key: "./builder.loc-key.pem",
    //         cert: "./builder.loc.pem",
    //     },
    // },

    css: ['~/assets/css/main.css'],
    compatibilityDate: '2025-01-06',

})