import { Request, Response } from "express"
import { Categories, CategoryRead, RealEstateRead } from "../interfaces"
import { createCategoryService, readAllRealEstateService, readCategoryService } from "../services"
import { Category } from "../entities"

const createCategoryController =  async (req: Request, res: Response): Promise<Response> => {
    const category: Categories = await createCategoryService(req.body)
    return res.status(201).json(category)
}
const readCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const categories: CategoryRead = await readCategoryService()
    return res.status(200).json(categories)
}
const readAllRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id)
    const list:Category= await readAllRealEstateService(id)
    return res.status(200).json(list)
}

export {createCategoryController, readCategoryController,readAllRealEstateController}