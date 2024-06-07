import {jwtDecode} from 'jwt-decode';

interface MyJwtPayload {
    user: string;
    jwt_cu: string;
    origin: string;
    jobTitle: string;
    officeLocation: string;
    photo: string;
    nombre_completo: string;
    nombres: string;
    apellidos: string;
    email: string;
}

// Función para calcular el dígito verificador de un RUN
function calculateDV(rut: string): string {
    // Validar que el RUT tenga el formato correcto
    if (!/^(\d{1,8})$/.test(rut)) {
        throw new Error('El formato del RUT es incorrecto');
    }

    // Convertir el RUT a un array de dígitos
    const rutDigits = rut.split('').reverse().map(digit => parseInt(digit));

    // Definir los factores de multiplicación
    const factors = [2, 3, 4, 5, 6, 7];

    // Calcular el dígito verificador
    let sum = 0;
    let factorIndex = 0;
    for (let i = 0; i < rutDigits.length; i++) {
        sum += rutDigits[i] * factors[factorIndex];
        factorIndex = (factorIndex + 1) % factors.length;
    }

    const dv = 11 - (sum % 11);

    // Retornar el dígito verificador, si es 11, retornar '0', si es 10, retornar 'K'
    return dv === 11 ? '0' : dv === 10 ? 'K' : dv.toString();
}

// Función para decodificar un token JWT
export function decodeToken(token: string): any {
    try {
        let decoded = jwtDecode<MyJwtPayload>(token);
        if (decoded) {
            let jobTitle = null;
            let officeLocation = null;
            let photo = null;
            let run = `${decoded.user}`;
            let dv = calculateDV(run);

            let decoded_aux = jwtDecode<MyJwtPayload>(decoded.jwt_cu);
            if (decoded_aux) {
                if (decoded.origin == 'AzureAD') {
                    jobTitle = decoded_aux.jobTitle;
                    officeLocation = decoded_aux.officeLocation;
                    photo = decoded_aux.photo;
                }
            }

            let data = {
                name: decoded.nombre_completo,
                first_name: decoded.nombres,
                last_name: decoded.apellidos,
                email: decoded.email,
                run: run,
                dv: dv,
                job_title: jobTitle,
                office_location: officeLocation,
                photo: photo
            };

            return data;

        } else {
            return null;
        }
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}
