/**
 * Verify is response Status is 200
 * @param statusResponse 
 * @returns 
 */
export function isValidResponse(statusResponse: number | undefined) {
    if (!statusResponse) {
        return true
    }
    return statusResponse >= 200 && statusResponse <= 300
} 