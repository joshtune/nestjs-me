import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';

@Module({
  controllers: [TagController],
  imports: [TypeOrmModule.forFeature([Tag])],
  providers: [TagService]
})
export class TagModule {}
