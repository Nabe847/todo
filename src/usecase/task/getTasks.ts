import { Task } from '@/domain/task/entities';

export const getTasks = (): Task[] => {
  return [
    {
      title: 'task1',
      description: 'description',
    },
  ];
};
