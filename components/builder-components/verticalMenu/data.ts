import type {ISideMenuData} from "~/components/DesignSystem/components/navigation/sideMenu/interfaces";


export const menuItemsVerticalMenu: ISideMenuData[] = [
    {
        id: "sect1",
        label: "Mis prototipos",
        icon: "las la-clock",
        link: "/"
    },
    {
        id: "sect2",
        label: "Categorías",
        icon: "las la-tags",
        link: "/listado-categorias"
    }, {
        id: "sect3",
        label: "Menús",
        icon: "las la-bars",
        link: "/listado-menus"
    },
    {
        id: "sect4",
        label: "Complementos",
        icon: "las la-plug",
        subMenu: [
            {
                id: "sect3-1",
                label: "Galerías",
                icon: "las la-images",
                subMenu: [
                    {
                        id: "sect3-1-1",
                        label: "Listado",
                        link: "/listado-galerias",
                    },
                    {
                        id: "sect3-1-2",
                        label: "Categorías",
                        link: "/listado-galerias-categorias",
                    }
                ],
            },
            {
                id: "sect3-2",
                label: "Documentos",
                icon: "las la-file-alt",
                subMenu: [
                    {
                        id: "sect3-1-1",
                        label: "Listado",
                        link: "/listado-documentos",
                    },
                    {
                        id: "sect3-1-2",
                        label: "Categorías",
                        link: "/listado-documentos-categorias",
                    }
                ],
            },
            {
                id: "sect3-3",
                label: "Aplicaciones",
                icon: "las la-mobile-alt",
                subMenu: [
                    {
                        id: "sect3-1-1",
                        label: "Listado",
                        link: "/listado-aplicaciones",
                    },
                    {
                        id: "sect3-1-2",
                        label: "Instituciones",
                        link: "/listado-aplicaciones-instituciones",
                    }
                ],
            },
        ],
    },
    {
        id: "sect5",
        label: "Widgets",
        icon: "las la-cogs",
        link: "/listado-widgets",
    },
    {
        id: "sect6",
        label: "Subsitios",
        icon: "las la-sitemap",
        link: "/listado-subsitios",
    },
    {
        id: "sect7",
        label: "Equipo",
        icon: "las la-users",
        subMenu: [
            {
                id: "sect3-1-1",
                label: "Roles",
                link: "/listado-usuarios-roles",
                icon: "las la-users",
            },
            {
                id: "sect3-1-2",
                label: "Miembros",
                link: "/listado-usuarios",
                icon: "las la-user",
            }
        ],
    },

];
