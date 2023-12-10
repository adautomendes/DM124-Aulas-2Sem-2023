const express = require('express');
const rootRouter = express.Router();
const JwtController = require('./src/controllers/JwtController');

rootRouter.get('/', (req, res) => {
    res.status(200).json({
        msg: "Hello world - GET"
    });
});

const authRouter = express.Router();

rootRouter.use('/auth', authRouter);

authRouter.post('/login', JwtController.login);
authRouter.post('/validaToken', JwtController.verificaJWT);

module.exports = rootRouter;