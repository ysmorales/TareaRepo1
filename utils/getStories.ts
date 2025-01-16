
const modulesd = import.meta.glob(['../stories/**/*.stories.js', '../stories/**/*.stories.ts'], {
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