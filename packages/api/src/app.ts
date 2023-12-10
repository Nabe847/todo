import { Hono } from 'hono';
import { getTasks } from './usecase/task/getTasks';
import { zValidator } from '@hono/zod-validator';
import z from 'zod';
import { createTask } from './usecase/task/createTask';
import { getTask } from './usecase/task/getTask';

export const app = new Hono({ strict: false }).basePath('/api');

const route = app
  .get('/task', async (c) => {
    const tasks = await getTasks();
    return c.json(tasks);
  })
  .post(
    '/task',
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
  .get('/task/:id{[a-z0-9-]+}', async (c) => {
    const id = c.req.param('id');
    const task = await getTask(id);
    return c.json(task);
  });

export type AppType = typeof route;
