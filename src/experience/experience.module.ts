import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from './experience.entity';

@Module({
  providers: [ExperienceService],
  imports: [TypeOrmModule.forFeature([Experience])]
})
export class ExperienceModule {}
