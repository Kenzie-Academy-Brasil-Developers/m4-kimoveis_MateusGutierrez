import { Request, Response } from "express"
import { Categories, CategoryRead } from "../interfaces"
import { createCategoryService, readCategoryService } from "../services"

const createCategoryController =  async (req: Request, res: Response): Promise<Response> => {
    const category: Categories = await createCategoryService(req.body)
    return res.status(201).json(category)
}
const readCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const categories: CategoryRead = await readCategoryService()
    return res.status(200).json(categories)
}

export {createCategoryController, readCategoryController}