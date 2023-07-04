import { Category } from "../entities"
import { Categories, CategoryCreate, CategoryRead } from "../interfaces"
import { categoryRepository } from "../repositories"
import { categoriesSchema, categoryReadSchema } from "../schemas"



const createCategoryService = async (payload: CategoryCreate): Promise<Categories> => {
    const cat: Category = categoryRepository.create(payload)
    return await categoryRepository.save(cat)
     
}

const readCategoryService = async (): Promise<CategoryRead> =>{
    const list = await categoryRepository.find()
    return categoryReadSchema.parse(list)
}

export {createCategoryService, readCategoryService}