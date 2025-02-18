import type { IBreadcrumbItem } from '~/components/DesignSystem/components/navigation/breadcrumb/interface';
const url = useRequestURL();

export const commonBreadcrumbItems = (props): IBreadcrumbItem[] => [
	{
		label: "Intranet",
		link: "https://somos.ips.chileatiende.gob.cl/intranet/",
		icon: "home",
	},
	{
		label: "Aplicaciones",
		link: "https://somos.ips.chileatiende.gob.cl/aplicaciones/"
	},
	{
		label: props.config?.title,
		link: `${url.pathname}`.split("/").splice(0, 2).join("/"),
	},
];