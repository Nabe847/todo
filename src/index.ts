import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { task } from '@/presentation/task';

const app = new Hono({ strict: false }).basePath('/api');
app.get('/', (c) =>
  c.json({
    ok: true,
    message: 'Hello Hono!',
  }),
);

app.route('/task', task);

serve({ fetch: app.fetch, port: 3000 });
