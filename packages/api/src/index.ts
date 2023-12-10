import { serve } from '@hono/node-server';
import { app } from './app';
import { prisma } from './infra/prisma';

process.on('SIGTERM', async () => {
  try {
    console.log('disconnect from db');
    await prisma.$disconnect();
  } finally {
    process.exit(0);
  }
});

const port = 5000;
serve({ fetch: app.fetch, port }, () => {
  console.log(`API listen on port ${port}`);
});
