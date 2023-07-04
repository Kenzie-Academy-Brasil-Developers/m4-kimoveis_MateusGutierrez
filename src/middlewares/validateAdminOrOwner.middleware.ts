import {Request, Response, NextFunction} from "express"
import { AppError } from "../errors"

const validateAdminOrOwner =(
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const admin = res.locals.foundEntity.admin
    const sub = res.locals.foundEntity.id

    const {id} = req.params

    if(admin) return next()

    if(Number(sub) !== Number(id)){
        throw new AppError("Insufficient permission", 403)
    }
    return next()
}
export {validateAdminOrOwner}