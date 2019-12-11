import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
  updateTime: Date;

}
