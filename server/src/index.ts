import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// SERVICES
import { CardService } from '~shared/services/cardService';

// IMPLEMENTATION
import { CRUDCardService } from './services/local/CRUDCardService';
import { CRUDUserService } from './services/local/CRUDUserService';

// ROUTERS
import CardRouter from './routes/cardRouter'
import UserRouter from './routes/userRouter';

const app: Express = express();

// ENV
dotenv.config();
const port = process.env.PORT_NODE;

// DETERMINE DEPENDENCY
app.use('/cards', CardRouter(CRUDCardService));
app.use('/users', UserRouter(CRUDUserService));

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript NodeJS + Express Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});