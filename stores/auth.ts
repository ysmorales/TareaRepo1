import {defineStore} from 'pinia';
import type {IUser} from "~/interfaces/interfaces";
import cookies from 'js-cookie';

// Desglose de funciones para mejorar la organización
function setAuthInLocalStorage(token: string) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
    }
}

function clearAuthInLocalStorage() {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
    }
}

export const useAuthStore = defineStore('auth', {
    hydrate(state: any, initialState: any) {
        state.user = initialState.user;
        state.auth_token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    },
    state: () => ({
        user: reactive<IUser>({
            id: null,
            name: null,
            first_name: null,
            last_name: null,
            email: null,
            run: null,
            dv: null,
            job_title: null,
            office_location: null,
            photo: null,
            roles: null,
        }),
        auth_token: ref<string | null>(null),
        refresh_token: ref<string | null>(null),
        expiration_token: ref<string | null>(null),
        redirect_url: ref<string | null>(null),
    }),

    getters: {
        isAuthenticated: (state: any) => !!state.auth_token,
        getToken: (state: any) => state.auth_token,
        getUser: (state: any) => state.user,
    },

    actions: {
        async login(userDetails: any) {
            // Actualiza el usuario con los datos proporcionados (mejora la legibilidad)
            this.updateUser(userDetails);
        },
        setToken(token: string) {
            this.auth_token = token;
            setAuthInLocalStorage(token);
        },
        setRedirectUrl(url: string) {
            this.redirect_url = url;
            const expiryTimeInMinutes = 5; // 5 minutos por defecto
            cookies.set('redirect-url', url, {expires: expiryTimeInMinutes});
        },
        setUser(data: IUser) {
            this.updateUser(data);
        },
        logout() {
            this.user = reactive({ // Reinicia el usuario con un objeto reactivo nuevo
                id: null,
                name: null,
                first_name: null,
                last_name: null,
                run: null,
                dv: null,
                email: null,
                job_title: null,
                office_location: null,
                photo: null,
                roles: null,
            });
            this.auth_token = null;
            this.refresh_token = null;
            this.expiration_token = null;
            clearAuthInLocalStorage();
            navigateTo('/login');
        },

        // Función reutilizable para actualizar el usuario de forma segura
        updateUser(data: IUser) {
            Object.assign(this.user, data); // Asignación segura de propiedades
        },
    },
});
