import type { IMap, IQuery } from "~/global-interface/interfaces";

let queryDic = {};
let timt: NodeJS.Timeout;

const clearQuery = (query: Partial<IQuery>) => {
    const theQuery = {};

    Object.keys(query).forEach((key) => {
        if ((query as IMap)[key] && (query as IMap)[key] !== "") {
            (theQuery as IMap)[key] = (query as IMap)[key];
        }
    });
    queryDic = {}
    return theQuery;
};

export const goToNewQuery = (newQuery: Partial<IQuery>, router) => {
    clearTimeout(timt);
    timt = setTimeout(() => {
        router.push({ query: clearQuery(newQuery) });
    }, 30);
};

export const goTo = (newQuery: Partial<IQuery>, router, route) => {
    queryDic = { ...route.query, ...queryDic, ...newQuery };
    goToNewQuery(queryDic, router);
};

export const goToPath = (path: string, query?: any) => navigateTo({ path, query });