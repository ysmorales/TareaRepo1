export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Eduardo')
    const sideMenuType = ref<'default' | 'builder'>('default')
    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    function changeName(newName: string) {
        name.value = newName;
    }

    function changeSideMenuType(newName: 'default' | 'builder') {
        sideMenuType.value = newName;
    }

    return {count, name, doubleCount, increment, changeName, sideMenuType, changeSideMenuType}
})