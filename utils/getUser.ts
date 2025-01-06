import { useAuthStore } from '~/stores/auth';
import service from "~/api-services/creator";

import { defaultRole, ADMIN, ANONYMOUS } from './constants';
import toArray from './toArray';
import type { IConfig, IUserProfile } from '~/api-services/global-interface/interfaces';

const useDefaultRole = false // for test purpose only

const get = (data: IUserProfile) => {
    const theUser = ({ ...data, roles: isProduction() ? data.roles : useDefaultRole ? [defaultRole] : data.roles })
    theUser.roles = theUser?.roles ?? theUser?.data?.roles ?? ANONYMOUS
    return theUser
}

const redirectToStartPage = (manifest: IConfig) => {
    const url = useRequestURL();
    if (url.pathname === `/aplicaciones/${manifest?.path}`) {
        let menuActive = manifest.menu.find((m: any) => m.onInit && m.onInit);
        if (!menuActive && manifest.menu.lenght > 0) {
            menuActive = manifest.menu[0];
        }
        if (menuActive && menuActive.link) {
            window.location.href = `${window.location.origin}${menuActive.link}`
        }
    }
}

const goToUnwantedUser = () => {
    throw createError
        ({
            statusCode: 403,
            statusMessage: 'user_not_found',
        })
}

const goToProfileEnpointError = () => {
    throw createError
        ({
            statusCode: 500,
            statusMessage: 'internal_server_error',
            message: 'Por favor intentarlo más tarde, de persistir el error consultar a nuestro equipo de soporte.',
        })
}

export const getUser = async (manifest: any, reload?: boolean, isAnonymous?: boolean) => {

    const authStore = useAuthStore();
    let roles;
    ({ roles } = authStore?.user)

    if (isAnonymous && !roles) {
        return get({} as IUserProfile)
    }

    let needReload = reload
    const apiProcedure = manifest.api
    let currentProcedure = authStore?.user?.currentProcedure ?? apiProcedure
    if (currentProcedure !== apiProcedure) {
        currentProcedure = apiProcedure
        needReload = true
    }

    if (!isAnonymous && isRole(roles, ANONYMOUS)) {
        needReload = true
    }

    if (!roles || needReload) {

        try {
            const dataUser = await service(manifest).users.getByRun()
            const theUser = get(
                {
                    ...authStore.user,
                    ...dataUser.respuesta,
                    ...(dataUser.respuesta?.functionary ?? {}),
                    functionary: {},
                    currentProcedure
                })

            authStore.setUser(theUser);

            return theUser;

        } catch (error) {
            redirectToStartPage(manifest)
            if (error.toString() === 'Error: Run no encontrado') {
                goToUnwantedUser()
            } else {
                goToProfileEnpointError()
            }
        }
    }
    return get(authStore?.user)
}

export const isRole = (roles: string[], role: string | string[]) => toArray(roles).find(rol => toArray(role).find(r => r === rol))

export const canAccess = (roles: string[], role: string | string[]) => {
    let currentRoles = roles
    if (!isNotEmpty(roles)) {
        const authStore = useAuthStore();
        currentRoles = authStore?.user?.roles
    }

    const isAdmin = isRole(currentRoles, ADMIN)
    if (isAdmin) {
        return true
    }
    return isRole(currentRoles, role)
}