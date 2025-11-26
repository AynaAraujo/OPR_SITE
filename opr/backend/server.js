// server.js
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const eventsRoutes = require('./routes/events');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

// ================================
// 1. CONEXÃO COM O SQLITE
// ================================
const db = new sqlite3.Database('./banco.sqlite', (err) => {
  if (err) {
    console.error("Erro ao conectar ao SQLite:", err.message);
  } else {
    console.log("SQLite conectado com sucesso!");
  }
});

// ================================
// 2. CRIAÇÃO DA TABELA DE CONTATOS
// ================================
db.run(`
  CREATE TABLE IF NOT EXISTS contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// ================================
// 3. ROTAS
// ================================
app.use('/events', eventsRoutes);

app.get('/', (req, res) => {
  res.send('API da OPR funcionando 🚀');
});

// ROTA: Receber mensagens de contato
app.post('/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const query = `INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)`;
  db.run(query, [nome, email, mensagem], function(err) {
    if (err) {
      console.error("Erro ao salvar mensagem:", err);
      return res.status(500).json({ error: "Erro ao salvar mensagem." });
    }

    return res.json({ message: "Mensagem enviada com sucesso!" });
  });
});
// ROTA: Listar mensagens de contato
app.get('/contato', (req, res) => {
  const query = `SELECT * FROM contatos ORDER BY data_envio DESC`;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Erro ao buscar mensagens:", err);
      return res.status(500).json({ error: "Erro ao buscar mensagens." });
    }

    res.json(rows);
  });
});


// ================================
// 4. INICIALIZAR O SERVIDOR
// ================================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
