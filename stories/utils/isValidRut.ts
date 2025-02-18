// export const isValidRUT = (value: string) => {
//     if (!value) {
//         return true;
//     }
//
//     const regex = RegExp("^\\d{2}\\.\\d{3}\\.\\d{3}-\\d$");
//
//     return regex.test(value);
// };
export function isValidRut(rut: string): boolean {
	rut = rut.replace(/[\.\-]/g, ''); // Remover puntos y guiones si los hay
	const rutBody = rut.slice(0, -1); // Cuerpo del run
	const dv = rut.slice(-1).toUpperCase(); // Dígito verificador

	// Calcular la suma de los productos de los dígitos del cuerpo por pesos de 2 a 7 de derecha a izquierda
	let sum = 0;
	let weight = 2;
	for (let i = rutBody.length - 1; i >= 0; i--) {
		sum += Number(rutBody.charAt(i)) * weight;
		weight = weight === 7 ? 2 : weight + 1;
	}

	// El dígito verificador se calcula como: 11 - (suma mod 11)
	let computedDv = '0' + ((11 - sum % 11) % 11).toString();
	computedDv = computedDv.slice(-1);

	// 'K' es una alternativa a '0' cuando se calcula el dígito verificador
	if (computedDv === '0') {
		computedDv = 'K';
	}

	// Chequear si el dígito verificador calculado coincide con el proporcionado
	return computedDv === dv;
}

export function formatRut(rut: string): string {
	rut = rut.replace(/[\.\-]/g, ''); // Limpiamos el string de puntos y guiones

	let rutBody = rut.slice(0, -1); // El cuerpo del RUN
	const dv = rut.slice(-1); // El dígito verificador

	// Agregamos puntos cada tres dígitos de derecha a izquierda
	rutBody = rutBody.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

	// Unimos el cuerpo y el dígito verificador con un guión
	return `${rutBody}-${dv}`;
}

export const rutValidate = {
	$message: 'No es un RUN valido',
	$validator: isValidRut,
};

// 12.345.678-9
