import { UserCreate, UserRead, UserReturn, UserUpdate, UserRepo } from "./user.interfaces"
import { Login,LoginReturn } from "./login.interface";
import { Categories,CategoryCreate,CategoryRepo,CategoryRead } from "./categories.interface";
import { RealEstateCreate,RealEstateRead,RealEstateRepo,RealEstateDefault } from "./realEstate.interface";
import {ScheduleCreate,ScheduleDefault,ScheduleRepo} from "./schedule.interface"

export { 
    UserCreate, UserRead, UserReturn, 
    UserUpdate, UserRepo,Login,
    LoginReturn,Categories,CategoryCreate,
    CategoryRepo,CategoryRead,RealEstateCreate,
    RealEstateRead,RealEstateRepo,RealEstateDefault,
    ScheduleCreate,ScheduleDefault,ScheduleRepo
 };