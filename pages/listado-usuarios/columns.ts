import type {ITableColumnData} from "~/components/DesignSystem/components/basic/table/interface";

export const columns: ITableColumnData[] = [{
    title: 'Nombre',
    key: 'name',
    filter: true
}, {
    title: 'Correo electrónico',
    key: 'mail'
}, {
    title: 'Rol',
    key: 'rol'
}, {
    title: '¿Activo?',
    key: 'active'
}, {title: 'Acciones', actions: {edit: true, delete: true, view: true}}]