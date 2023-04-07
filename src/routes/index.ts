import express from 'express';
import images from './api/images';

const routes: express.Router = express.Router();

routes.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.send('Main api');
  }
);

routes.use('/images', images);
export default routes;
