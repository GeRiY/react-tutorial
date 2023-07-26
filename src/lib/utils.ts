export default class Utils {
	//Számok formázása, ezres tördelésbe
	static formatNumber(number: number): string {
		return !isNaN(number) ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : number.toString();
	}

	//sort() függvény-hez dátum stringek összehasonlítása
	static compareDates(a: string, b: string, order: 'asc' | 'desc' = 'asc') {
		if (order === 'asc') {
			return new Date(a.replace(' ', 'T')).getTime() - new Date(b.replace(' ', 'T')).getTime();
		} else {
			return new Date(b.replace(' ', 'T')).getTime() - new Date(a.replace(' ', 'T')).getTime();
		}
	}

	//Dátum visszaadása YYYY-MM-DD formában
	static getDateString(date: string | Date) {
		if (typeof date === 'string') {
			date = new Date(date.replace(' ', 'T'));
		}
		return date.toLocaleDateString('hu-HU').replace(/\. /g, '-').replace(/\./g, '');
	}

	//Dátum visszaadása 'YYYY. MM. DD. HH:ii formában
	static getFullDateTimeString(date: string | Date) {
		if (typeof date === 'string') {
			date = new Date(date.replace(' ', 'T'));
		}
		return date.toLocaleTimeString('hu', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		});
	}

	//Adott dátumra visszaadja az adott heti hétfő dátumát
	static getMondayDate(date: Date) {
		const day = date.getDay();
		const diff = date.getDate() - day + (day === 0 ? -6 : 1);
		return new Date(date.setDate(diff));
	}

	//Adott dátumra visszaadja a hét kezdetének és végének dátumát
	static getWeekInterval = (date: Date) => {
		const weekStart = Utils.getMondayDate(date);
		let weekEnd = new Date(weekStart);
		weekEnd.setDate(weekEnd.getDate() + 6);
		return {
			weekStart,
			weekEnd,
		};
	};

	// Meghatározza adott dátumra, hogy hanyadik hétre esik
	static getWeekNumber(date: Date = new Date()) {
		var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
		var dayNum = d.getUTCDay() || 7;
		d.setUTCDate(d.getUTCDate() + 4 - dayNum);
		var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
		return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
	}

	//Megadott perceket betöri, hogy X óra Y perc
	static formatMinutesToHoursAndMinutes(minutes: number) {
		const _minutes = minutes % 60;
		const hours = (minutes - _minutes) / 60;
		return `${hours} óra ${_minutes} perc`;
	}

	// Adott dátum hány hét eltéréssel van az adott héthez képest
	static weekOffset(date: Date): number {
		const currentWeekIndex = Utils.getWeekNumber(new Date());
		const targetWeekIndex = Utils.getWeekNumber(date);
		return targetWeekIndex - currentWeekIndex;
	}

	static capitalizeString(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	static capitalizeWords(string: string) {
		return string
			.split(' ')
			.map((s) => Utils.capitalizeString(s))
			.join(' ');
	}
}
