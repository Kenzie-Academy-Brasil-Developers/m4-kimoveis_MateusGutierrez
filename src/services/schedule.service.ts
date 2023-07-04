import { Schedule } from "../entities"
import { ScheduleCreate,ScheduleDefault,ScheduleRepo} from "../interfaces"
import { scheduleRepository } from "../repositories"
import { schedulesCreateSchema,schedulesSchema} from "../schemas"

const createScheduleService = async (payload: ScheduleCreate): Promise<ScheduleDefault> => {
    const sched: Schedule = scheduleRepository.create(payload)
    await scheduleRepository.save(sched)
    return schedulesSchema.parse(sched)
}

const readScheduleService = async (): Promise<ScheduleDefault> =>{
    const list = await scheduleRepository.find()
    return schedulesSchema.parse(list)
}

export {createScheduleService,readScheduleService}
