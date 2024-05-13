import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";

export const columns: ITableColumnData[] = [{title: 'Id', key: 'id'}, {
    title: 'Nombre',
    key: 'link',
    type: 'link',
    filter: {filterType: 'text'}
}, {
    title: 'Fecha',
    key: 'date'
}, {
    title: 'Autor',
    key: 'author'
}, {title: 'Acciones', actions: {edit: true, delete: true, view: true}}]