const { me }  = require("../../services/usuario_service");

const authentication = (req, res, next) => {
    const auth = req.header('Authorization');
   
    if(auth && auth.includes("Bearer ")) {
        const token = auth.split(" ")[1];

        me(token).then(usuario => {
            req.usuario = usuario;
            next();
        }).catch(() => {
            res.sendStatus(401);
        })
        
    } else {
        res.sendStatus(401);
    }
}


module.exports = authentication;
