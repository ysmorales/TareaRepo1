
const modulesd = import.meta.glob('../stories/**/*.stories.js', {
    import: 'default',
    eager: true,
})

export const getStories = (): any => {
    return modulesd;
};

export const getAllComponents = () => Object.keys(modulesd).filter(d => isNotEmpty(getNameComponentKey(d)))

export const getNameComponentKey = (keyName: string) => modulesd[keyName].component.__name