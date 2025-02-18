import type { IFile } from "~/api-services/applications/certificado-capacitaciones";

export const isFile = (file: any) =>
    Object.prototype.toString.call(file) === "[object File]";

export const isCsv = (file: Partial<IFile>) => file.type === "text/csv"

export const isJPG = (file: Partial<IFile>) => file.type === "image/png" || file.type === "image/jpeg"

export const isPdf = (file: Partial<IFile>) => file.type === "application/pdf"