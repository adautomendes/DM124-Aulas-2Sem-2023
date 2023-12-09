const axios = require('axios');
require('dotenv').config();

module.exports = {
    verificaJWT(req, res, next) {
        const token = req.headers.token;

        let request = {
            url: `${process.env.AUTH_SERVER}/auth/validaToken`,
            data: {},
            config: {
                headers: {
                    token
                }
            }
        };

        axios.post(request.url, request.data, request.config)
            .then((response) => {
                console.log(`Token ok!`);
                next();
            })
            .catch((error) => {
                console.log(`Token inválido.`);
                return res.status(error.response.status).json({ auth: error.response.data });
            });
    }
}