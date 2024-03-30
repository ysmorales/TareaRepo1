import type { Ref } from "vue";

export function translateError(
  errorCode: string | Ref<string> | undefined,
): string | Ref<string> | null {
  // Define your custom error messages
  if (errorCode) {
    let errorMessages: { [key: string]: string } = {
      "Value is not a valid email address": "El valor no es un correo válido",
      "Value is required": "Campo requerido",
      "Value must be numeric": "El valor debe ser un número",
      // Add as many as you need
    };

    // Determine whether errorCode is a Ref or a string
    let key = typeof errorCode === "string" ? errorCode : errorCode.value;

    // Return the custom message for the given error code
    return errorMessages[key] || errorCode;
  } else return null;
}
