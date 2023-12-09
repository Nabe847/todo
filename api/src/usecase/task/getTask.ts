import { Task } from '@/domain/task/entities';
import TaskRepository from '@/infra/taskRepository';
import { HTTPException } from 'hono/http-exception';

export const getTask = async (id: string): Promise<Task> => {
  const task = await TaskRepository.findById(id);
  if (!task) {
    throw new HTTPException(404);
  }
  return task;
};
