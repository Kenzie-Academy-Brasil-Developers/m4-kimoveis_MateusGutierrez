import { Router } from "express";
import { validateAdmin, validateBody, validateToken, validateUserSchedule } from "../middlewares";
import { realEstateSchema, schedulesSchema } from "../schemas";
import {  createScheduleController, readScheduleController } from "../controllers";

const scheduleRouter: Router = Router()

scheduleRouter.post("",validateToken,validateBody(schedulesSchema),validateUserSchedule,createScheduleController)
scheduleRouter.get("/realEstate/:id", readScheduleController)

export {scheduleRouter}
