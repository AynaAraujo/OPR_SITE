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

module.exports = db;
