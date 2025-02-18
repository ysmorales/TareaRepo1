export function toLocaleDate(dateString: string | Date) {
    const dateObj = new Date(dateString);

    if (!isFinite(+dateObj)) {
        return dateString
    }
    return dateObj.toLocaleDateString("es-ES", {
        timeZone: 'UTC',
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}


export const getDateFormat = (date: Date, options = [{ year: 'numeric' }, { month: 'numeric' }, { day: 'numeric' }], separator = '-') => {
    try {
        function format(option: object) {
            const formatter = new Intl.DateTimeFormat('en', { ...option, timeZone: 'UTC' });
            return formatter.format(date);
        }
        return options.map((d) => {
            const tt = format(d)
            if (tt.length === 1) {
                return `0${tt}`.slice(-2)
            }
            return format(d)
        }).join(separator);
    } catch (error) {
        console.log(error, { date })
    }
    return date
}

export const formatStandarDate = (theDate: string | Date) => getDateFormat(new Date(theDate), [{ day: 'numeric' }, { month: 'numeric' }, { year: 'numeric' }], ' / ')

export function dateUtils() {
    return {
        toLocaleDate
    }
}

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const getMonthName = (idx: number) => {
    return monthNames[idx] ?? idx;
}

const getCurrentValidMonth = () => {
    const currentDate = new Date();
    let month = currentDate.getMonth();
    return month;
};

const getDateDayMonth = (day: number, month: number) => {
    const currentDate = new Date();
    currentDate.setDate(day);
    currentDate.setMonth(month);
    currentDate.setMinutes(0);
    currentDate.setHours(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(2);
    return currentDate.toISOString();
};

const isDisabledDay = (date: string | Date | number) => {
    const numDays = 5;
    const currentDate = new Date(date);
    const startToday = new Date(new Date().setHours(0, 0, 0, 0));
    startToday.setDate(startToday.getDate() + numDays);
    if (startToday.getTime() > currentDate.getTime()) {
        return true;
    }
    return false;
};

export const getRangeLimitDateList = () => {
    const month = getCurrentValidMonth()
    const monthName = getMonthName(month)
    const nextMonthName = getMonthName(month + 1 > 11 ? 0 : month + 1)

    const nextDaysToSelect = [
        {
            id: getDateDayMonth(1, month),
            value: `1 ${monthName}`,
            disabled: isDisabledDay(getDateDayMonth(1, month)),
        },
        {
            id: getDateDayMonth(16, month),
            value: `16 ${monthName}`,
            disabled: isDisabledDay(getDateDayMonth(16, month)),
        },
        {
            id: getDateDayMonth(1, month + 1),
            value: `1 ${nextMonthName}`,
            disabled: isDisabledDay(getDateDayMonth(1, month + 1)),
        },
        {
            id: getDateDayMonth(16, month + 1),
            value: `16 ${nextMonthName}`,
            disabled: isDisabledDay(getDateDayMonth(16, month + 1)),
        },
    ]

    return nextDaysToSelect.filter(({ disabled }) => !disabled).splice(0, 2)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNumDaysExpire = (profileData: any) => {
    return useFrontDaysExpire ? numDaysIgnore : profileData?.numDaysIgnore
}


export const getDateOnPlusDays = (numDays = 3, date = null) => {
    const startToday = new Date((date ? new Date(date) : new Date()).setHours(0, 0, 0, 0));
    startToday.setDate(startToday.getDate() + numDays);
    return startToday
}

export const expireInDays = (numDays: number, date: string | undefined) => {
    if (!date) {
        return false
    }
    const theDate = new Date(date);
    const startToday = new Date(new Date().setHours(0, 1, 1, 10));
    startToday.setDate(startToday.getDate() + parseInt(String(numDays), 10));
    return startToday.getTime() > theDate.getTime();
}
export const getNumDays = (_date1: string | Date, _date2: string | Date) => {
    const date1 = new Date(_date1);
    const date2 = new Date(_date2);

    // Convert dates to UTC timestamps
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    // Calculate the time difference in milliseconds
    const timeDiff = Math.abs(utc2 - utc1);

    // Convert milliseconds to days
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
}

export const getCurrentDate = () => {
    return toLocaleDate(new Date())
}
