
export const getClassRow = function (node) {
    const colsNum =
        node.type === "row" && node.settings
            ? `grid grid-cols-${node.settings?.rowNumCols ?? "12"}`
            : "";

    return [colsNum];
};

const calcRem = (value) => `${value / 4}rem`;

export const getCustomStyleRow = function (node) {

    if (!node?.settings) {
        return {}
    }
    return {
        marginLeft: calcRem(node.settings?.margin?.left),
        marginRight: calcRem(node.settings?.margin?.right),
        marginTop: calcRem(node.settings?.margin?.top),
        marginBottom: calcRem(node.settings?.margin?.bottom),

        paddingLeft: calcRem(node.settings?.padding?.left),
        paddingRight: calcRem(node.settings?.padding?.right),
        paddingTop: calcRem(node.settings?.padding?.top),
        paddingBottom: calcRem(node.settings?.padding?.bottom),

        backgroundColor: node.settings?.backgroundColor,
    };
};

export const getTypeVariant = (node) =>
    node?.settings?.form?.isForm
        ? "form"
        : node?.type === "section"
            ? "section"
            : "div";


const handleSubmit = (theNode, validateForm) => {
    console.log({ validateForm }, 'aquii')
    try {
        validateForm.value.$touch();
    } catch (error) {
        validateForm.$touch()
    }

    console.log("aquiiiiiii", validateForm);
};

export const getEventsVariant = (node, validateForm) => {
    if (getTypeVariant(node) === "form") {
        return {
            submit: (e) => {
                e.preventDefault();
                handleSubmit(node, validateForm);
            },
        };
    }
    return {};
};


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