import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";

export const columns: ITableColumnData[] = [{
    title: 'Nombre',
    key: 'name',
    type: 'avatar'
}, {
    title: 'Correo electrónico',
    key: 'mail',
    filter: {filterType: 'text'}
}, {
    title: 'Rol',
    key: 'rol'
}, {
    title: '¿Activo?',
    key: 'active'
}, {title: 'Acciones', actions: {edit: true, delete: true, view: true}}]