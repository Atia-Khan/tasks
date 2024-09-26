import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from '../tasks/dto/tasks.dto'; 
import { Tasks } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  
  @Post()
  async create(@Body() taskDto: TaskDto) {
    return this.tasksService.create(taskDto);
  }

  
  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }
 
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }
  
  @Get('project/:projectId')
  async findByProjectId(@Param('projectId') projectId: string): Promise<Tasks[]> {
      return this.tasksService.findByProjectId(projectId);
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() taskDto: Partial<TaskDto>) {
    return this.tasksService.update(id, taskDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}
