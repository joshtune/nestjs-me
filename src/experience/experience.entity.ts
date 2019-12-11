import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../shared/base-entity';

@Entity()
export class Experience extends BaseEntity {
  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  location: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  descriptions: string;

  @Column()
  isPublished: boolean;
}
