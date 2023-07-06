import { Request, Response, NextFunction } from "express";
import { realEstateRepository, scheduleRepository } from "../repositories";
import { AppError } from "../errors";

const validateUserSchedule = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    const userId:number = Number(res.locals.decoded.sub)
    const {date,hour} = req.body
    const checkSchedule = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.userId = :userId", {userId})
    .andWhere("schedule.date = :date", {date})
    .andWhere("schedule.hour = :hour", {hour})
    .getOne()

    if(checkSchedule){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    const checkHourSchedule = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.date = :date", {date})
    .andWhere("schedule.hour = :hour", {hour})
    .getOne()

    if(checkHourSchedule){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }
    return next()
}

export {validateUserSchedule}