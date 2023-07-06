import {z} from "zod"
import { categoriesCreateSchema, categoriesSchema } from "./categories.schema"
import { addressesCreateSchema, addressesSchema } from "./addresses.schema"

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(() => false),
    value: z.number().default(() => 0).or(z.string()),
    size: z.number().positive(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: addressesSchema,
    category: categoriesSchema
})

const realEstateCreateSchema = z.object({
    sold: z.boolean().default(() => false),
    value: z.number().default(() => 0).or(z.string()),
    size: z.number().positive(),
    address: addressesCreateSchema,
    categoryId: z.number()
})

const realEstateReadSchema = realEstateSchema.array()


export {realEstateCreateSchema,realEstateSchema,realEstateReadSchema}