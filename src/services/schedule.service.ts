import { RealEstate, Schedule, User } from "../entities"
import { ScheduleCreate} from "../interfaces"
import { realEstateRepository, scheduleRepository } from "../repositories"

const createScheduleService = async (payload: ScheduleCreate): Promise<Object> => {
    const sched: Schedule = scheduleRepository.create(payload)
    await scheduleRepository.save(sched)
    return {message: "Schedule created"}
}



const readScheduleService = async (id:number): Promise<RealEstate> =>{
    const sched: RealEstate| null = await realEstateRepository.findOne({
        relations:{
            address:true,
            schedules:{
                user:true
            },
            category:true
        },
        where:{
            id
        },
        
    })
    return sched!
}


export {createScheduleService,readScheduleService}
