import {Request, Response, NextFunction} from "express"
import { AppError } from "../errors"

const validateAdminOrOwner =(
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const admin = res.locals.decoded.admin
    const sub = res.locals.decoded.sub
    const {id} = req.params


    if(admin) return next()

    if(Number(sub) !== Number(id)){
        throw new AppError("Insufficient permission", 403)
    }
    return next()
}
export {validateAdminOrOwner}