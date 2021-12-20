import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("professors")
export default class Professor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}