import type { Ref } from 'vue';

export function translateError(
	errorCode: string | null | undefined | Ref<string>,
): string | Ref<string> | null {
	// Define your custom error messages
	if (errorCode) {
		const errorMessages: { [key: string]: string } = {
			'Value is not a valid email address': 'El valor no es un correo válido',
			'Value is required': 'Campo requerido',
			'Value must be numeric': 'El valor debe ser un número',
			// Add as many as you need
		};

		// Determine whether errorCode is a Ref or a string
		// Return the custom message for the given error code
		return errorMessages[errorCode as any] || errorCode;
	}
	else return null;
}

export const getErrorMessage = (error: any): string | undefined => {
	if (error && error.$message) {
		const msg = translateError(error.$message);
		if (typeof msg === 'string') {
			return msg;
		}
	}
	return undefined;
};
