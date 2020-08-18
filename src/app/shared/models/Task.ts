export class Task {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    finishedAt: Date;
    state: number;
    projectId: number;
    performerId: number
  }