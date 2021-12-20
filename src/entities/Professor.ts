import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Test from "./Test";

@Entity("professors")
export default class Professor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Test, test => test.professor)
    test: Test;
}