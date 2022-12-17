import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ComponentEntity } from "./component.entity";

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  phone: string

  @Column()
  name: string

  @Column({
    length: 500
  })
  debrief: string

  @Column({ type: 'longblob', default: '' })
  blueprint: Buffer

  @Column({
    length: 100
  })
  address: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  pincode: number

  @Column()
  budget: number

  @Column()
  quantity: number

  @OneToMany(() => ComponentEntity, (component) => component.id)
  components: ComponentEntity[]
}
