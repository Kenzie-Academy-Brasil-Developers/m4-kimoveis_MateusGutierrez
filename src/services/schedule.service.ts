import { RealEstate, Schedule } from "../entities"
import { ScheduleCreate,ScheduleDefault,ScheduleRepo} from "../interfaces"
import { realEstateRepository, scheduleRepository } from "../repositories"
import { schedulesCreateSchema,schedulesSchema} from "../schemas"

const createScheduleService = async (payload: ScheduleCreate): Promise<Object> => {
    const sched: Schedule = scheduleRepository.create(payload)
    await scheduleRepository.save(sched)
    return {message: "Schedule created"}
}

const readScheduleService = async (id:number): Promise<Schedule> =>{
    const sched: Schedule | null = await scheduleRepository.findOne({
        relations:{
            realEstate:{
                address:true,
                schedules:{
                    user:true,
                    realEstate:false,
                },
                category:true,

            },
        },
        where:{
            realEstate:{
                id: id,
            },
        },
        
    })
    console.log(sched)
    return sched!
}


export {createScheduleService,readScheduleService}
