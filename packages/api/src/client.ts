import { hc } from 'hono/client';
import { AppType } from './app';

export const client = hc<AppType>('http://localhost:3000/');
