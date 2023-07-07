import { Category, RealEstate } from "../entities"
import { Categories, CategoryCreate, CategoryRead} from "../interfaces"
import { categoryRepository} from "../repositories"
import { categoryReadSchema } from "../schemas"



const createCategoryService = async (payload: CategoryCreate): Promise<Categories> => {
    const cat: Category = categoryRepository.create(payload)
    return await categoryRepository.save(cat)
     
}

const readCategoryService = async (): Promise<CategoryRead> =>{
    const list = await categoryRepository.find()
    return categoryReadSchema.parse(list)
}

const readAllRealEstateService = async (id:number): Promise<Category> => {

    const categories: Category | null = await categoryRepository.findOne({
        relations:{
            realEstate: true
        },
        where: {
            id: id
        }
    })

    return categories! 
}
export {createCategoryService, readCategoryService, readAllRealEstateService}