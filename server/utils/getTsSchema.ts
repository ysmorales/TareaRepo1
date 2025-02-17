import tsj from "ts-json-schema-generator";
// @type {import('ts-json-schema-generator/dist/src/Config').Config}
const config = {
    path: "global-interface/common.ts",
    tsconfig: "tsconfig.json",
    type: "*", // Or <type-name> if you want to generate schema for that one type only
};

const currentSchema = {
    "schema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "definitions": {
            "ItemOption": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": [
                            "string",
                            "number"
                        ]
                    },
                    "value": {
                        "type": [
                            "string",
                            "number"
                        ]
                    }
                },
                "required": [
                    "id",
                    "value"
                ],
                "additionalProperties": false
            },
            "ListOptions": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ItemOption"
                }
            },
            "SubItem": {
                "type": "object",
                "properties": {
                    "label": {
                        "type": "string"
                    },
                    "value": {
                        "anyOf": [
                            {
                                "type": "string"
                            },
                            {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            }
                        ]
                    },
                    "isTag": {
                        "type": "boolean"
                    },
                    "rowRender": {},
                    "class": {
                        "type": "string"
                    }
                },
                "required": [
                    "label",
                    "value"
                ],
                "additionalProperties": false
            },
            "IItem": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string"
                    },
                    "subItems": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/SubItem"
                        }
                    }
                },
                "required": [
                    "title",
                    "subItems"
                ],
                "additionalProperties": false
            },
            "ListItems": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/IItem"
                }
            }
        }
    }
}

export const getSchemaTypeScript = () => {
    let schema = {}
    try {
        schema = tsj.createGenerator(config).createSchema(config.type);
    } catch (error) {
        schema = currentSchema.schema
    }
    return schema
}