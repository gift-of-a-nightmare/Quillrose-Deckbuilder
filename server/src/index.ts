import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// SERVICES
import { CardService } from '../../shared/services/cardService';

// IMPLEMENTATION
import CardServiceLocal from '../serviceImplementations/local/CardServiceLocal'

// ROUTERS
import CardRouter from '../routes/cards'

const app: Express = express();

// ENV
dotenv.config();
const port = process.env.PORT;

// DETERMINE DEPENDENCY
const cardService: CardService = new CardServiceLocal();

app.use('/cards', CardRouter(cardService));

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript NodeJS + Express Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});