import {z} from "zod"
import { addressesSchema,addressesCreateSchema,addressesUpdateSchema } from "../schemas";

type Address = z.infer<typeof addressesSchema>