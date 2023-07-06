import { Request, Response } from "express"
import {  RealEstateDefault, RealEstateRead } from "../interfaces"
import { createRealEstateService, readRealEstateService } from "../services"

const createRealEstateController =  async (req: Request, res: Response): Promise<Response> => {
    const estate: RealEstateDefault = await createRealEstateService({...req.body, category:res.locals.foundCategory})
    return res.status(201).json(estate)
}
const readRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const list: RealEstateRead = await readRealEstateService()
    return res.status(200).json(list)
}

export {createRealEstateController, readRealEstateController}