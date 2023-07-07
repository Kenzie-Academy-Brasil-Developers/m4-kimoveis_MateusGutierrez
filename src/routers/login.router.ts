import { Router } from "express";
import { loginController } from "../controllers";
import { validateBody } from "../middlewares";
import { login } from "../schemas";

const loginRouter: Router = Router()

loginRouter.post("",
    validateBody(login),
    loginController
)

export {loginRouter}
