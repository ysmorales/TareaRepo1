
import { helpers } from "@vuelidate/validators";

const getFile = (value) => {
    try {
        if (value instanceof File) {
            return value
        } else {
            if (Array.isArray(value)) {
                return value
            }
            return document.querySelector(value)
        }
    } catch (error) {

    }

    return value
}

// Validación personalizada para archivos de imagen
export const isImage = helpers.withMessage(
    "El archivo debe ser una imagen",
    (valueF: { name: string } | File | null) => {
        const value = getFile(valueF);
        if (value instanceof File) {
            return value.type.startsWith("image/");
        }
        return true;
    },
);


// Validación personalizada para archivos de imagen
export const isImageOrPdf = helpers.withMessage(
    "Solo se admiten ficheros JPG, PNG o PDF",
    (valueF: { name: string } | File | null) => {
        const value = getFile(valueF);
        if (value instanceof File) {
            return isJPG(value) || isPdf(value)
        }
        return true;
    },
);

export const mustBeCool = helpers.withMessage(
    ({ $invalid }) => `${$invalid ? "some" : "valid"}`,
    () => {
        return true;
    }
)

export const maxFileSize = helpers.withMessage(
    "Cada archivo no debe exceder los 10 MB",
    (valueF: File[] | null) => {
        const value = getFile(valueF);
        return !value?.size || value.size <= 10 * 1024 * 1024
    },
);

export const maxFilesSize = helpers.withMessage(
    "Cada archivo no debe exceder los 10 MB",
    (value: File[] | null) => {
        return value
            ? value.every((file) => !file.size || file.size <= 10 * 1024 * 1024)
            : true; // 10 MB in bytes
    },
);

export const isPDF = helpers.withMessage(
    "Cada archivo debe ser un PDF",
    (valueF: File[] | null) => {
        const value = getFile(valueF);
        return value
            ? value.every((file) => !file.type || file.type === "application/pdf")
            : true;
    },
);

export const maxArrayLength = helpers.withMessage(
    "No se pueden agregar más de 10 elementos",
    (value: Array<File | { name: string }> | null) => {
        return value ? value.length <= 10 : true;
    },
);