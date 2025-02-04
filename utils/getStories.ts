
const modulesd = import.meta.glob(['../stories/**/*.stories.js', '../stories/**/*.stories.ts', '../components/builder-extra/**/*.stories.ts', '../components/builder-extra/**/*.stories.js'], {
    import: 'default',
    eager: true,
})

export const getStories = (): any => {
    return modulesd;
};

export const getAllComponents = () => Object.keys(getStories()).filter(d => isNotEmpty(getNameComponentKey(d)))

export const getNameComponentKey = (keyName: string) => getStories()[keyName]?.component?.__name ?? ''

export const getComponentKey = (keyName: string) => getStories()[keyName]?.component

export const getComponentByName = (nameFind: string) => getStories()[getAllComponents().find(keyName => getNameComponentKey(keyName) === nameFind)]

export const getSlotsStorie = (keyName: string) => getStories()[keyName]?.argTypes?.default?.slots

export const getInfoFieldsComponent = (module) => ({
    id: module.id,
    component: getComponentKey(module.item),
    slots: getSlotsStorie(module.item)
})