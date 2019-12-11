import { Injectable } from '@nestjs/common';
import { Experience } from './experience.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(Experience)
    private readonly repository: Repository<Experience>,
  ) {}

  findAll(): Promise<Experience[]> {
    return this.repository.find();
  }
}
