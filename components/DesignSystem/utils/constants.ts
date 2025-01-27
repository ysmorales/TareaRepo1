export const VISITOR = "VISITOR";
export const ANONYMOUS = "ANONYMOUS";
export const OPERATOR = "OPERATOR";
export const ADMIN = "ADMIN";
export const COORDINATOR = "COORDINATOR";
export const OFFICIAL = "OFFICIAL";
export const PATH_CAMBIO_HORA = 'cambio-hora';
export const PATH_VACACIONES_PROGRESIVAS = 'vacaciones-progresivas';

export const defaultRole = ADMIN;

export const approvedKey = "approved"
export const refusedKey = "refused"
export const preApprovedKey = "preApproved"
export const paidErrorKey = "paidError"

export const approved = "APROBADA"
export const refused = "RECHAZADA"
export const ignore = "IGNORADA"
export const pending = "PENDIENTE"
export const confirms = "CONFIRMADA"
export const forExpire = "POR CADUCAR"
export const preApproved = "POR APROBAR"
export const paid = "PAGADO"
export const forPaid = "POR PAGAR"
export const paidError = "ERROR DE PAGO"

export const statusDic = {
    [approvedKey]: approved,
    [refusedKey]: refused,
};

export const flowStates = {
    [approved]: approvedKey,
    [refused]: refusedKey,
}

export const useRealStatesFromBackend = false
export const useFrontDaysExpire = false
export const numDaysIgnore = 2;
export const defaultItemsPerPage = 20


