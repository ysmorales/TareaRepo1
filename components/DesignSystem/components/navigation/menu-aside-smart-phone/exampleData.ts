import type {IDataMenuAside} from "../../../../DesignSystem/interfaces/props";

export const exampleComponentData: IDataMenuAside[] = [
    {
        id: "home",
        label: "Home",
        link: "/home",
        isUnderline: false,
        active: true,
    },
    {
        id: "about",
        label: "About Us",
        link: "/about",
        isUnderline: false,
        active: false,
    },
    {
        id: "services",
        label: "Services",
        link: "/services",
        isUnderline: true,
        active: false,
    },
    {
        id: "contact",
        label: "Contact",
        link: "/contact",
        isUnderline: true,
        active: false,
    },
];