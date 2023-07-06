import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { z } from "zod"
import { JsonWebTokenError } from "jsonwebtoken";

const handleError = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
    ): Response => {
    
    if(error instanceof AppError){
        return res.status(error.status).json({message: error.message})
    }
    if(error instanceof z.ZodError){

        return res.status(400).json({message: error.flatten().fieldErrors})
    }
    if(error instanceof JsonWebTokenError && error.message === "jwt malformed"){
        return res.status(401).json({message: error.message})
    }
    if(error instanceof JsonWebTokenError && error.message === "invalid token"){
        return res.status(401).json({message: "Invalid signature"})
    }
    if(error instanceof JsonWebTokenError && error.message === "jwt must be provided"){
        return res.status(401).json({message: "Invalid signature"})
    }
    console.error(error)

    return res.status(500).json({message: "Internal Server Error"})
}

export {handleError}