const usuarioRouter = require('../controllers/usuarios_router.js');

module.exports = (server) => {
    server.use('/auth', usuarioRouter);
}