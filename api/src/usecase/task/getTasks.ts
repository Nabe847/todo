import { Task } from '../../domain/task/entities';
import TaskRepository from '../../infra/taskRepository';

export const getTasks = async (): Promise<Task[]> => {
  return await TaskRepository.findAll();
};
