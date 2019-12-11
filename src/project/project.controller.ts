import { Controller } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Crud } from '@nestjsx/crud';
import { Project } from './project.entity';

@Crud({
  model: {
    type: Project,
  },
})
@Controller('api/project')
export class ProjectController {
  constructor(public service: ProjectService) {}
}
