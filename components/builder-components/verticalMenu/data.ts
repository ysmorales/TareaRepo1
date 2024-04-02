import type {ISideMenuData} from "~/components/DesignSystem/components/navigation/sideMenu/interfaces";


export const menuItemsVerticalMenu: ISideMenuData[] = [
    {
        id: "sect1",
        label: "Mis prototipos",
        icon: "las la-clock",
    },
    {
        id: "sect2",
        label: "Categorías",
        icon: "las la-tags",
    }, {
        id: "sect3",
        label: "Menús",
        icon: "las la-bars",
    },
    {
        id: "sect4",
        label: "Complementos",
        icon: "las la-plug",
        subMenu: [
            {
                id: "sect3-1",
                label: "Galerías",
                subMenu: [
                    {
                        id: "sect3-1-1",
                        label: "Listado",
                        link: "/sect2",
                    },
                    {
                        id: "sect3-1-2",
                        label: "Categorías",
                        link: "/sect2",
                    }
                ],
            },
            {
                id: "sect3-2",
                label: "Documentos",
                subMenu: [
                    {
                        id: "sect3-1-1",
                        label: "Listado",
                        link: "/sect2",
                    },
                    {
                        id: "sect3-1-2",
                        label: "Categorías",
                        link: "/sect2",
                    }
                ],
            },
            {
                id: "sect3-3",
                label: "Aplicaciones",
                subMenu: [
                    {
                        id: "sect3-1-1",
                        label: "Listado",
                        link: "/sect2",
                    },
                    {
                        id: "sect3-1-2",
                        label: "Instituciones",
                        link: "/sect2",
                    }
                ],
            },
        ],
    },
    {
        id: "sect5",
        label: "Widgets",
        icon: "las la-cogs",
    },
    {
        id: "sect6",
        label: "Subsitios",
        icon: "las la-sitemap",
    },
    {
        id: "sect7",
        label: "Equipo",
        icon: "las la-users",
        subMenu: [
            {
                id: "sect3-1-1",
                label: "Roles",
                link: "/sect2",
            },
            {
                id: "sect3-1-2",
                label: "Miembros",
                link: "/sect2",
            }
        ],
    },

];
