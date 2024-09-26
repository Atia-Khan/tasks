import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TasksDocument, Tasks } from '../tasks/entities/task.entity';
import { TaskDto } from '../tasks/dto/tasks.dto'; 

@Injectable()
export class TasksService {
  constructor(@InjectModel(Tasks.name) private readonly tasksModel: Model<TasksDocument>) {}

  
  async create(taskDto: TaskDto): Promise<Tasks> {
    const newTask = new this.tasksModel(taskDto);
    return newTask.save();
  }


  async findAll(): Promise<Tasks[]> {
    return this.tasksModel.find().exec();
  }


  async findByProjectId(projectId: string): Promise<Tasks[]> {
    return this.tasksModel.find({project_id: projectId}).exec()
  }

  async findOne(id: string): Promise<Tasks> {
    const task = await this.tasksModel.findById(id).exec();
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

 
  async update(id: string, taskDto: Partial<TaskDto>): Promise<Tasks> {
    const updatedTask = await this.tasksModel.findByIdAndUpdate(id, taskDto, { new: true }).exec();
    if (!updatedTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return updatedTask;
  }

  
  async delete(id: string): Promise<void> {
    const result = await this.tasksModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }


}
