// controllers/eventsController.js
const db = require('../database');

module.exports = {
  
  listEvents: (req, res) => {
    db.all('SELECT * FROM events', [], (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      res.json(rows);
    });
  },

  createEvent: (req, res) => {
    const { title, date, location } = req.body;

    const query = `INSERT INTO events (title, date, location) VALUES (?, ?, ?)`;
    db.run(query, [title, date, location], function (err) {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: this.lastID, title, date, location });
    });
  },

  updateEvent: (req, res) => {
    const { id } = req.params;
    const { title, date, location } = req.body;

    const query = `UPDATE events SET title=?, date=?, location=? WHERE id=?`;
    db.run(query, [title, date, location, id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Evento atualizado com sucesso" });
    });
  },

  deleteEvent: (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM events WHERE id=?`;
    db.run(query, [id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Evento removido" });
    });
  }
};
