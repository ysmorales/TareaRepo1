<?php

namespace App\Helpers;

use App\Services\Crypto;

class UtilHelper
{
    /**
     * Valida el token JWT.
     *
     * @param string $token El token JWT.
     * @return object Un objeto con el estado de verificación y el payload decodificado.
     */
    public static function validaTokenCU(string $token): object
    {
        $separator = '.';
        $porciones = explode($separator, $token);
        if (count($porciones) !== 3) {
            return (object) [
                'verified' => 0,
                'payload'  => null,
            ];
        }

        list($header, $payload, $signature) = $porciones;

        $decoded_signature = base64_decode(strtr($signature, '-_', '+/'));
        $payload_to_verify = mb_convert_encoding($header . $separator . $payload, 'UTF-8', 'auto');
        $public_key = env('PASSPORT_PUBLIC_KEY');
        $datos = json_decode(base64_decode($payload));

        if (json_last_error() !== JSON_ERROR_NONE) {
            return (object) [
                'verified' => 0,
                'payload'  => null,
            ];
        }

        $now = new \DateTime();

        $verified = 0;
        if ($datos->iss === 'https://auth.chileatiende.gob.cl' && $datos->exp >= $now->getTimestamp()) {
            $verified = openssl_verify($payload_to_verify, $decoded_signature, $public_key, OPENSSL_ALGO_SHA256);
        }

        return (object) [
            'verified' => $verified,
            'payload'  => $datos,
        ];
    }

    /**
     * Valida un token CHA.
     *
     * @param string $token El token a validar.
     * @return object Un objeto con la propiedad 'verified' indicando si el token es válido.
     */
    public static function validaTokenCHA($token): object
    {
        try {
            // Desencripta el token
            $crypto = new Crypto();
            $token_decrypt = json_decode($crypto->cryptoJsAesDecrypt($token), true);

            // Obtiene la fecha actual, fecha de expiración del token y las formatea
            $expiration_at = $token_decrypt['expiration_at'];
            $expiration_at = (new \DateTime($expiration_at))->format('Y-m-d H:i:s');
            $now = (new \DateTime('now'))->format('Y-m-d H:i:s');

            // Se verifica si el token ha expirado
            $response = [
                'verified' => ($expiration_at > $now) ? true : false,
            ];
        } catch (\Exception $e) {
            $response = [
                'verified' => false
            ];
        }

        return (object) $response;
    }

    /**
     * Obtiene la dirección IP del cliente.
     *
     * @return string La dirección IP del cliente o 'UNKNOWN' si no se puede determinar.
     */
    public static function getIp(): string
    {
        $headers = [
            'HTTP_CLIENT_IP',
            'HTTP_X_FORWARDED_FOR',
            'HTTP_X_FORWARDED',
            'HTTP_FORWARDED_FOR',
            'HTTP_FORWARDED',
            'REMOTE_ADDR'
        ];

        foreach ($headers as $header) {
            if (isset($_SERVER[$header])) {
                $ipList = explode(',', $_SERVER[$header]);
                foreach ($ipList as $ip) {
                    $trimmedIp = trim($ip);
                    if (filter_var($trimmedIp, FILTER_VALIDATE_IP)) {
                        return $trimmedIp;
                    }
                }
            }
        }

        return 'UNKNOWN';
    }

     /**
     * Obtiene información sobre el agente de usuario que realiza la petición
     *
     * @return string Cadena con el identificador del agente usuario o 'UNKNOWN' si no se puede determinar.
     */
    public static function getUA(): string
    {
        $headers = [
            'User-Agent',
            'X-User-Agent',
            'X-Requested-With',
            'X-Device-User-Agent',
            'X-Client-Data',
            'HTTP_USER_AGENT'
        ];

        foreach ($headers as $header) {
            if (isset($_SERVER[$header])) {
                $uaList = explode(',', $_SERVER[$header]);
                foreach ($uaList as $ua) {
                    $trimmedUa = trim($ua);
                    if (filter_var($trimmedUa, FILTER_CALLBACK, [
                        'options' => function ($value) {
                            return !empty($value) && preg_match('/(Mozilla|Chrome|Safari|Opera|Edge|Thunder|PostmanRuntime)/i', $value);
                        }
                    ]))
                        return $trimmedUa;
                }
            }
        }

        return 'UNKNOWN';
    }

