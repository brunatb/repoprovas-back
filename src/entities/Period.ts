import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Subject from "./Subject";

@Entity("periods")
export default class Period{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Subject, subject => subject.period)
    subjects: Subject[]
}