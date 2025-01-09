export function toLocaleDate(dateString: string) {
  const dateObj = new Date(dateString);

  if (!isFinite(+dateObj)) {
    return dateString;
  }
  return dateObj.toLocaleDateString("es-ES", {
    timeZone: "UTC",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export const getDateFormat = (
  date: Date,
  options = [{ year: "numeric" }, { month: "numeric" }, { day: "numeric" }],
  separator = "-",
) => {
  try {
    function format(option) {
      const formatter = new Intl.DateTimeFormat("en", {
        ...option,
        timeZone: "UTC",
      });
      return formatter.format(date);
    }

    return options.map(format).join(separator);
  } catch (error) {
    console.log(error, { date });
  }
  return date;
};

export const formatStandarDate = (theDate: string) =>
  getDateFormat(
    new Date(theDate),
    [{ day: "numeric" }, { month: "numeric" }, { year: "numeric" }],
    "/",
  );

export function dateUtils() {
  return {
    toLocaleDate,
  };
}

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const getMonthName = (idx) => {
  return monthNames[idx];
};

const getCurrentValidMonth = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  if (day > 16) {
    return month + 1;
  }
  return month;
};

const getDateDayMonth = (day, month) => {
  const currentDate = new Date();
  currentDate.setDate(day);
  currentDate.setMonth(month);
  currentDate.setMinutes(0);
  currentDate.setHours(0);
  currentDate.setSeconds(0);
  currentDate.setMilliseconds(2);
  return currentDate.toISOString();
};

const isDisabledDay = (date) => {
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
  const month = getCurrentValidMonth();
  const monthName = getMonthName(month);
  const nextMonthName = getMonthName(month + 1);

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
  ];

  return nextDaysToSelect.filter(({ disabled }) => !disabled).splice(0, 2);
};

export const getNumDaysExpire = (profileData) => {
  return useFrontDaysExpire ? numDaysIgnore : profileData?.numDaysIgnore;
};

export const getDateOnPlusDays = (numDays = 3) => {
  const startToday = new Date(new Date().setHours(0, 0, 0, 0));
  startToday.setDate(startToday.getDate() + numDays);
  return startToday;
};

export const expireInDays = (numDays: number, date: string | undefined) => {
  if (!date) {
    return false;
  }
  const theDate = new Date(date);
  const startToday = new Date(new Date().setHours(0, 0, 0, 0));
  startToday.setDate(startToday.getDate() + parseInt(numDays, 10));
  return startToday.getTime() > theDate.getTime();
};
export const getNumDays = (_date1: string | Date, _date2: string | Date) => {
  const date1 = new Date(_date1);
  const date2 = new Date(_date2);

  // Convert dates to UTC timestamps
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  // Calculate the time difference in milliseconds
  const timeDiff = Math.abs(utc2 - utc1);

  // Convert milliseconds to days
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};

export const getCurrentDate = () => {
  return toLocaleDate(new Date());
};
