export type ITextType =
    | "text"
    | "number"
    | "email"
    | "url"
    | "phone"
    | "search"
    | "password";
export type ISize = "small" | "normal" | "medium" | "large" | "full";

export type IColor =
    | "primary"
    | "dark"
    | "danger"
    | "success"
    | "gray"
    | "neutral";
export type IIconColor = "primary" | "dark" | "danger" | "success" | "neutral";

export type IStyleString =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10";

export type IIconSize =
    | "small"
    | "base"
    | "default"
    | "medium"
    | "large"
    | "xlarge";

export type ISizeText = "small" | "normal" | "medium" | "large" | "full";
export type ITextAlignment = "left" | "center" | "right" | "justify";

export interface IUser {
    name?: string | null;
    password?: string | null;
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

export type role = "USER" | "OPERATOR" | "ADMIN";

export interface ISimpleSideMenu {
    id: number,
    text: string,
    icon?: string
}
