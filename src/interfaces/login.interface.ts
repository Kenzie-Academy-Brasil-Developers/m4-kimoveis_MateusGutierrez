import {z} from "zod"
import { login } from "../schemas"

type Login = z.infer<typeof login>
type LoginReturn = {token: string}

export {Login, LoginReturn}