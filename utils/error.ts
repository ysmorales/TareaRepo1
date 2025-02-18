export function errorHandler() {

	return {
		fetchError(error: unknown) {
			console.log({ fetchError: error })
		}
	}
}

const showTheLog = false
export const showLog = (log: any) => {
	if (showTheLog) {
		console.log(log)
	}
}