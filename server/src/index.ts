import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './router';

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;
const googleApiKey = process.env.GOOGLE_API_KEY;

if (!googleApiKey) {
  console.error('Environment variable GOOGLE_API_KEY must be set.');
  process.exit(1);
}

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  console.log('Request Body:', req.body);  
  next();
});

app.get('/key', (req: Request, res: Response) => {
  res.send(googleApiKey);
});

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({});
type Context = typeof createContext;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});