import type {IIconName} from '../icon/types';

export type IAlertType = 'danger' | 'info' | 'success' | 'warning' | 'getDoc' | 'pending' | 'infoMail';

export type ITextColor = 'default' | 'primary';

export type IAlertConfig = {
    [key in IAlertType]: {
        bg: string;
        title: string;
        icon: string;
        defaultText: string;
    };
};
