import type {DecryptedResponse} from '../global-interface/interfaces';

export function decryptResponse(response: string): DecryptedResponse {
    const {$cryptojsDecrypt} = useNuxtApp();

    const decrypt: IDecryptCallable<DecryptedResponse>
        = $cryptojsDecrypt as IDecryptCallable<DecryptedResponse>;

    return decrypt(response);
}

type IDecryptCallable<T> = (encrypted: string) => T;