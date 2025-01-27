export interface IComponentBaseProp {
  id?: string;
  class?: string;
}

export interface IFormElementProp extends IComponentBaseProp {
  disabled?: boolean;
  required?: boolean;
  label?: string;
  hideLabel?: boolean;
  // rounded?: boolean;
  focus?: boolean;
}

export interface User {
  image: string;
  name: string;
  note: string | null;
}

export interface RowLog {
  user?: User;
  date?: string | Date;
  status?: string;
  info?: string;
  extraInfo?: { label: string; value: string }[] | null;
}

export interface IDataMenuAside {
  id: string;
  label: string;
  link: string;
  isUnderline: boolean;
  active: boolean;
}
