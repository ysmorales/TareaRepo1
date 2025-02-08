import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";

export const competitionStage: ITableColumnData[] = [
    {
        title: "Autor(a)",
        key: "name",
        size: "w-[10%]",
    },
    {
        title: "Run",
        key: "start_date",
        size: "w-[10%]",
    },
    { title: "Correo Electrónico", key: "end_date", size: "w-[10%]" },
    {
        title: "Permisos",
        key: "status_text",
        size: "w-[10%]",
    },
    { title: "Última modificación", key: "dead_line", size: "w-[10%]" },
    { title: "Acción", key: "dead_line", size: "w-[10%]" },
];