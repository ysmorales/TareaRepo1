export interface ISideMenuData {
  id: string;
  label: string;
  icon?: string;
  link?: string;
  isTargetBlank?: boolean;
  isUnderline?: Boolean;
  subMenu?: {
    id: string;
    label: string;
    icon?: string;
    link?: string;
    isTargetBlank?: boolean;
    isUnderline?: Boolean;
    subMenu?: {
      id: string;
      label: string;
      icon?: string;
      link: string;
      isTargetBlank?: boolean;
      isUnderline?: Boolean;
    }[];
  }[];
}
