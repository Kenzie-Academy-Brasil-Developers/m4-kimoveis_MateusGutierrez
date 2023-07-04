import { userSchema,userCreateSchema,userUpdateSchema,userReadSchema,userReturnSchema } from "./users.schema";
import { addressesCreateSchema,addressesSchema,addressesUpdateSchema } from "./addresses.schema";
import { categoriesCreateSchema,categoriesSchema,categoryReadSchema } from "./categories.schema";
import { schedulesCreateSchema,schedulesSchema,schedulesUpdateSchema } from "./schedules.schema";
import { realEstateCreateSchema,realEstateSchema,realEstateReadSchema } from "./realEstate.schema";
import { login } from "./login.schema";

export {
    userCreateSchema,userSchema,userUpdateSchema,
    userReadSchema,userReturnSchema,categoriesCreateSchema,
    categoriesSchema,categoryReadSchema,addressesCreateSchema,
    addressesSchema,addressesUpdateSchema,schedulesCreateSchema,
    schedulesSchema,schedulesUpdateSchema,realEstateCreateSchema,
    realEstateSchema,realEstateReadSchema,login
}