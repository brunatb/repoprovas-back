import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "./Category";
import Professor from "./Professor";
import Subject from "./Subject";

@Entity("tests")
export default class Test {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    pdf_link: string;

    @ManyToOne(() => Subject, subject => subject.test, { eager: true })
    @JoinColumn({ name: 'subject_id' })
    subject: Subject;

    @ManyToOne(() => Professor, professor => professor.test, { eager: true })
    @JoinColumn({ name: 'professor_id' })
    professor: Professor;

    @ManyToOne(() =>  Category, category => category.test, { eager: true })
    @JoinColumn({ name: 'category_id' })
    category: Category;

    getTest() {
    return {
      id: this.id,
      name: this.name,
      category: this.category.name,
      subject: this.subject.name,
      professor: this.professor.name,
      pdfLink: this.pdf_link,
    }
  }
}