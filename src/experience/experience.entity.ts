import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

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
