export const filterProps = (props: Record<string, any>) => {
    const newProps: Record<string, any> = {};
    for (const key in props) {
        if (props[key] !== '') {
            newProps[key] = props[key];
        }
    }
    return newProps;
};