import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { RealEstateRepo} from "../interfaces";
import { addressRepository, realEstateRepository } from "../repositories";
import { Address } from "../entities";
import { AddressRepo } from "../interfaces/address.interface";

const validateAddress = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const repo: AddressRepo = addressRepository
    const add = req.body.address
    if(!add) return next()

    const addressExists:boolean = await repo.exist(
        {where: 
            {
                street: add.street,
                zipCode: add.zipCode,
                number: add.number,
                city: add.city,
                state: add.state
            }
        }
    )

    if(addressExists) throw new AppError("Address already exists", 409)

    return next()
}

export {validateAddress}