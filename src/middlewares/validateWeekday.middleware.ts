import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const validateWeekday = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {date} = req.body
    const visitDate = new Date(date)
    const weekday = visitDate.getDay()

    if(weekday === 0 || weekday === 6){
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }
    return next() 
}
export {validateWeekday}