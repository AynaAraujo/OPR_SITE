const express = require("express");
const router = express.Router();
const db = require("../database");

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.get(query, [email, password], (err, user) => {
    if (err) return res.status(500).json({ error: "Erro interno" });

    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    return res.json({
      message: "Login bem-sucedido",
      user: {
        id: user.id,
        email: user.email
      }
    });
  });
});

module.exports = router;
