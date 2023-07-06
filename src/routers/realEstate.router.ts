import { Router } from "express";
import { validateAddress, validateAdmin, validateBody, validateCategoryId, validateToken } from "../middlewares";
import { realEstateCreateSchema, realEstateSchema } from "../schemas";
import { createRealEstateController, readRealEstateController } from "../controllers";

const realEstateRouter: Router = Router()

realEstateRouter.post("", validateToken,validateAdmin,validateBody(realEstateCreateSchema),validateCategoryId,validateAddress,createRealEstateController)
realEstateRouter.get("",readRealEstateController)

export {realEstateRouter}
