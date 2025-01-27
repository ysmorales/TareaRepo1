import type { IStyleString, ITextAlignment } from '../interfaces/elements';

export const textAlignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
};
export const borderClasses = {
    0: 'border-0',
    1: 'border',
    2: 'border-2',
    3: 'border-3',
    4: 'border-4',
    5: 'border-5',
    6: 'border-6',
    7: 'border-7',
    8: 'border-8',
    9: 'border-9',
    10: 'border-10',
};
export const borderTopClasses = {
    0: 'border-t-0',
    1: 'border-t-1',
    2: 'border-t-2',
    3: 'border-t-3',
    4: 'border-t-4',
    5: 'border-t-5',
    6: 'border-t-6',
    7: 'border-t-7',
    8: 'border-t-8',
    9: 'border-t-9',
    10: 'border-t-10',
};
export const borderLeftClasses = {
    0: 'border-l-0',
    1: 'border-l-1',
    2: 'border-l-2',
    3: 'border-l-3',
    4: 'border-l-4',
    5: 'border-l-5',
    6: 'border-l-6',
    7: 'border-l-7',
    8: 'border-l-8',
    9: 'border-l-9',
    10: 'border-l-10',
};
export const borderRightClasses = {
    0: 'border-r-0',
    1: 'border-r-1',
    2: 'border-r-2',
    3: 'border-r-3',
    4: 'border-r-4',
    5: 'border-r-5',
    6: 'border-r-6',
    7: 'border-r-7',
    8: 'border-r-8',
    9: 'border-r-9',
    10: 'border-r-10',
};
export const borderColorClasses = {
    default: 'border-neutral-800',
    primary: 'border-primary-500',
    danger: 'border-danger-500',
    difumine: 'border-slate-300'
};
export const borderBottomClasses = {
    0: 'border-b-0',
    1: 'border-b-1',
    2: 'border-b-2',
    3: 'border-b-3',
    4: 'border-b-4',
    5: 'border-b-5',
    6: 'border-b-6',
    7: 'border-b-7',
    8: 'border-b-8',
    9: 'border-b-9',
    10: 'border-b-10',
};

export const sizeTextAreaClasses = {
    small: 'h-[50px] w-full',
    normal: 'h-[100px] w-full',
    medium: 'h-[150px] w-full',
    large: 'h-[200px] w-full',
    full: 'w-full h-auto',
};

export const sizeImagesClasses = {
    xSmall: 'w-4',
    small: 'w-8',
    normal: 'w-12',
    medium: 'w-24',
    large: 'w-32',
    xLarge: 'w-52',
    xxLarge: 'w-80',
    auto: 'auto',
};

export const sizeAvatarClasses = {
    xSmall: 'w-4 h-4 titles-4',
    small: 'w-8 h-8 titles-8',
    normal: 'max-w-10 w-12 titles-12',
    medium: 'w-24 titles-24',
    large: 'w-32 titles-32',
};
export const textWeightClasses = {
    w1: 'font-thin',
    w2: 'font-extralight',
    w3: 'font-light',
    w4: 'font-normal',
    w5: 'font-medium',
    w6: 'font-semibold',
    w7: 'font-bold',
    w8: 'font-extrabold',
    w9: 'font-black',
};

export const elementSizes = {
    small: 'text-sm',
    normal: 'text-base',
    medium: 'text-lg',
    large: 'text-xl',
    full: 'text-xxl',
};
export const inputSizes = {
    small: 'w-1/5',
    normal: 'w-1/4',
    medium: 'w-1/3',
    large: 'w-1/2',
    full: 'w-full',
};

export const colorClasses = {
    white: 'bg-slate-50',
    danger: 'bg-danger-500 text-white',
    dark: 'bg-neutral-800 text-white',
    gray: 'bg-gray-500 text-white',
    neutral: 'bg-neutral-100',
    primary: 'bg-primary-500 text-white',
    strongGreen: 'tag-dark-alpha',
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-white',
    greenOutline: 'text-green-500 border border-green-500 bg-white',
    primaryOutline: 'text-primary-500 border border-primary-500 bg-white',
};

