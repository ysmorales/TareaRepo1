import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";

export const prototipeColumns: ITableColumnData[] = [{title: 'Id', key: 'id'}, {
    title: 'Nombre',
    key: 'link',
    type: 'link',
    filter: {filterType: 'text'}
}, {
    title: 'Fecha',
    key: 'date'
}, {
    title: 'Categoría Padre',
    key: 'category',
    filter: {filterType: 'text'}
}, {title: 'Acciones', actions: {edit: true, delete: true, view: true}}]