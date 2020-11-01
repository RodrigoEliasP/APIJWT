const { DataTypes } = require("sequelize");
const connection = require("../config/database");
const UsuarioModel = connection.define('usuarios', {
    nome: {
        type: DataTypes.TEXT
    },
    senha: {
        type: DataTypes.TEXT,
        allowNull: false, 
        validate: {
            notNull: {
                msg: "Campo senha não pode ser nulo"
            }
        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Campo email não pode ser nulo"
            }
        }
    }

}, {
    timestamps: false,
    underscored: true,
    modelName: 'usuarios'
});

module.exports = UsuarioModel;