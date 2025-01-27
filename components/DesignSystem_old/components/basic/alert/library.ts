import type {IAlertConfig} from './types';

export const alertConfig: IAlertConfig = {
    danger: {
        bg: 'bg-red-100 border border-red-500 rounded-none',
        title: 'text-red-500',
        icon: 'exclamation-triangle',
        defaultText: 'Error',
    },
    info: {
        bg: 'bg-blue-100 border border-primary-500 rounded-none',
        title: 'text-primary-500 text-2xl',
        icon: 'exclamation-circle',
        defaultText: 'Información',
    },
    infoMail: {
        bg: 'bg-blue-100 border border-primary-500 rounded-none',
        title: 'text-primary-500 text-2xl',
        icon: 'envelope',
        defaultText: 'Información',
    },
    success: {
        bg: 'bg-success-100 border-success-500 border rounded-none',
        title: 'text-success-500 text-2xl',
        icon: 'check-circle',
        defaultText: '¡Éxito! La tarea se ha completado correctamente.',
    },
    warning: {
        bg: 'bg-warning-100 border-warning-500 border rounded-none',
        title: 'text-warning-500 text-2xl',
        icon: 'bell',
        defaultText: 'Warning',
    },
    getDoc: {
        bg: 'bg-cyan-500 border border-primary-500 rounded-none',
        title: 'text-primary-500 text-2xl',
        icon: 'file',
        defaultText: 'Información',
    },
    pending: {
        bg: 'bg-orange-100 border border-orange-900 rounded-none',
        title: 'text-orange-900 text-2xl',
        icon: 'bell',
        defaultText: 'Información',
    },
};
