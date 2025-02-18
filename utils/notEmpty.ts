import { isProxy, toRaw } from 'vue';


export const isNotEmpty = (data: string | Object | undefined | Array<any>): any => {
    if (isProxy(data)) {
        return isNotEmpty(toRaw(data))
    }
    if (isFile(data)) {
        return true
    }
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        return Object.keys(data).length > 0
    }
    if (Array.isArray(data)) {
        return parseInt(JSON.parse(JSON.stringify(data)).length, 10) > 0
    }
    if (data !== undefined &&
        data !== null &&
        data !== "null" &&
        data !== "undefined" &&
        data !== ''
    ) {
        return true;
    }
    return false;
};