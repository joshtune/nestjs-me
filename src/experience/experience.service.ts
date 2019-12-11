import { Injectable } from '@nestjs/common';
import { Experience } from './experience.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class ExperienceService extends TypeOrmCrudService<Experience> {
  constructor(@InjectRepository(Experience) repo) {
    super(repo);
  }
}
