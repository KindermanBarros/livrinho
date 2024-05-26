import express, { Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port: string | undefined = process.env.PORT;
const googleApiKey: string | undefined = process.env.GOOGLE_API_KEY;

if (!port || !googleApiKey) {
  console.error('Environment variables PORT and GOOGLE_API_KEY must be set.');
  process.exit(1);
}

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/key', (req: Request, res: Response) => {
  res.send(googleApiKey);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});