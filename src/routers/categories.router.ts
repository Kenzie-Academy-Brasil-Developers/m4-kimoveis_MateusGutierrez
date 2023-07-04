import { Router } from "express";
import { validateAdmin, validateBody, validateName, validateToken } from "../middlewares";
import { categoriesCreateSchema } from "../schemas";
import { createCategoryController, readCategoryController } from "../controllers";

const categoriesRouter: Router = Router()

categoriesRouter.post("",validateToken,validateAdmin,validateBody(categoriesCreateSchema),validateName,createCategoryController)
categoriesRouter.get("", readCategoryController)
categoriesRouter.get("/:id/realEstate")
export {categoriesRouter}
