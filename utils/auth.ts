import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    exp: number;
    [key: string]: any;
}

export const decodeTokenCHA = (token: string): DecodedToken | null => {
    try {
        return jwtDecode<DecodedToken>(token);
    } catch (error) {
        console.error('Error decoding token', error);
        return null;
    }
};
