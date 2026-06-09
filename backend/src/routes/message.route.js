import express from 'express';

const messageRouter = express.Router();

messageRouter.get('/', (req, res) => {
    res.send('Get all messages');
});

messageRouter.post('/send', (req, res) => {
    res.send('Send message endpoint');
});

export default messageRouter;