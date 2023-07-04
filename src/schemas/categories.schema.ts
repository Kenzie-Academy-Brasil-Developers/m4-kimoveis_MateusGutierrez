import {z} from "zod"

const categoriesSchema = z.object({
    id: z.number().positive(),
    name:z.string().max(45)
})
const categoryReadSchema = categoriesSchema.array()
const categoriesCreateSchema = categoriesSchema.omit({id: true})

export {categoriesCreateSchema,categoriesSchema,categoryReadSchema}