const jwt = require("jsonwebtoken");
const SECRET_KEY = "MINHA-CHAVE-SECRETA";

const gerarTokenCriptografado = (dado) => {
    delete dado.senha;
    const token = jwt.sign(dado, SECRET_KEY);
    return { token: Buffer.from(token).toString("base64") }
}

const descriptografarToken = (token) => {
    return Buffer.from(token, 'base64').toString("utf-8");
}

module.exports = {
    gerarTokenCriptografado,
    descriptografarToken
}