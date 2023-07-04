import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema} from "../schemas";

const registerUserService = async (payload: UserCreate): Promise<UserReturn> => {
    const user: User = userRepository.create(payload)
    await userRepository.save(user)
    return userReturnSchema.parse(user)
}

const listAllUsersService = async (admin: boolean): Promise<UserRead> =>{
    if(admin){
        const users: Array<User> = await userRepository.find({withDeleted: true})
        return userReadSchema.parse(users)
    }
    const list = await userRepository.find()
    return userReadSchema.parse(list)
}

const updateUserService = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
    const update = await userRepository.save({...user, ...payload})
    return userReturnSchema.parse(update)
}

const deleteUserService = async (user: User) : Promise<void> => {
    await userRepository.softRemove(user)
}

export {registerUserService, listAllUsersService, updateUserService, deleteUserService}