

export class TaskDto {
 id : string;
 name : string;
 project_id: string;
 project_name: string;
 created_by_id: string;
 created_by_name: string;
 estimated_hours: number;
 estimated_minutes: number;
 estimated_days: number;
 app_rej_by_id : string;
 app_rej_by_name : string;
 status: string;
 _active: boolean;
 createdAt: Date;
 updatedAt: Date;
}

