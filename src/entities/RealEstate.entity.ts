import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Category } from "./Categoties.entity";
import { Address } from "./Address.entity";
import { Schedule } from "./Schedules.entity";

@Entity("real_estate")
export class RealEstate{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({default: false, type: "boolean"})
    sold: boolean;

    @Column({default: 0, type: "decimal", precision: 10, scale: 2})
    value: number | string;

    @Column({type: "integer"})
    size: number;

    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type:"date"})
    updatedAt: string;

    @OneToOne(() => Address, {cascade:true})
    @JoinColumn()
    addresses: Address;
    

    @ManyToOne(() => Category, (c) => c.real_estate)
    categories: Category;

    @OneToMany(() => Schedule, (s) => s.real_estate)
    schedules: Array<Schedule>


}