import { getErrorMessage } from "~/components/DesignSystem/utils/translateErrorMessage";

export const getErrorFieldForm = (fieldForm: any) => {

    if (isNotEmpty(fieldForm?.$errors)) {
        return getErrorMessage(fieldForm?.$errors[0])
    }

    return fieldForm?.$silentErrors[0]?.$message;
}