import type { ISideMenuData } from "./interfaces";

export const menuItems: ISideMenuData[] = [
  {
    id: "sect1",
    label: "Button A",
    icon: "las la-home",
  },
  {
    id: "sect2",
    label: "Button B",
    link: "/sect2",
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
