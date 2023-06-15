import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// SERVICES
import { CardService } from '~shared/services/cardService';

// IMPLEMENTATION
import { CRUDCardServiceLocal } from './services/local/CRUDCardService';

// ROUTERS
import CardRouter from './routes/cards'

const app: Express = express();

// ENV
dotenv.config();
const port = process.env.PORT_NODE;

// DETERMINE DEPENDENCY
app.use('/cards', CardRouter(CRUDCardServiceLocal));

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript NodeJS + Express Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});