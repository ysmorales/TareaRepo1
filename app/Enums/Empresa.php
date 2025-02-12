<?php

namespace App\Enums;

class Empresa
{
    const CHILE_ATIENDE = 'Chile Atiende';
    const UNIDOS = 'Unidos';

    public static function getValues(): array
    {
        return [
            self::CHILE_ATIENDE,
            self::UNIDOS,
        ];
    }
}
