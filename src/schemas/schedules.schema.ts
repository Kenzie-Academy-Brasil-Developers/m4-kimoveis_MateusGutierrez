import {z} from "zod"
import { userSchema } from "./users.schema"
import { realEstateSchema } from "./realEstate.schema"

const schedulesSchema = z.object({
    id: z.number().positive(),
    date:z.string(),
    hour: z.string(),
    realEstate: realEstateSchema,
    user: userSchema
})

const schedulesCreateSchema = z.object({
    date:z.string(),
    hour: z.string(),
    realEstateId: z.number(),
})
const schedulesUpdateSchema = schedulesCreateSchema.partial()

export {schedulesCreateSchema,schedulesSchema,schedulesUpdateSchema}