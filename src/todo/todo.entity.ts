import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('todos')
export class TodoEntity {

  @PrimaryGeneratedColumn() 
  id: number;

  @Column() 
  @ApiProperty()
  title: string;

  @ApiProperty()
  @Column()
  description: string

  @ApiProperty()
  @Column({
    type: 'boolean',
    default: false
  })
  is_done: boolean

  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  updated_at: Date
}