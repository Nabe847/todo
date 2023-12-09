import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { task } from '@/presentation/task';
import { prisma } from './infra/prisma';

const app = new Hono({ strict: false }).basePath('/api');
app.get('/', (c) =>
  c.json({
    ok: true,
    message: 'Hello Hono!',
  }),
);

app.route('/task', task);

process.on('SIGTERM', () => {
  console.log('disconnect from db');
  prisma.$disconnect();
});

serve({ fetch: app.fetch, port: 3000 });
