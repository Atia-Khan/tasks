import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from '../tasks/dto/tasks.dto'; 

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // Create a new task
  @Post()
  async create(@Body() taskDto: TaskDto) {
    return this.tasksService.create(taskDto);
  }

  // Get all tasks
  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  // Get a task by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  // Update a task
  @Put(':id')
  async update(@Param('id') id: string, @Body() taskDto: Partial<TaskDto>) {
    return this.tasksService.update(id, taskDto);
  }

  // Delete a task
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}
