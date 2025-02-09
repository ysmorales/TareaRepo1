<?php

namespace App\Helpers;

use App\Helpers\UtilHelper;
use App\Models\ChaTokenLogConsumo;
use App\Models\CuTokenLogConsumo;
use App\Services\JwtToken;
use App\Services\JwtTokenizer;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\App;

class LogHelper
{
    protected static $jwtHelperTokenizer;
    protected static $jwtHelper;

    /**
     * Inicializa las instancias de JwtTokenizer y JwtToken si son nulas.
     */
    protected static function initialize()
    {
        if (is_null(self::$jwtHelperTokenizer) || is_null(self::$jwtHelper)) {
            self::$jwtHelperTokenizer = App::make(JwtTokenizer::class);
            self::$jwtHelper = App::make(JwtToken::class);
        }
    }

    /**
     * Guarda un log de consumo del token para el tokenizer.
     *
     * @param string $run El RUN del usuario.
     * @param string $dv El dígito verificador del RUN.
     * @param \Illuminate\Http\Request $request La solicitud HTTP.
     * @param string $endpoint El endpoint donde se realizó la solicitud.
     * @param array|null $response La respuesta del servicio.
     */
    public static function guardaLogTokenizer($run, $dv, $request, $endpoint = '', $response = null)
    {
        self::initialize();

        try {
            $toke_id = self::$jwtHelperTokenizer->getTokenId($request);
            if ($toke_id) {
                $log                   = new ChaTokenLogConsumo();
                $log->id_cha_token     = $toke_id;
                $log->run              = $run;
                $log->dv               = $dv;
                $log->codigo_retorno   = $response['codigoRetorno'];
                $log->glosa_retorno    = $response['glosaRetorno'];
                $log->ip               = $request->header('X-Client-Ip');
                $log->user_agent       = $request->header('X-User-Agent');
                $log->endpoint         = $endpoint;
                $log->request          = json_encode($request->all());
                $log->response         = json_encode($response);
                $log->save();
            } else {
                Log::error("No se encuentra token asociado. {$run} - " . $response['codigoRetorno'] . " - " . $response['glosaRetorno']);
            }
        } catch (\Exception $e) {
            Log::error("Error al guardar el log de tokenizer: " . $e->getMessage());
        }
    }

    /**
     * Guarda un log de consumo del token CU.
     *
     * @param \Illuminate\Http\Request $request La solicitud HTTP.
     * @param string $endpoint El endpoint donde se realizó la solicitud.
     * @param array $response La respuesta del servicio.
     */
    public static function guardaLogCU($request, $endpoint, $response)
    {
        self::initialize();
        try {
            $log                = new CuTokenLogConsumo();
            $log->id_token      = self::$jwtHelper->getTokenId($request);
            $log->run           = self::$jwtHelper->getTokenRut($request);
            $log->dv            = UtilHelper::calcularDigitoVerificador("{$log->run}");
            $log->ip            = $request->header('X-Client-Ip');
            $log->user_agent    = $request->header('X-User-Agent');
            $log->endpoint      = $endpoint;
            $log->request       = json_encode($request->all());
            $log->response      = json_encode($response);
            $log->save();
        } catch (\Exception $e) {
            Log::error("Error al guardar el log de tokenizer: " . $e->getMessage());
        }
    }
}
