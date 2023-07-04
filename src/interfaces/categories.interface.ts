import {z} from "zod"
import { categoriesCreateSchema,categoriesSchema,categoryReadSchema } from "../schemas"
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryCreate = z.infer<typeof categoriesCreateSchema>;
type Categories = z.infer<typeof categoriesSchema>
type CategoryRead = z.infer<typeof categoryReadSchema>
type CategoryRepo = Repository<Category>;

export {Categories,CategoryCreate, CategoryRepo,CategoryRead};