export const outlineColorClasses = {
    danger: 'text-danger-500 border border-danger-500 bg-white',
    dark: 'text-neutral-800 border border-neutral-800 bg-white',
    gray: 'text-gray-500 border border-gray-500 bg-white',
    neutral: 'border border-neutral-200 bg-white',
    primary: 'text-primary-500 border border-primary-500 bg-white',
    strongGreen: 'tag-dark-alpha bg-white',
    success: 'text-success-500 border border-success-500 bg-white',
    warning: 'text-warning-500 border border-warning-500 bg-white',
    greenOutline: 'border-green-500',
    primaryOutline: 'text-primary-500 border border-primary-500 bg-white',
};

export const textColorClasses = {
    primary: 'text-primary-500',
    dark: 'text-neutral-800',
    danger: 'text-danger-500 ',
    success: 'text-success-500',
    gray: 'text-gray-500',
    neutral: 'text-white',
};
export const imageColorClassesSvg = {
    primary: 'icon-blue',
    dark: 'icon-black',
    danger: 'icon-danger',
    success: 'icon-success',
    gray: 'icon-gray',
    neutral: 'icon-white',
};
export const textSizeClasses = {
    small: 'text-sm',
    large: 'text-5xl',
    medium: 'text-3xl',
    base: 'text-base',
};

export const iconSizeClasses = {
    small: 'text-sm',
    base: 'text-base',
    default: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl',
    xlarge: 'text-5xl',
};

export const titleClasses = {
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl ',
    h4: 'text-base',
    h5: 'text-base',
    h6: 'text-base',
};
export const fontClasses = {
    roboto: 'font-roboto',
    robotoSlab: 'font-robotoSlab',
};
export const marginClasses = {
    0: 'm-0',
    1: 'm-1',
    2: 'm-2',
    3: 'm-3',
    4: 'm-4',
    5: 'm-5',
    6: 'm-6',
    7: 'm-7',
    8: 'm-8',
    9: 'm-9',
    10: 'm-10',
};
export const marginTopClasses = {
    0: 'mt-0',
    1: 'mt-1',
    2: 'mt-2',
    3: 'mt-3',
    4: 'mt-4',
    5: 'mt-5',
    6: 'mt-6',
    7: 'mt-7',
    8: 'mt-8',
    9: 'mt-9',
    10: 'mt-10',
};
export const marginLeftClasses = {
    0: 'ml-0',
    1: 'ml-1',
    2: 'ml-2',
    3: 'ml-3',
    4: 'ml-4',
    5: 'ml-5',
    6: 'ml-6',
    7: 'ml-7',
    8: 'ml-8',
    9: 'ml-9',
    10: 'ml-10',
};
export const marginRightClasses = {
    0: 'mr-0',
    1: 'mr-1',
    2: 'mr-2',
    3: 'mr-3',
    4: 'mr-4',
    5: 'mr-5',
    6: 'mr-6',
    7: 'mr-7',
    8: 'mr-8',
    9: 'mr-9',
    10: 'mr-10',
};
export const marginBottomClasses = {
    0: 'mb-0',
    1: 'mb-1',
    2: 'mb-2',
    3: 'mb-3',
    4: 'mb-4',
    5: 'mb-5',
    6: 'mb-6',
    7: 'mb-7',
    8: 'mb-8',
    9: 'mb-9',
    10: 'mb-10',
};

export const marginXClasses = {
    0: 'mx-0',
    1: 'mx-1',
    2: 'mx-2',
    3: 'mx-3',
    4: 'mx-4',
    5: 'mx-5',
    6: 'mx-6',
    7: 'mx-7',
    8: 'mx-8',
    9: 'mx-9',
    10: 'mx-10',
};

export const marginYClasses = {
    0: 'my-0',
    1: 'my-1',
    2: 'my-2',
    3: 'my-3',
    4: 'my-4',
    5: 'my-5',
    6: 'my-6',
    7: 'my-7',
    8: 'my-8',
    9: 'my-9',
    10: 'my-10',
};

