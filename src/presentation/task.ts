import { createTask } from '@/usecase/task/createTask';
import { getTasks } from '@/usecase/task/getTasks';
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import z from 'zod';
import { getTask } from '@/usecase/task/getTask';

export const task = new Hono();

task
  .get('/', async (c) => {
    const tasks = await getTasks();
    return c.json(tasks);
  })
  .post(
    '/',
    zValidator(
      'json',
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
    async (c) => {
      const body = c.req.valid('json');
      const task = await createTask(body.title, body.description);
      return c.json(task);
    },
  )
  .get('/:id{[a-z0-9-]+}', async (c) => {
    const id = c.req.param('id');
    const task = await getTask(id);
    return c.json(task);
  });
