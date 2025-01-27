import type { IDataMenuAside } from "../../../../components/DesignSystem/interfaces/props";

export const exampleData: IDataMenuAside[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    link: "/dashboard",
    isUnderline: true,
    active: true,
  },
  {
    id: "profile",
    label: "Profile",
    link: "/profile",
    isUnderline: true,
    active: false,
  },
  {
    id: "settings",
    label: "Settings",
    link: "/settings",
    isUnderline: true,
    active: false,
  },
  {
    id: "logout",
    label: "Logout",
    link: "/logout",
    isUnderline: true,
    active: false,
  },
];
