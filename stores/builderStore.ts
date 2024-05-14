export const useCounterStore = defineStore('counter', () => {
    const builderItems = reactive([{type: 'input-text', name: 'valor'}])
    const sideMenuType = ref<'default' | 'builder'>('default')


    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    return {builderItems, sideMenuType, changeSideMenuType}
})