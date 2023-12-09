import { Task } from '@/domain/task/entities';
import TaskRepository from '@/infra/taskRepository';

export const createTask = async (
  title: string,
  description: string,
): Promise<Task> => {
  const task = Task.create(title, description);
  await TaskRepository.create(task);
  return task;
};
