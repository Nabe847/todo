import { v4 as uuidV4 } from 'uuid';
import type { Task as DbModel } from '@prisma/client';

export interface Task {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly v: number;
}

export const Task = {
  create(title: string, description: string): Task {
    return {
      id: uuidV4(),
      title,
      description,
      v: 1,
    };
  },
  fromDbModel(model: DbModel): Task {
    return {
      id: model.id,
      title: model.title,
      description: model.description,
      v: model.v,
    };
  },
};
