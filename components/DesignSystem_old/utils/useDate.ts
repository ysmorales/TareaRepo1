/**
 * useDate
 * @returns
 */
export function useDate() {
	const months: IDateMonth[] = [
		{ name: 'Enero', shortName: 'Ene', monthNumber: 1 },
		{ name: 'Febrero', shortName: 'Feb', monthNumber: 2 },
		{ name: 'Marzo', shortName: 'Mar', monthNumber: 3 },
		{ name: 'Abril', shortName: 'Abr', monthNumber: 4 },
		{ name: 'Mayo', shortName: 'May', monthNumber: 5 },
		{ name: 'Junio', shortName: 'Jun', monthNumber: 6 },
		{ name: 'Julio', shortName: 'Jul', monthNumber: 7 },
		{ name: 'Agosto', shortName: 'Ago', monthNumber: 8 },
		{ name: 'Septiembre', shortName: 'Sept', monthNumber: 9 },
		{ name: 'Octubre', shortName: 'Oct', monthNumber: 10 },
		{ name: 'Noviembre', shortName: 'Nov', monthNumber: 11 },
		{ name: 'Diciembre', shortName: 'Dic', monthNumber: 12 },
	];

	const weekDays: IDateWeekDay[] = [
		{
			name: 'Lunes',
			shortName: 'L',
		}, {
			name: 'Martes',
			shortName: 'M',
		}, {
			name: 'Miércoles',
			shortName: 'M',
		}, {
			name: 'Jueves',
			shortName: 'J',
		}, {
			name: 'Viernes',
			shortName: 'V',
		}, {
			name: 'Sábado',
			shortName: 'S',
		}, {
			name: 'Domingo',
			shortName: 'D',
		},
	];

	/**
	 * daysInMonth
	 * @param year
	 * @param month
	 * @returns
	 */
	function getDaysInMonth(date: Date): number {
		const year = date.getFullYear();
		const month = date.getMonth();

		return new Date(year, month, 0).getDate();
	}

	/**
	 * getWeekDay
	 * @param date
	 * @returns
	 */
	function getWeekDay(date: Date): IDateWeekDay {
		const day = date.getDay();
		return weekDays[day];
	}

	function getStartMonthDate(date: Date): Date {
		return new Date(`${date.getFullYear()}-${date.getMonth() + 1}-1`);
	}

	/**
	 * isValid
	 * @param date
	 * @returns
	 */
	function isValid(date: Date): boolean {
		return date instanceof Date && !isNaN(date.getTime());
	}

	/**
	 * toString
	 * @param date
	 * @returns
	 */
	function toString(date: Date): string {
		return date.toDateString();
	}

	return {
		months,
		weekDays,
		// Methods
		getDaysInMonth,
		getStartMonthDate,
		getWeekDay,
		isValid,
		toString,
	};
}

export interface IDateMonth {
	name: string;
	shortName: string;
	monthNumber: number;
}
export interface IDateWeekDay {
	name: string;
	shortName: string;
}
