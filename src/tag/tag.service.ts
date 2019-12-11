import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagService extends TypeOrmCrudService<Tag> {
  constructor(@InjectRepository(Tag) repo) {
    super(repo);
  }
}
