import {z} from "zod"
import { addressesSchema,addressesCreateSchema,addressesUpdateSchema } from "../schemas";
import { Repository } from "typeorm";

type Address = z.infer<typeof addressesSchema>
type AddressCreate = z.infer< typeof addressesCreateSchema>
type AddressRepo = Repository<Address>
export {Address, AddressCreate, AddressRepo}