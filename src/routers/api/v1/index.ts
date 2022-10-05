import express from 'express';

const apiRouter = express.Router();

apiRouter.use('/', (_, res) => {
    res.json({ message: 'API VERSION 1' });
});

export default apiRouter;
