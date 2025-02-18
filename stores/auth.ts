import { defineStore } from 'pinia';
import type { IUser } from "~/api-services/global-interface/interfaces"
import cookies from 'js-cookie';
import { getItemInLocalStorage, setItemInLocalStorage, removeItemInLocalStorage } from '~/utils/localStorage';
import { decodeTokenCHA } from '~/utils/auth';

export const useAuthStore = defineStore('auth', {
    hydrate(state: any, initialState: any) {
        state.user = initialState.user;
        state.auth_token = getItemInLocalStorage<string | null>('token', null);
        state.expiration_token = getItemInLocalStorage<number | null>('expiration_token', null);
        state.refresh_token = getItemInLocalStorage<string | null>('refresh_token', null);
    },
    state: () => ({
        user: ref<IUser>(getItemInLocalStorage<IUser>('user', {} as IUser)),
        auth_token: ref<string | null>(getItemInLocalStorage<string | null>('token', null)),
        expiration_token: ref<number | null>(getItemInLocalStorage<number | null>('expiration_token', null)),
        refresh_token: ref<string | null>(getItemInLocalStorage<string | null>('refresh_token', null)),
        redirect_url: ref<string | null>(null),
        show_modal_token: ref<boolean>(false),
    }),

    getters: {
        isAuthenticated: (state): boolean => !!state.auth_token && !!state.expiration_token && Date.now() <= state.expiration_token,
        isTokenExpiringSoon: (state): boolean => !!state.expiration_token && (state.expiration_token - Date.now()) <= (2.5 * 60 * 1000),
        getToken: (state): string | null => state.auth_token,
        getUser: (state): IUser => state.user,
        getFullNameUser: (state): string => state.user?.name,
        isModalTokenVisible: (state): boolean => state.show_modal_token,
    },

    actions: {
        setUser(data: IUser) {
            this.user = data;
            setItemInLocalStorage('user', data);
        },
        updateRole(roles: { [key: string]: string }) {
            this.user.roles = roles;
            setItemInLocalStorage('user', this.user);
        },
        async login(userDetails: IUser, token: string,expiration_token:string) {
            this.setUser(userDetails);
            this.setToken(token,expiration_token);
        },
        setToken(token: string, response_expiration_token:string) {
            this.auth_token = token;
            setItemInLocalStorage('token', token);

            // const decodedToken = decodeTokenCHA(token);
            // if (decodedToken && decodedToken.exp) {
            //     this.expiration_token = decodedToken.exp * 1000; // Convertir a milisegundos
            //     setItemInLocalStorage('expiration_token', response_expiration_token);
            // }
            const timestamp = new Date(response_expiration_token).getTime();
            this.expiration_token = timestamp;
            setItemInLocalStorage('expiration_token',timestamp);
        },
        setRefreshToken(refreshToken: string) {
            this.refresh_token = refreshToken;
            setItemInLocalStorage('refresh_token', refreshToken);
        },
        setRedirectUrl(url: string) {
            this.redirect_url = url;
            const expiryTimeInMinutes = 5;
            cookies.set('redirect-url', url, { expires: expiryTimeInMinutes });
        },
        clear() {
            removeItemInLocalStorage('user');
            removeItemInLocalStorage('token');
            removeItemInLocalStorage('expiration_token');
            removeItemInLocalStorage('refresh_token');

            this.user = {} as IUser;
            this.auth_token = null;
            this.refresh_token = null;
            this.expiration_token = null;
            this.redirect_url = null;
            this.show_modal_token = false;
        },
        logout() {
            // Limpiar estados de variables.
            this.clear();

            navigateTo('/login');
            window.location.reload()
        },
        async refreshToken() {
            const runtimeConfig = useRuntimeConfig();

            const params = new URLSearchParams();
            params.append('grant_type', 'refresh_token');
            params.append('refresh_token', this.refresh_token || '');
            params.append('client_id', runtimeConfig.public.PASSPORT_CLIENT_ID);
            params.append('client_secret', runtimeConfig.public.PASSPORT_CLIENT_SECRET as string);
            params.append('redirect', runtimeConfig.public.PASSPORT_CALLBACK || '');

            try {
                const response = await fetch(runtimeConfig.public.PASSPORT_TOKEN, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: params
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const { access_token, refresh_token } = data;

                // Actualiza el token en el store
                this.setToken(access_token);

                // Actualiza el refresh token en el store
                this.setRefreshToken(refresh_token);

                // se actualiza el usuario
                const dataUser = decodeToken(access_token);
                this.setUser(dataUser);

            } catch (error) {
                console.error('Error:', error);
                // this.logout();
            }
        },
        showModalToken() {
            this.show_modal_token = true;
        },
        hideModalToken() {
            this.show_modal_token = false;
        },
    },
});