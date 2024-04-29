import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { honoAppPort } from './constants/server';

const app = new Hono();

app.get('/', (context) => {
  return context.text('Hello Hono!');
});

console.log(`Server is running at http://localhost:${honoAppPort}/`);

serve({
  fetch: app.fetch,
  port: honoAppPort,
});
