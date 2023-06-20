import express, { Request, Response, Router } from 'express';
import { UserService } from '~shared/services/userService';
import BaseRouter from './baseRouter';

function UserRouter(service: UserService): Router {
  const baseRouter = new BaseRouter(service);
  return baseRouter.getRouter();
}

export default UserRouter;