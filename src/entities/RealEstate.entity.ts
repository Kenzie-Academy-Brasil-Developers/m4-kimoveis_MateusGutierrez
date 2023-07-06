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
import { Category } from "./Category.entity";
import { Address } from "./Address.entity";
import { Schedule } from "./Schedules.entity";
import { AddressCreate, CategoryCreate } from "../interfaces";

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
    address: Address;
    

    @ManyToOne(() => Category, (c) => c.realEstate)
    category: Category;

    @OneToMany(() => Schedule, (s) => s.realEstate)
    schedules: Array<Schedule>

}