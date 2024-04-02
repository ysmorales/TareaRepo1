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
    },
    {
        id: "sect5",
        label: "Widgets",
        icon: "las la-cogs",
    },
    {
        id: "sect6",
        label: "Subsitios",
        icon: "las la-bars",
    },
    {
        id: "sect7",
        label: "Equipo",
        icon: "las la-plug",
    },
    {
        id: "sect3",
        label: "Button C",

        subMenu: [
            {
                id: "sect3-1",
                label: "Button C1",
                subMenu: [
                    {
                        id: "sect3-1-1",
                        label: "Button C1A",
                        link: "/sect2",
                    },
                    {
                        id: "sect3-1-2",
                        label: "Button C1B",
                        link: "/sect2",
                    },
                    {
                        id: "sect3-1-3",
                        label: "Button C1C",
                        link: "/sect2",
                    },
                ],
            },
            {
                id: "sect3-2",
                label: "Button C2",
                link: "/sect2",
            },
            {
                id: "sect3-3",
                label: "Button C3",
                link: "/sect2",
            },
        ],
    },
    {
        id: "sect4",
        label: "Button D",
        link: "/sect2",
    },
    {
        id: "sect5",
        label: "Button E",
        subMenu: [
            {
                id: "sect3-1-1",
                label: "Button C1A",
                link: "/sect2",
            },
            {
                id: "sect3-1-2",
                label: "Button C1B",
                link: "/sect2",
                icon: "las la-home",
            },
            {
                id: "sect3-1-3",
                label: "Button C1C",
                subMenu: [
                    {
                        id: "sect3-1-1",
                        label: "Button C1A",
                        link: "/sect2",
                    },
                    {
                        id: "sect3-1-2",
                        label: "Button C1B",
                        link: "/sect2",
                        isTargetBlank: true,
                    },
                    {
                        id: "sect3-1-3",
                        label: "Button C1C",
                        link: "/sect2",
                        isUnderline: true,
                    },
                ],
            },
        ],
    },
];
