import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../shared/base-entity';

@Entity()
export class Project extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  thumbnailUrl: string;

  @Column()
  url: string;
}
