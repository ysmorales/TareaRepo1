import tsj from "ts-json-schema-generator";
// @type {import('ts-json-schema-generator/dist/src/Config').Config}
const config = {
    path: "global-interface/common.ts",
    tsconfig: "tsconfig.json",
    type: "*", // Or <type-name> if you want to generate schema for that one type only
};

export const getSchemaTypeScript = () => {
    return tsj.createGenerator(config).createSchema(config.type);
}