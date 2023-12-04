const express = require('express');
const rootRouter = require('./router');
const mongoose = require('mongoose');
const DB = require('./src/database/config');

const app = express();

app.use(express.json());
app.use(rootRouter);

const porta = process.env.PORT || 3000;

mongoose.connect(DB.DB_URL, DB.DB_SETTINGS)
    .then(() => console.log(`Conectado ao MongoDB ${DB.DB_URL}`))
    .catch(erro => console.log(`Erro: ${erro}`));

app.listen(porta, function() {
    console.log("Servidor rodando...");
});