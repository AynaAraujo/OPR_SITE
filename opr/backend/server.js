// server.js
const express = require('express');
const cors = require('cors');

// IMPORTAR O BANCO CORRETAMENTE!
const db = require('./database');

const eventsRoutes = require('./routes/events');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas de autenticação
app.use('/auth', authRoutes);

// Rotas de eventos
app.use('/events', eventsRoutes);

// ROTA TESTE
app.get('/', (req, res) => {
  res.send('API da OPR funcionando 🚀');
});


// ================================
// 📩 Rota: Receber mensagens de contato
// ================================
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

// 📩 Rota: Listar mensagens de contato
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
// Servidor
// ================================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
