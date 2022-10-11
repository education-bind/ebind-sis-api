import express from 'express';
import apiRouter from './api/index';

const allRoutes = express.Router();

allRoutes.get('/', (_, res) => {
  res.json({ message: 'Welcome to Education bind!' });
});

allRoutes.use('/api', apiRouter);

export default allRoutes;
