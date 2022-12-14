import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectEntity } from "./project.entity";

@Entity({ name: "components" })
export class ComponentEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  desc: string

  @Column({ type: "longblob" })
  blueprint: Buffer

  @Column()
  industry: string

  @Column()
  price: number

  @ManyToOne(() => ProjectEntity, (project) => project.id)
  project: ProjectEntity
}