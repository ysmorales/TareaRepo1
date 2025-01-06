
import toArray from './toArray';
import { getUser, isRole } from './getUser';
import type { IConfig, IMenu } from '~/global-interface/interfaces';
import type { RoleName } from '~/roles/roles';

export default function defineNuxtRouteMiddleware(manifest: IConfig) {
    return (async (to: { path: any; }) => {
        const currentPath = to.path;
        if (isProduction()) {
            if (manifest.exclude) {
                const runtimeConfig = useRuntimeConfig()
                const APP_ENV = runtimeConfig.public.APP_ENV || 'production'
                const noDone = manifest.exclude.includes(APP_ENV)
                if (noDone) {
                    return abortNavigation()
                }
            }
        }
        const currentMenu = manifest?.menu?.find((item: IMenu) => currentPath.startsWith(item.link))
        if (currentMenu) {
            const isAnonymous = isRole(toArray(currentMenu.roles), [ANONYMOUS]);
            const user = await getUser(manifest, false, isAnonymous)

            let findRole = toArray(user.roles).some((rol: string) => {
                return (currentMenu.roles as RoleName[]).find((r: string) => r === rol);
            })

            if (isAnonymous) {
                findRole = true
            }

            if (!findRole) {
                // return abortNavigation()
                return navigateTo('/aplicaciones')
            }
        }
    })
}
