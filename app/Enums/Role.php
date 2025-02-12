<?php

namespace App\Enums;

class Role
{
    const VISUAL = 'visual';
    const EDITAR = 'editar';
    const SUPER_ADMIN = 'super_admin';

    public static function getValues(): array
    {
        return [
            self::VISUAL,
            self::EDITAR,
            self::SUPER_ADMIN,
        ];
    }
}
