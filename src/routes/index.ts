import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Welcome! Share your game strategy' });
});

export default routes;
