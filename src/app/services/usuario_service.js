const UsuarioModel = require("../models/usuario_model");
const errorHandler = require("../helpers/error_handler");
const tokenService = require("./token_service");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "MINHA-CHAVE-SECRETA";

const criarUsuario = async (usuario) => {
    try {
        const usuarioCriado = await UsuarioModel.create(usuario);
        return tokenService.gerarTokenCriptografado(usuarioCriado.toJSON());
    } catch(err) {
        throw errorHandler("Não possível criar usuário", 400, err.errors);
    }
}

const login = async (email, senha) => {
    const usuario = await UsuarioModel.findOne({ where: {email, senha}});

    if(usuario) {
        return tokenService.gerarTokenCriptografado(usuario.toJSON()); 
    } 
    throw errorHandler("E-mail ou senha invalidos", 401);
}

const me = async (token) =>  {
    try {
        const tokenDescriptografado = tokenService.descriptografarToken(token);
        return jwt.verify(tokenDescriptografado, SECRET_KEY);
    } catch (err) {
        throw errorHandler("Token invalido", 401);
    }
} 

module.exports = {
    criarUsuario,
    login,
    me
}