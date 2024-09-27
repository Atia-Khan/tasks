import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TasksDocument = Tasks & Document;

@Schema({ timestamps: true, collection: 'tl_tasks' })
export class Tasks {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  project_id: string;

  @Prop({ required: true })
  project_name: string;

  @Prop({ required: true })
  created_by_id: string;

  @Prop({ required: true })
  created_by_name: string;

  @Prop({ required: true })
  estimated_hours: number;

  @Prop({ required: true })
  estimated_minutes: number;

  @Prop({ required: true })
  estimated_days: number;

  @Prop({ default: null })
  app_rej_by_id: string | null;

  @Prop({ default: null })
  app_rej_by_name: string | null;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  _active: boolean;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
