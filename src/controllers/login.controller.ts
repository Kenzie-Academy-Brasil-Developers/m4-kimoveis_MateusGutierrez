import { Request, Response } from "express"
import { LoginReturn } from "../interfaces"
import { loginService } from "../services"

const loginController =  async (req: Request, res: Response): Promise<Response> => {
    const token: LoginReturn = await loginService(req.body)
    return res.status(200).json(token)
}

export {loginController}