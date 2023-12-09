const express = require('express');
const rootRouter = require('./router');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(rootRouter);

const porta = process.env.PORT || 3001;

app.listen(porta, function() {
    console.log(
        (`Servidor rodando na porta ${porta}...`));
});