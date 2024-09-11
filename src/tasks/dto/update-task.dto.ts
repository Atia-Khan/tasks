import { PartialType } from '@nestjs/mapped-types';
import { TaskDto } from './tasks.dto';

export class UpdateTaskDto extends PartialType(TaskDto) {}
