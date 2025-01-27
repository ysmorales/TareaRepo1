import { calculateDV } from "./helpers";

export function isValidRut(rut: string): boolean {
  rut = rut.replace(/[\.\-]/g, ""); // Remover puntos y guiones si los hay
  const rutBody = rut.slice(0, -1); // Cuerpo del run
  const dv = rut.slice(-1).toUpperCase(); // Dígito verificador

  let valid = false;

  try {
    // Chequear si el dígito verificador calculado coincide con el proporcionado
    valid = calculateDV(rutBody) === dv;
  } catch (error) {
    valid = false;
  }

  return valid;
}

export function formatRut(rut: string): string {
  if (rut !== "") {
    rut = rut.replace(/[\.\-]/g, ""); // Limpiamos el string de puntos y guiones

    const rutBody = rut.slice(0, -1); // El cuerpo del RUN
    const dv = rut.slice(-1); // El dígito verificador

    // Unimos el cuerpo y el dígito verificador con un guión
    return `${rutBody}-${dv}`;
  } else return rut;
}

export const rucValidate = {
  $message:
    "Revisa que el RUN esté bien escrito. Debes ingresarlo en el siguiente formato:11111111-1",
  $validator: isValidRut,
};

// 12.345.678-9
