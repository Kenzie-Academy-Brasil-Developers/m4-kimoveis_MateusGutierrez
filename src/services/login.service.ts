import { compare } from "bcryptjs"
import { User } from "../entities"
import { AppError } from "../errors"
import { Login, LoginReturn } from "../interfaces"
import { userRepository } from "../repositories"
import {sign} from "jsonwebtoken"

const loginService = async ({email, password}: Login): Promise<LoginReturn> => {
    const foundUser: User | null = await userRepository.findOneBy({email})
    if(!foundUser) throw new AppError("Invalid credentials", 401)

    if(foundUser.deletedAt !== null) throw new AppError("User not found", 401)
    
    const samePassword: boolean = await compare(password, foundUser.password)
    if(!samePassword) throw new AppError("Invalid credentials", 401)

    const token: string = sign(
        {admin: foundUser.admin},
        process.env.SECRET_KEY!,
        {subject: foundUser.id.toString(),expiresIn: 3600}
    )
    return {token}
}

export {loginService}



