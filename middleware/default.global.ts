import {useBuilderStore} from "~/stores/builderStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useBuilderStore()
    const {changeSideMenuType} = toRefs(store)
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    if (to.path == '/builder') {
        changeSideMenuType.value('builder')
    } else {
        changeSideMenuType.value('default')
    }
})