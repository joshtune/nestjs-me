import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Project } from '../../project/project.entity';
import { projectData } from './project.data';

export default class CreateProjects implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Project)
      .values(projectData)
      .execute();
  }
}
