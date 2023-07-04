import { RealEstate } from "../entities"
import { RealEstateCreate,RealEstateDefault,RealEstateRead} from "../interfaces"
import { realEstateRepository } from "../repositories"
import { realEstateReadSchema,realEstateSchema} from "../schemas"



const createRealEstateService = async (payload: RealEstateCreate): Promise<RealEstateDefault> => {
    const estate: RealEstate = realEstateRepository.create(payload)
    await realEstateRepository.save(estate)
    return realEstateSchema.parse(estate)
     
}

const readRealEstateService = async (): Promise<RealEstateRead> =>{
    const list = await realEstateRepository.find()
    return realEstateReadSchema.parse(list)
}

export {createRealEstateService, readRealEstateService}