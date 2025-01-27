function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRut() {
	const base = getRandomInt(1e7, 2e8);
	const baseStr = base.toString();
	return baseStr + computeVerificationDigit(base);
}

enum FatLevel {
	Low = 'Low',
	Medium = 'Medium',
	High = 'High',
}

function getRandomEnum<T>(anEnum: { [s: string]: T }): T {
	const enumValues = Object.values(anEnum);
	const randomIndex = Math.floor(Math.random() * enumValues.length);
	return enumValues[randomIndex];
}

function computeVerificationDigit(rut: number) {
	let M = 0,
		S = 1;
	for (; rut; rut = Math.floor(rut / 10))
		S = (S + (rut % 10) * (9 - (M++ % 6))) % 11;
	return S ? S - 1 : 'K';
}

export const dataTableExample = Array.from({ length: 50 }, (_, i) => ({
	dessert: `Dessert ${i + 1}`,
	run: getRandomRut(),
	fat: getRandomEnum(FatLevel),
	carbs: getRandomInt(20, 100),
	protein: getRandomInt(1, 10),
}));

export const miniDataTableExample = Array.from({ length: 10 }, (_, i) => ({
	dessert: `Dessert ${i + 1}`,
	run: getRandomRut(),
	fat: getRandomEnum(FatLevel),
	carbs: getRandomInt(20, 100),
	protein: getRandomInt(1, 10),
}));
