import { Address, RealEstate } from "../entities"
import { RealEstateDefault,RealEstateRead} from "../interfaces"
import { addressRepository, realEstateRepository } from "../repositories"
import { realEstateReadSchema, realEstateSchema} from "../schemas"



const createRealEstateService = async (payload: RealEstateDefault): Promise<RealEstateDefault> => {
    const {category,address,...realEstate} = payload
    const addressCreated : Address = addressRepository.create(address)
    await addressRepository.save(address)
    
    const estate: RealEstate = realEstateRepository.create({
        ...realEstate,
        address: {...addressCreated,number:addressCreated.number ? addressCreated.number: null},
        category
    })

    await realEstateRepository.save(estate)
    return realEstateSchema.parse(estate)
}

const readRealEstateService = async (): Promise<RealEstateRead> =>{
    const list = await realEstateRepository.find({
        relations: {
            address: true,
        }
    })
    return (list)
}

export {createRealEstateService, readRealEstateService}