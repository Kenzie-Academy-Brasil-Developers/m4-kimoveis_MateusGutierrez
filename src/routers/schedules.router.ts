import { Router } from "express";
import { validateAdmin, validateBody, validateBusinessHours, validateRealEstateId, validateRealEstateIdSchedule, validateToken, validateUserSchedule, validateWeekday } from "../middlewares";
import { schedulesCreateSchema} from "../schemas";
import {  createScheduleController, readScheduleController } from "../controllers";

const scheduleRouter: Router = Router()

scheduleRouter.post("",
    validateToken,
    validateBody(schedulesCreateSchema),
    validateRealEstateId,
    validateUserSchedule,
    validateWeekday,
    validateBusinessHours,
    createScheduleController
)
scheduleRouter.get("/realEstate/:id",
    validateToken,
    validateAdmin,
    validateRealEstateIdSchedule,
    readScheduleController
)

export {scheduleRouter}
