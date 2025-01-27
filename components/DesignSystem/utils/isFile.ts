export const isFile = (file: any) =>
    Object.prototype.toString.call(file) === "[object File]";

export const isCsv = (file: any) => file.type === "text/csv"

export const isJPG = (file: any) => file.type === "image/png" || file.type === "image/jpeg"

export const isPdf = (file: any) => file.type === "application/pdf"