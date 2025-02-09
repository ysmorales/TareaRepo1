import type {DecryptedResponse} from '../global-interface/interfaces';

export function decryptResponse(response: any) {
    const {$cryptojsDecrypt} = useNuxtApp();
    if(!$cryptojsDecrypt){
        return response
    }

    const decrypt: IDecryptCallable<DecryptedResponse>
        = $cryptojsDecrypt as IDecryptCallable<DecryptedResponse>;

    return decrypt(response);
}

type IDecryptCallable<T> = (encrypted: string) => T;