import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../shared/base-entity';

@Entity()
export class Tag extends BaseEntity {
  @Column()
  name: string;
}
