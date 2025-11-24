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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
