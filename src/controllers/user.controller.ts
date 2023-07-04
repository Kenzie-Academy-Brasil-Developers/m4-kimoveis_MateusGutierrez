import { Request, Response } from "express";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { deleteUserService, listAllUsersService, registerUserService, updateUserService } from "../services";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { AppError } from "../errors";


const registerUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await registerUserService(req.body)
    return res.status(201).json(user)
}

const listAllUsersController = async (req: Request, res: Response): Promise<Response> => {
    const admin: boolean = res.locals.decoded.admin
    const list:UserRead = await listAllUsersService(admin)
    return res.status(200).json(list)
}

const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    const foundUser:User = res.locals.foundEntity
    const body: UserUpdate = req.body

    const payload:UserReturn = await updateUserService(foundUser, body)
    return res.status(200).json(payload)
}

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    await deleteUserService(res.locals.foundEntity)
    return res.status(204).json()
}

export {registerUserController,listAllUsersController,updateUserController,deleteUserController}