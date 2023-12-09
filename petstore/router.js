const express = require('express');
const rootRouter = express.Router();
const PetController = require('./src/controllers/PetController');
const AuthController = require('./src/controllers/AuthController');

rootRouter.get('/', (req, res) => {
    res.status(200).json({
        msg: "Hello world - GET"
    });
});

const petRouter = express.Router();

rootRouter.use('/pet', AuthController.verificaJWT, petRouter);

petRouter.post('/', PetController.validar, PetController.inserir);
petRouter.patch('/:nome', PetController.atualizar);
petRouter.get('/', PetController.buscar);
petRouter.delete('/:nome', PetController.excluir);

module.exports = rootRouter;