export const paddingClasses = {
    0: 'p-0',
    1: 'p-1',
    2: 'p-2',
    3: 'p-3',
    4: 'p-4',
    5: 'p-5',
    6: 'p-6',
    7: 'p-7',
    8: 'p-8',
    9: 'p-9',
    10: 'p-10',
};
export const paddingTopClasses = {
    0: 'pt-0',
    1: 'pt-1',
    2: 'pt-2',
    3: 'pt-3',
    4: 'pt-4',
    5: 'pt-5',
    6: 'pt-6',
    7: 'pt-7',
    8: 'pt-8',
    9: 'pt-9',
    10: 'pt-10',
};
export const paddingLeftClasses = {
    0: 'pl-0',
    1: 'pl-1',
    2: 'pl-2',
    3: 'pl-3',
    4: 'pl-4',
    5: 'pl-5',
    6: 'pl-6',
    7: 'pl-7',
    8: 'pl-8',
    9: 'pl-9',
    10: 'pl-10',
};
export const paddingRightClasses = {
    0: 'pr-0',
    1: 'pr-1',
    2: 'pr-2',
    3: 'pr-3',
    4: 'pr-4',
    5: 'pr-5',
    6: 'pr-6',
    7: 'pr-7',
    8: 'pr-8',
    9: 'pr-9',
    10: 'pr-10',
};
export const paddingBottomClasses = {
    0: 'pb-0',
    1: 'pb-1',
    2: 'pb-2',
    3: 'pb-3',
    4: 'pb-4',
    5: 'pb-5',
    6: 'pb-6',
    7: 'pb-7',
    8: 'pb-8',
    9: 'pb-9',
    10: 'pb-10',
};
export const propCommon = {
    margin: String as () => IStyleString,
    marginTop: String as () => IStyleString,
    marginLeft: String as () => IStyleString,
    marginRight: String as () => IStyleString,
    marginBottom: {
        type: String as () => IStyleString,
    },
    padding: String as () => IStyleString,
    paddingTop: {
        type: String as () => IStyleString,
    },
    paddingBottom: {
        type: String as () => IStyleString,
    },
    paddingRight: {
        type: String as () => IStyleString,
    },

    paddingLeft: {
        type: String as () => IStyleString,
    },
    textAlignment: {
        type: String as () => ITextAlignment,
    },
    border: {
        type: String as () => IStyleString,
        default: '1',
    },
    borderBottom: {
        type: String as () => IStyleString,
    },
    borderTop: {
        type: String as () => IStyleString,
    },
    borderLeft: {
        type: String as () => IStyleString,
    },
    borderRight: {
        type: String as () => IStyleString,
    },
};

export const paddingXClasses = {
    0: 'px-0',
    1: 'px-1',
    2: 'px-2',
    3: 'px-3',
    4: 'px-4',
    5: 'px-5',
    6: 'px-6',
    7: 'px-7',
    8: 'px-8',
    9: 'px-9',
    10: 'px-10',
};

export const paddingYClasses = {
    0: 'py-0',
    1: 'py-1',
    2: 'py-2',
    3: 'py-3',
    4: 'py-4',
    5: 'py-5',
    6: 'py-6',
    7: 'py-7',
    8: 'py-8',
    9: 'py-9',
    10: 'py-10',
};

export const displayClasses = {
    0: 'inline-block',
};

export const predefinedClasses = [
    ...Object.values(textAlignmentClasses),
    ...Object.values(borderClasses),
    ...Object.values(borderTopClasses),
    ...Object.values(borderLeftClasses),
    ...Object.values(borderRightClasses),
    ...Object.values(borderColorClasses),
    ...Object.values(borderBottomClasses),
    ...Object.values(sizeTextAreaClasses),
    ...Object.values(sizeImagesClasses),
    ...Object.values(sizeAvatarClasses),
    ...Object.values(textWeightClasses),
    ...Object.values(elementSizes),
    ...Object.values(colorClasses),
    ...Object.values(textColorClasses),
    ...Object.values(textSizeClasses),
    ...Object.values(titleClasses),
    ...Object.values(fontClasses),
    ...Object.values(marginClasses),
    ...Object.values(marginTopClasses),
    ...Object.values(marginLeftClasses),
    ...Object.values(marginRightClasses),
    ...Object.values(marginBottomClasses),
    ...Object.values(marginXClasses),
    ...Object.values(marginYClasses),
    ...Object.values(paddingClasses),
    ...Object.values(paddingTopClasses),
    ...Object.values(paddingLeftClasses),
    ...Object.values(paddingRightClasses),
    ...Object.values(paddingBottomClasses),
    ...Object.values(paddingXClasses),
    ...Object.values(paddingYClasses),
    ...Object.values(displayClasses),
];
