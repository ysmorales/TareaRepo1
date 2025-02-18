export type ITextType =
    | 'text'
    | 'number'
    | 'email'
    | 'url'
    | 'phone'
    | 'search'
    | 'date'
    | 'time'
    | 'password';
export type ISize = 'small' | 'normal' | 'medium' | 'large' | 'full';

export type IColor =
    | 'primary'
    | 'dark'
    | 'danger'
    | 'success'
    | 'gray'
    | 'neutral';
export type IIconColor = 'primary' | 'dark' | 'danger' | 'success' | 'neutral';

export type IStyleString =
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10';

export type IIconSize =
    | 'small'
    | 'base'
    | 'default'
    | 'medium'
    | 'large'
    | 'xlarge';

export type ISizeText = 'small' | 'normal' | 'medium' | 'large' | 'full';
export type ITextAlignment = 'left' | 'center' | 'right' | 'justify';

export interface IUser {
    name?: string | null;
    password?: string | null;
    imageSrc?: string | null;
    photo?: string | null;
    role?: string | null;
    token?: string | null;
    id?: number | null;
    email?: string | null;
    email_verified_at?: string | null;
    roles?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    auth_token?: string | null;
    auth_refresh_token?: string | null;
    auth_expiration_at?: string | null;
}

export interface MenuItem {
    name: string;
    icon: string;
    title: string;
    url?: string;
}

export type role = 'USER' | 'OPERATOR' | 'ADMIN';

export interface ISimpleSideMenu {
    id: number;
    text: string;
    link?: string | null;
    icon?: string;
    url: string;
}

export type IError = IErrorWithMessage | null | string

export interface IErrorWithMessage {
    message?: string
    glosaRetorno?: string
}

export interface IQuery {
    paginate: number | string,
    page: number | string,
}

export interface IMeta {
    current_page: number
    from: number
    last_page: number
    links: Array<{ url: string | null, label: string, active: boolean }>
    path: string
    per_page: number
    to: number
    total: number
}

export interface IListCardData {
    data: IListCard[];
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        links: {
            url: null | string;
            label: string;
            active: boolean;
        }[];
        path: string;
        per_page: number;
        to: number;
        total: number;
    };
}

export interface IListCard {
    id: number;
    end_date?: string;
    city?: string;
    stages?: [];
    bases?: string;
    requirements?: string;
    assignment?: string;
    url_image: string;
    zoomImageUrl: string;
    summary: string;
    expireDate: string;
    link?: string;
    finalLInk?: {
        icon: string;
        url: string;
        text: string;
    };
    responsibilities?: string;
    name: string;
    details: string;
    status: string;
    address: string;
    created_at: string;
    updated_at: string;
}

export interface ITimeChangeRequest {
    created_at?: string;
    name?: string;
    id: number;
    management_email?: string;
    nombre_funcionario?: string;
    range_type?: string;
    run?: string;
    email?: string;
    reason?: string;
    status?: 1 | 2 | 3 | 4;
    user_id?: number;
    dgdp?: string;
    receipt?: string;
    status_system?: string;
    date_change?: string;
    description?: string;
    arrival_date?: string;
    operator_description?: string;
    sent_to?: {
        to_regional_direction?: boolean;
        delivery_place?: {
            name?: string;
            address?: string;
        };
    };
}
