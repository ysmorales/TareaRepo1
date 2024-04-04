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
    },
    {
        id: "sect6",
        label: "Proyectos",
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
