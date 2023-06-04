import express, { Request, Response, Router } from 'express';
import { CardService } from '../../shared/services/cardService';

function cardRouter(cardService: CardService): Router {
    const router: Router = Router();
  
    router.get('/', async (req: Request, res: Response) => {
      const cards = await cardService.getAllCards();
      res.json(cards);
    });
  
    router.get('/:id', async (req: Request, res: Response) => {
      const cardId: string = req.params.id;
      const card = await cardService.getCardById(cardId);
      if (card) {
        res.json(card);
      } else {
        res.status(404).json({ error: 'Card not found' });
      }
    });
  
    router.post('/', async (req: Request, res: Response) => {
      const newCard = req.body;
      const createdCard = await cardService.createCard(newCard);
      res.json(createdCard);
    });
  
    router.put('/:id', async (req: Request, res: Response) => {
      const cardId: string = req.params.id;
      const updatedCard = req.body;
      const card = await cardService.updateCard(cardId, updatedCard);
      if (card) {
        res.json(card);
      } else {
        res.status(404).json({ error: 'Card not found' });
      }
    });
  
    router.delete('/:id', async (req: Request, res: Response) => {
      const cardId: string = req.params.id;
      const deleted = await cardService.deleteCard(cardId);
      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Card not found' });
      }
    });
    return router;
  }
  
export default cardRouter;