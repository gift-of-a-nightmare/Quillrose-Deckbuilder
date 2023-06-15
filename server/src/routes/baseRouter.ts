import { Request, Response, Router } from 'express';
import { CRUDService } from '~shared/services/crudService';

interface Entity {

}

class BaseRouter<T extends Entity> {
  constructor(private service: CRUDService<T>) {}

  public getRouter(): Router {
    const router: Router = Router();

    router.get('/', async (req: Request, res: Response) => {
      const entities = await this.service.getAll();
      res.json(entities);
    });

    router.get('/:id', async (req: Request, res: Response) => {
      const entityId: string = req.params.id;
      const entity = await this.service.getById(entityId);
      if (entity) {
        res.json(entity);
      } else {
        res.status(404).json({ error: 'Entity not found' });
      }
    });

    router.post('/', async (req: Request, res: Response) => {
      const newEntity = req.body;
      const createdEntity = await this.service.create(newEntity);
      res.json(createdEntity);
    });

    router.put('/:id', async (req: Request, res: Response) => {
      const entityId: string = req.params.id;
      const updatedEntity = req.body;
      const entity = await this.service.update(entityId, updatedEntity);
      if (entity) {
        res.json(entity);
      } else {
        res.status(404).json({ error: 'Entity not found' });
      }
    });

    router.delete('/:id', async (req: Request, res: Response) => {
      const entityId: string = req.params.id;
      const deleted = await this.service.delete(entityId);
      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Entity not found' });
      }
    });

    return router;
  }
}

export default BaseRouter;