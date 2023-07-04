import {z} from "zod"
import { categoriesSchema } from "./categories.schema"
import { addressesSchema } from "./addresses.schema"

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(() => false),
    value: z.number().default(() => 0),
    size: z.number().positive(),
    createAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    address: addressesSchema,
    categories: categoriesSchema
})

const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    createAt:true,
    updatedAt: true
})
const realEstateReadSchema = realEstateSchema.array()


export {realEstateCreateSchema,realEstateSchema,realEstateReadSchema}