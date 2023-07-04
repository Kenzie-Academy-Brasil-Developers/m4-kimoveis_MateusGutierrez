import {z} from "zod"
import { schedulesCreateSchema, schedulesSchema } from "../schemas";
import { Schedule } from "../entities";
import { Repository } from "typeorm";

type ScheduleCreate = z.infer<typeof schedulesCreateSchema>;
type ScheduleDefault = z.infer<typeof schedulesSchema>
type ScheduleRepo = Repository<Schedule>;

export {ScheduleCreate,ScheduleDefault,ScheduleRepo}