import { Controller } from '@nestjs/common';
import { TagService } from './tag.service';
import { Crud } from '@nestjsx/crud';
import { Tag } from './tag.entity';

@Crud({
  model: {
    type: Tag,
  },
})
@Controller('api/tag')
export class TagController {
  constructor(public service: TagService) {}
}
