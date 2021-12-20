import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Period from "./Period";
import Test from "./Test";

@Entity("subjects")
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Period, period => period.subjects)
    @JoinColumn({name: 'period_id'})
    period: Period;

    @OneToMany(() => Test, test => test.subject)
    test: Test;
}