    /**
     * Calcula el dígito verificador (DV) de un número usando el algoritmo módulo 11.
     *
     * @param string $numero El número para el cual calcular el DV.
     * @return string El dígito verificador ('0', 'K' o un dígito numérico).
     */
    public static function calcularDigitoVerificador(string $numero): string
    {
        $numero = strtoupper($numero);
        $len = strlen($numero);
        if ($len < 1) {
            return 'INVALID'; // Retorna un valor indicativo de entrada inválida
        }
        
        $factor = 2;
        $suma = 0;
        for ($i = $len - 1; $i >= 0; $i--) {
            $suma += intval($numero[$i]) * $factor;
            $factor = $factor == 7 ? 2 : $factor + 1;
        }
    
        $verificadorCalculado = 11 - ($suma % 11);
    
        if ($verificadorCalculado == 11) {
            return "0";
        } elseif ($verificadorCalculado == 10) {
            return "K";
        } else {
            return (string)$verificadorCalculado;
        }
    }

    public static function getRunWithDV($run): string
    {
        $pos = strpos($run, '-');            
        $rut = $run;
        if ($pos === false) {            
            $rut = $rut.'-'. self::calcularDigitoVerificadorDV($rut);
        }
        return $rut;
    }

    public static function calcularDigitoVerificadorDV($rut) {
        $run = $rut;

        $pos = strpos($rut, '-');        
        if ($pos === false) {        
            // Elimina los puntos del RUT, si los hay
            $rut = str_replace('.', '', $rut);

            // Inicializa el acumulador en 1
            $acumulador = 1;
            // Inicializa el contador en 0
            $contador = 0;
            // Mientras el RUT no sea igual a 0, continúa el bucle
            while ($rut != 0) {
                // Calcula el dígito verificador utilizando el algoritmo específico
                $acumulador = ($acumulador + ($rut % 10) * (9 - $contador++ % 6)) % 11;
                // Reduce el RUT al siguiente dígito
                $rut = (int)($rut / 10);
            }
            // Si el acumulador es diferente de 0, calcula el dígito verificador
            // utilizando el valor del acumulador más 47 en la tabla ASCII
            // de lo contrario, establece el dígito verificador en 'K'
            $digitoVerificador = $acumulador ? chr($acumulador + 47) : 'K';

            // Retorna el dígito verificador
            return $run .'-'. $digitoVerificador;
        }
        
        return $rut;            
    }        

    public static function calcularRutCompleto($rut) {
        // Eliminar guiones y espacios
        $rut = str_replace(['-', ' '], '', $rut);
        
        // Validar que el RUT tenga solo números
        if (!preg_match('/^\d+$/', $rut)) {
            return "Formato de RUT inválido";
        }
    
        // Extraer el número y calcular el dígito verificador
        $numero = substr($rut, 0, -1);
        $suma = 0;
        $multiplicador = 2;
    
        // Calcular la suma para el dígito verificador
        for ($i = strlen($numero) - 1; $i >= 0; $i--) {
            $suma += (int)$numero[$i] * $multiplicador;
            $multiplicador = $multiplicador == 7 ? 2 : $multiplicador + 1;
        }
    
        $digitoVerificador = 11 - ($suma % 11);
        if ($digitoVerificador == 11) {
            $digitoVerificador = '0';
        } elseif ($digitoVerificador == 10) {
            $digitoVerificador = 'K';
        }
    
        // Retornar el RUT completo
        return $numero . '-' . $digitoVerificador;
    }
}
