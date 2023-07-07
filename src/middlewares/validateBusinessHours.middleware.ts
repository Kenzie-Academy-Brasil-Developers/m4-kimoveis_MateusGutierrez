import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const validateBusinessHours = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {hour} = req.body

    const visitHour = parseInt(hour.split(":")[0])

    if(visitHour < 8 || visitHour >= 18){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }
    return next()
}

export {validateBusinessHours}