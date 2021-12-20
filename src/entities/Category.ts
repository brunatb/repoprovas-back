import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Test from "./Test";

@Entity("categories")
export default class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Test, test => test.category)
    test: Test[];
}