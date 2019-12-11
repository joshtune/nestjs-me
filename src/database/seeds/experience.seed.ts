import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Experience } from '../../experience/experience.entity';
import { experienceData } from './experience.data';

export default class CreateExperiences implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Experience)
      .values(experienceData)
      .execute();
  }
}
