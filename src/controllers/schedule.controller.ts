import { Request, Response } from "express"
import {ScheduleCreate,ScheduleDefault} from "../interfaces"
import { createScheduleService,readScheduleService } from "../services"

const createScheduleController = async (req: Request, res: Response): Promise<Response> => {
    const sched: Object = await createScheduleService(req.body)
    return res.status(201).json(sched)
}


const readScheduleController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id)
    const check = await readScheduleService(id)
    return res.status(200).json(check)
}

export {createScheduleController, readScheduleController}