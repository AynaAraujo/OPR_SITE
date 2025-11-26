// database.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banco.sqlite', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
  } else {
    console.log('SQLite conectado com sucesso!');
  }
});

// Criar tabela de eventos se não existir
db.run(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    location TEXT NOT NULL
  )
`);
// Criar tabela de usuários (admin)
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`);

// Inserir admin padrão se não existir
db.get("SELECT * FROM users WHERE email = ?", ["adm_poli_teste@gmail.com"], (err, row) => {
  if (!row) {
    db.run(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      ["adm_poli_teste@gmail.com", "ihc_5567"],
      (err) => {
        if (err) console.log("Erro ao criar admin:", err);
        else console.log("Admin criado com sucesso!");
      }
    );
  }
});




module.exports = db;
