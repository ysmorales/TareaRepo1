import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";

export const competitionStage: ITableColumnData[] = [
    {
        title: "Autor(a)",
        key: "name",
        size: "w-[10%]",
    },
    {
        title: "Empresa",
        key: "empresa",
        size: "w-[10%]",
    },
    { title: "Correo Electrónico", key: "email", size: "w-[10%]" },
    {
        title: "Rol",
        key: "role",
        size: "w-[10%]",
    },
    { title: "Última modificación", key: "dead_line", size: "w-[10%]" },
    {title: "Acciones", actions: {edit: true, labels: {edit: 'Editar perfil'}}, size: "w-[5%]"},
];