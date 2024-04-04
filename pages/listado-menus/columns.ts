import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";

export const columns: ITableColumnData[] = [{title: 'Id', key: 'id'}, {
    title: 'Nombre',
    key: 'link',
    type: 'link',
    filter: true
}, {
    title: 'Fecha',
    key: 'date'
}, {title: 'Acciones', actions: {edit: true, delete: true, view: true}}]