import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { UserRepo } from "../interfaces";
import { userRepository } from "../repositories";

const validateEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const repo: UserRepo = userRepository 
    const email: string = req.body.email

    if(!email) return next()
    
    const emailExists: boolean = await repo.exist({ where: {email} })
    
    if(emailExists) throw new AppError("Email already exists", 409)

    return next()
}

export {validateEmail}