// server.js
const express = require('express');
const cors = require('cors');
const eventsRoutes = require('./routes/events');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
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

// Criar tabela de contatos 
db.run(`
  CREATE TABLE IF NOT EXISTS contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
