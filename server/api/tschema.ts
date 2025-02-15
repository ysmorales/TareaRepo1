
import { getSchemaTypeScript } from '../utils/getTsSchema'

export default defineEventHandler((event) => {
    return {
        schema: getSchemaTypeScript()
    }
})