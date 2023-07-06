import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { CategoryRepo} from "../interfaces";
import { categoryRepository } from "../repositories";

const validateName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const repo: CategoryRepo = categoryRepository 
    const name: string = req.body.name

    if(!name) return next()
    
    const nameExists: boolean = await repo.exist({ where: {name} })
    
    if(nameExists) throw new AppError("Category already exists", 409)

    return next()
}

export {validateName}