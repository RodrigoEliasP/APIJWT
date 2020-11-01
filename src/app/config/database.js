const { Sequelize } = require("sequelize");
const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./src/database/database.sqlite"
}); 

connection.authenticate().then(() => {
    console.log("conectado com sucesso");
}, () => {
    console.log("falha na conexão")
});

module.exports = connection;