import {
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User.entity";
import { RealEstate } from "./RealEstate.entity";

@Entity("schedules")
export class Schedule{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @CreateDateColumn({type: "date"})
    date: string | Date;

    @CreateDateColumn({type:"time"})
    hour: string | Date;

    @ManyToOne(() => RealEstate, (re) => re.schedules)
    realEstate: RealEstate
    
    @ManyToOne(() => User, (u) => u.schedules)
    user: User;
}