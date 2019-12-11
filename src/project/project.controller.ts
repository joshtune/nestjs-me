import { Controller } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Crud } from '@nestjsx/crud';
import { Project } from './project.entity';

@Crud({
  model: {
    type: Project,
  },
})
@Controller('api/projects')
export class ProjectController {
  constructor(public service: ProjectService) {}
}
