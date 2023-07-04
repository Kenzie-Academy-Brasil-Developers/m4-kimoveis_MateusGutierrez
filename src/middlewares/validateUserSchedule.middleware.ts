import { Request, Response, NextFunction } from "express";
import { scheduleRepository } from "../repositories";
import { AppError } from "../errors";

const validateUserSchedule = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    const userId = res.locals.foundEntity.id
    console.log(userId)
    const {date,hour} = req.body
    const checkSchedule = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.userId = :userId", {userId})
    .andWhere("schedule.date = :date", {date})
    .andWhere("schedule.hour = :hour", {hour})
    .getOne()

    if(checkSchedule){
        throw new AppError("The user already has an appointment for the same date and time.", 409)
    }
    return next()
}

export {validateUserSchedule}