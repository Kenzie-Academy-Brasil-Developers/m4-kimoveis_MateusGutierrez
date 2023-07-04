import { Router } from "express";
import { validateAdmin, validateBody } from "../middlewares";
import { realEstateSchema } from "../schemas";
import { createRealEstateController, readRealEstateController } from "../controllers";

const realEstateRouter: Router = Router()

realEstateRouter.post("", validateBody(realEstateSchema),validateAdmin,createRealEstateController)
realEstateRouter.get("",readRealEstateController)

export {realEstateRouter}
