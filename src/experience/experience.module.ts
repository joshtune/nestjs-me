import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from './experience.entity';
import { ExperienceController } from './experience.controller';

@Module({
  providers: [ExperienceService],
  imports: [TypeOrmModule.forFeature([Experience])],
  controllers: [ExperienceController]
})
export class ExperienceModule {}
