
export const getSchemaInfoRecord = (schema, refType) => schema?.definitions[refType];
export const getTypeRecord = (schema, refType) => getSchemaInfoRecord(schema, refType)?.type;
export const getItemsRecord = (schema, refType) => getSchemaInfoRecord(schema, refType)?.items?.$ref;
export const getSchemaDefinition = (cc) => cc?.split("#/definitions/")[1] ?? "";