const express = require("express");
const router = express.Router();
const controller = require("./usuarios_controller");
const authentication = require("../helpers/middlewares/auth")



module.exports = router
    .get("/me", authentication, controller.me)
    .post("/login", controller.login)
    .post("/criarUsuario", controller.criarUsuario);