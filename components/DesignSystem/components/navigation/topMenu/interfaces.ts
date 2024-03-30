export interface IMenuItem {
  id?: string;
  text: string;
  icon?: string;
  open?: boolean,
  parent?: IMenuItem|null,
  items?: IMenuItem[],
};
