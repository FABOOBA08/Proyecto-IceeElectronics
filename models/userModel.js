const conexion = require('../config/dbConfig');

const UserModel = {
    obtenerUsuarios: (callback) => {
        conexion.query("SELECT * FROM usuarios", callback);
    },
    crearUsuario: (usuario, callback) => {
        const { id, nombre, contrasena, nombreUsuario, rol } = usuario;
        const registroU = "INSERT INTO usuarios (id, nombre, contrasena, rol, nombreUsuario) VALUES (?, ?, ?, ?, ?)";
        conexion.query(registroU, [id, nombre, contrasena, rol, nombreUsuario], callback);
    },
    eliminarUsuario: (id, callback) => {
        const eliminarQuery = "DELETE FROM usuarios WHERE id = ?";
        conexion.query(eliminarQuery, [id], callback);
    },
    obtenerUsuarioPorId: (id, callback) => {
        const query = "SELECT * FROM usuarios WHERE id = ?";
        conexion.query(query, [id], callback);
    },
    actualizarUsuario: (id, datos, callback) => {
        const { nombre, nombreUsuario, contrasena, rol } = datos;
        const query = "UPDATE usuarios SET nombre = ?, nombreUsuario = ?, contrasena = ?, rol = ? WHERE id = ?";
        conexion.query(query, [nombre, nombreUsuario, contrasena, rol, id], callback);
    }
};

module.exports = UserModel;
