import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const validateWeekday = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {date} = req.body
    const visitDate = new Date(date)
    const weekday = visitDate.getDay()

    if(weekday === 0 || weekday === 6){
        throw new AppError("It is only possible to schedule a visit during weekdays (Monday to Friday).", 400)
    }
    return next() 
}
export {validateWeekday}