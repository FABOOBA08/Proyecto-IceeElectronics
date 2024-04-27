const mysql = require('mysql');

const dbConfig = {
  host: "localhost",
  database: "proyecto_icee",
  user: "root",
  password: "123456",
  port: 8085
};

const conexion = mysql.createConnection(dbConfig);

conexion.connect(function(err) {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    throw err;
  }
  console.log("Conexión a la base de datos exitosa");
});

module.exports = conexion;
