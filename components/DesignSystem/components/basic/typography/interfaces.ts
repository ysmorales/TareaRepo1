export interface IDsTypographyElement {
    name: DsElementNameType;
    class?: string;
    component: string;
}

export type DsElementNameType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
