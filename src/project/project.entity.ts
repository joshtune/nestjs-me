import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../shared/base-entity';

@Entity()
export class Project extends BaseEntity {
  @Column()
  name: string;

  @Column('longtext')
  description: string;

  @Column()
  thumbnailUrl: string;

  @Column()
  link: string;
}
