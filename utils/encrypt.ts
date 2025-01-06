import CryptoJS from 'crypto-js'

const getEncryptMethodLength = (encryptMethod: string): number => {
    const matchResult = encryptMethod.match(/\d+/);
    const aesNumber = matchResult ? parseInt(matchResult[0]) : 0;
    return aesNumber / 4;
};

export const cryptojsEncrypt = (plainText: string, runtimeConfig: any): string => {
    const iv = CryptoJS.lib.WordArray.random(16);
    const salt = CryptoJS.lib.WordArray.random(8);
    const iterations = 999;
    const passphrase = runtimeConfig.public.PASSPHRASE_ENCRYPT || ''; // Asegúrate de proporcionar un valor predeterminado si PASSPHRASE_ENCRYPT no está definido
    const encryptMethod = 'AES-256-CBC';
    const encryptMethodLength = getEncryptMethodLength(encryptMethod);
    const key = CryptoJS.PBKDF2(passphrase, salt, {
        hasher: CryptoJS.algo.SHA512,
        keySize: encryptMethodLength / 8,
        iterations
    });
    const encrypted = CryptoJS.AES.encrypt(plainText, key, {iv});

    const data = {
        ciphertext: CryptoJS.enc.Base64.stringify(encrypted.ciphertext),
        salt: CryptoJS.enc.Hex.stringify(salt),
        iv: CryptoJS.enc.Hex.stringify(iv),
        iterations,
    };
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(data)));
}

export function cryptojsDecrypt<T = unknown>(encryptedString: string, runtimeConfig: any): T {
    const json = JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encryptedString)));
    const salt = CryptoJS.enc.Hex.parse(json.salt);
    const iv = CryptoJS.enc.Hex.parse(json.iv);
    const encrypted = json.ciphertext;
    let iterations = parseInt(json.iterations);
    if (iterations <= 0) {
        iterations = 999;
    }
    const passphrase = runtimeConfig.public.PASSPHRASE_ENCRYPT || ''; // Asegúrate de proporcionar un valor predeterminado si PASSPHRASE_ENCRYPT no está definido
    const encryptMethod = 'AES-256-CBC';
    const encryptMethodLength = getEncryptMethodLength(encryptMethod);
    const hashKey = CryptoJS.PBKDF2(passphrase, salt, {
        hasher: CryptoJS.algo.SHA512,
        keySize: encryptMethodLength / 8,
        iterations
    });
    const decrypted = CryptoJS.AES.decrypt(encrypted, hashKey, {mode: CryptoJS.mode.CBC, iv});
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

export const generateTokenCha = (runtimeConfig: any) => {
    const dateNow = new Date();
    dateNow.setMinutes(dateNow.getMinutes() + 15);
    const token = {
        expiration_at: dateNow.toISOString()
    };
    return cryptojsEncrypt(JSON.stringify(token), runtimeConfig);
}

export class Encrypt {
    runtimeConfig = {};

    constructor(runtimeConfigProp: Object) {
        this.runtimeConfig = runtimeConfigProp
    }

    cryptojsEncrypt(plainText: string) {
        return cryptojsEncrypt(plainText, this.runtimeConfig)
    }

    cryptojsDecrypt(plainText: string) {
        return cryptojsDecrypt(plainText, this.runtimeConfig)
    }

    generateTokenCha() {
        return generateTokenCha(this.runtimeConfig)
    }
}