import { Request, Response, NextFunction } from "express";
import { scheduleRepository } from "../repositories";
import { AppError } from "../errors";

const validateRealEstateSchedule = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {date, hour, realEstateId } = req.body
    const checkSchedule = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.realEstateId = :realEstateId", {realEstateId})
    .andWhere("schedule.date = :date", {date})
    .andWhere("schedule.hour = :hour", {hour})
    .getOne()

    if(checkSchedule){
        throw new AppError("There is already an appointment for the same property at the same date and time.", 409)
    }
    return next()
}

export {validateRealEstateSchedule}