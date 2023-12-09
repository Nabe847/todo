import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono().basePath('/api');
app.get('/', (c) =>
  c.json({
    ok: true,
    message: 'Hello Hono!',
  }),
);

serve({ fetch: app.fetch, port: 3000 });
