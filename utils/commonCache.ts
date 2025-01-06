
export const getCacheConfig = () => {

    return {
        getCachedData(key, nuxtApp): any {
            const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
            if (!data) {
                return;
            }

            const expirationDate = new Date(data.fetchedAt);
            expirationDate.setTime(expirationDate.getTime() + 10 * 1000);
            const isExpired = expirationDate.getTime() < Date.now();
            if (isExpired) {
                return;
            }

            if (data?.codigoRetorno !== 200) {
                console.log('error found')
            }

            return data;
        },
    }

}