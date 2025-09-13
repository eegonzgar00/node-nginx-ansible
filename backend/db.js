const sqlite3 = require("sqlite3").verbose();

// Guardar la DB en un volumen (montado en /data)
const db = new sqlite3.Database("/data/users.db", (err) => {
  if (err) {
    console.error("Error al conectar con SQLite:", err.message);
  } else {
    console.log("Conectado a SQLite en /data/users.db");
  }
});

// Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);

module.exports = db;
