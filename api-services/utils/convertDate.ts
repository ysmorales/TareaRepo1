export function convertDate(dateString: any) {
	const dateObj = new Date(dateString);
	return dateObj.toLocaleDateString("es-ES", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
}