import {z} from "zod"
import { userSchema } from "./users.schema"
import { realEstateSchema } from "./realEstate.schema"

const schedulesSchema = z.object({
    id: z.number().positive(),
    date:z.string().or(z.date()),
    hour: z.string().or(z.date()),
    realEstate: realEstateSchema,
    user: userSchema
})

const schedulesCreateSchema = schedulesSchema.omit({id:true,realEstate:true,user:true})
const schedulesUpdateSchema = schedulesCreateSchema.partial()

export {schedulesCreateSchema,schedulesSchema,schedulesUpdateSchema}