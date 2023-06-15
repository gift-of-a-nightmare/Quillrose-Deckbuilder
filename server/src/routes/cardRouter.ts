import express, { Request, Response, Router } from 'express';
import { CardService } from '~shared/services/cardService';
import BaseRouter from './baseRouter';

function CardRouter(service: CardService): Router {
  const baseRouter = new BaseRouter(service);
  return baseRouter.getRouter();
}

export default CardRouter;