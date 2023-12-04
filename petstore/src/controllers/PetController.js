const Pet = require('../models/Pet');

module.exports = {
    async inserir(req, res) {
        const { nome, raca, idade } = req.body;

        try {
            const petCriado = await Pet.create({ nome, raca, idade });
            return res.status(201).json(petCriado);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async atualizar(req, res) {
        const { nome } = req.params;
        const { raca, idade } = req.body;

        try {
            const petAtualizado = await Pet.updateOne({ nome }, { raca, idade });
            return res.status(201).json(petAtualizado);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async buscar(req, res) {
        // GET localhost:3000/pet
        // GET localhost:3000/pet?nome=Caramelo
        const { nome } = req.query;

        let petLista = [];
        if (nome) {
            // select * from pet where nome = <nome>
            petLista = await Pet.find({ nome });
        } else {
            // select * from pet
            petLista = await Pet.find();
        }

        res.status(200).json(petLista);
    },

    async excluir(req, res) {
        const { nome } = req.params;

        try {
            const petRemovido = await Pet.deleteOne({ nome });
            return res.status(200).json(petRemovido);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async validar(req, res, next) {
        const { nome } = req.body;

        const petExistente = await Pet.findOne({ nome });

        if (petExistente) {
            return res.status(200).json(petExistente);
        }

        next();
    }
};