const getDayArray = () => Array.from({ length: 31 }, (_, index) => index + 1);
const getYearArray = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

export const days = getDayArray();
export const years = getYearArray(1900, 2024);

export function padValue(value: number): string {
  return value.toString().padStart(2, "0"); // Esta función añade un '0' a la izquierda si la cadena representa un número de un solo dígito
}
