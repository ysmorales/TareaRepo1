export default function (list: any) {
    return Array.isArray(list) ? list : [list]
}

export const toArrayString = (text?: string) => text && text.split(",") as string[];

export const createArray = (num: number) => Array.from({ length: num }, (_, index) => index + 1)
