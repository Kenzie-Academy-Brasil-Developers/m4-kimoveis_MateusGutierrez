import { registerUserController,deleteUserController,listAllUsersController,updateUserController } from "./user.controller";
import { loginController } from "./login.controller";
import { createCategoryController, readCategoryController } from "./category.controller";
import { createRealEstateController,readRealEstateController } from "./realEstate.controller";
import { createScheduleController, readScheduleController } from "./schedule.controller";

export {
    loginController,registerUserController,deleteUserController,
    listAllUsersController,updateUserController,createCategoryController,
    readCategoryController,createRealEstateController,readRealEstateController,
    createScheduleController,readScheduleController
}