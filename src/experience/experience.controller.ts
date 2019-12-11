import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Experience } from './experience.entity';
import { ExperienceService } from './experience.service';

@Crud({
  model: {
    type: Experience,
  },
})
@Controller('experience')
export class ExperienceController {
  constructor(public service: ExperienceService) {}
}
