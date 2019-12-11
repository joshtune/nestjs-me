import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Tag } from '../../tag/tag.entity';
import { tagData } from './tag.data';

export default class CreateTags implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Tag)
      .values(tagData)
      .execute();
  }
}
