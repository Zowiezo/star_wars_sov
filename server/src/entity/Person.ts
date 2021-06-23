import { Entity, Column } from 'typeorm'
import { Base } from './Base'

@Entity()
export class Person extends Base {
  @Column()
  gender!: string

  @Column()
  height!: string

  @Column()
  mass!: string

  @Column()
  name!: string

  @Column({ nullable: true })
  homeworldId!: number

}