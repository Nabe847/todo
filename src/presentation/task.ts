import { getTasks } from '@/usecase/task/getTasks';
import { Hono } from 'hono';

export const task = new Hono();

task.get('/', (c) => {
  const tasks = getTasks();
  return c.json(tasks);
});
