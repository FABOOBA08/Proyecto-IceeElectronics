const UserModel = require('../models/userModel');

const UserController = {
    obtenerUsuarios: (req, res) => {
        UserModel.obtenerUsuarios((err, result) => {
            if (err) {
                res.status(500).send("Error al obtener usuarios");
            } else {
                res.json(result);
            }
        });
    },
    crearUsuario: (req, res) => {
        const usuario = req.body;
        UserModel.crearUsuario(usuario, (err) => {
            if (err) {
                res.status(500).send("Error al crear usuario");
            } else {
                res.send(
                    '<script>alert("Usuario agregado con éxito"); window.location="/";</script>'
                );
            }
        });
    },
    eliminarUsuario: (req, res) => {
        const usuarioId = req.params.id;
        UserModel.eliminarUsuario(usuarioId, (err) => {
            if (err) {
                res.status(500).send("Error al eliminar el usuario");
            } else {
                res.send("Usuario eliminado con éxito");
            }
        });
    },
    obtenerUsuarioPorId: (req, res) => {
        const userId = req.params.id;
        UserModel.obtenerUsuarioPorId(userId, (err, result) => {
            if (err) {
                res.status(500).send("Error al obtener datos");
            } else {
                res.json(result[0]);
            }
        });
    },
    actualizarUsuario: (req, res) => {
        const userId = req.params.id;
        const datos = req.body;
        UserModel.actualizarUsuario(userId, datos, (err) => {
            if (err) {
                res.status(500).send("Error al actualizar usuario");
            } else {
                res.send('<script>alert("Usuario actualizado correctamente"); window.location="/usuarios.html";</script>');
            }
        });
    }
};

module.exports = UserController;
