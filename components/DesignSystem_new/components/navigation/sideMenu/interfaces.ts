export interface ISideMenuData {
	id: string;
	label: string;
	icon?: string;
	link?: string;
	active?: boolean,
	isTargetBlank?: boolean;
	isUnderline?: boolean;
	subMenu?: {
		id: string;
		label: string;
		icon?: string;
		link?: string;
		isTargetBlank?: boolean;
		isUnderline?: boolean;
		subMenu?: {
			id: string;
			label: string;
			icon?: string;
			link: string;
			isTargetBlank?: boolean;
			isUnderline?: boolean;
		}[];
	}[];
}
