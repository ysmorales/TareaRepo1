export interface IItemRequest {
    id: number | string
    status: string
    created_at: string
    run: string
    date_change: string
    functionary: IFunctionary
    status_system?: string
    range_type?: string
    reason?: string
    file?: string
}

export interface IItems {
    title: string;
    subItems: SubItem[];
}

export interface SubItem {
    label: string;
    value?: string | string[];
    isTag?: boolean;
    tagColor?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rowRender?: any;
    class?: string
}

export interface IFunctionary {
    run: string
    nombre_funcionario: string
    email: string
    sexo: string
    fecha_ingreso: string
    region: string
    departamento: string
    unidad: string
    cargo: string
    jefatura: IJefatura
    horario?: string
}

export interface IJefatura {
    run: string
    nombre_supervisor: string
    email: string
}
