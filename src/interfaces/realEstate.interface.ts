import {z} from "zod"
import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { realEstateCreateSchema, realEstateReadSchema, realEstateSchema } from "../schemas";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateRead = z.infer<typeof realEstateReadSchema>
type RealEstateDefault = z.infer<typeof realEstateSchema>
type RealEstateRepo = Repository<RealEstate>;

export {RealEstateCreate,RealEstateRead,RealEstateRepo,RealEstateDefault};