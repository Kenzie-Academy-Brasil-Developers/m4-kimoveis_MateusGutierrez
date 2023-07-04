import { Request, Response, NextFunction } from "express";
import { scheduleRepository } from "../repositories";
import { AppError } from "../errors";

const validateBusinessHours = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {hour} = req.body

    const visitHour = parseInt(hour.split(":")[0])

    if(visitHour < 8 || visitHour >= 18){
        throw new AppError("It is only possible to schedule a visit during business hours (08:00 to 18:00).", 400)
    }
    return next()
}

export {validateBusinessHours}