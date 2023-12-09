const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    login(req, res) {
        const { user, pass } = req.body;

        if (user && pass) {
            const token = jwt.sign({ user, pass }, process.env.CHAVE_PRIVADA, {
                expiresIn: process.env.EXPIRA_EM
            });

            console.log(`Usuário ${user} logado!`);
            return res.status(200).json({ token, expiresIn: `${process.env.EXPIRA_EM}` });
        }

        return res.status(401).json({ errorMsg: `User e Pass são mandatórios.` });
    },

    verificaJWT(req, res) {
        const token = req.headers.token;

        if (token) {
            // Verificação do token
            console.log(`Validando token ${token.slice(0,10)}.`);

            jwt.verify(token, process.env.CHAVE_PRIVADA, (error, decoded) => {
                if (error) {
                    return res.status(401).json({ errorMsg: `Token inválido.` });
                }
                return res.status(200).json({ user: decoded.user, token });
            });
        } else {
            return res.status(401).json({ errorMsg: `Token não fornecido.` });
        }
    }
}