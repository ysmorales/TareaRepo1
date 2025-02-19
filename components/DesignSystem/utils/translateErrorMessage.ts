import type { Ref } from "vue";

export function translateError(
  errorCode: string | null | undefined | Ref<string>,
): string | Ref<string> | null {
  // Define your custom error messages
  if (errorCode) {
    const errorMessages: { [key: string]: string } = {
      "Value is not a valid email address": "El valor no es un correo válido",
      "Value is required": "Campo requerido",
      "Value must be numeric": "El valor debe ser un número",
      "The maximum length allowed is 1000":
        "El máximo de caracteres permitidos es 1000",
      "This field should be at least 8 characters long":"Este campo debe tener al menos 8 caracteres",
      // Add as many as you need
    };

    // Determine whether errorCode is a Ref or a string
    // Return the custom message for the given error code
    return errorMessages[errorCode as any] || errorCode;
  } else return null;
}

export const getErrorMessage = (error: any): string | undefined => {
  if (error && error.$message) {
    const msg = translateError(error.$message);
    if (typeof msg === "string") {
      return msg;
    }
  }
  return undefined;
};
