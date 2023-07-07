import { Router } from "express";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { deleteUserController, listAllUsersController, registerUserController, updateUserController } from "../controllers";
import { validateAdmin, validateAdminOrOwner, validateBody, validateEmail, validateId, validateToken } from "../middlewares";

const userRouter: Router = Router()

userRouter.post("",
    validateBody(userCreateSchema),
    validateEmail,
    registerUserController
)

userRouter.get("",
    validateToken,
    validateAdmin,
    listAllUsersController
)

userRouter.patch("/:id",
    validateBody(userUpdateSchema),
    validateToken,
    validateId,
    validateAdminOrOwner,
    updateUserController
)

userRouter.delete("/:id",
    validateId,
    validateToken,
    validateAdmin,
    deleteUserController
)

export {userRouter}