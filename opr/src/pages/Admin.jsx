// src/pages/Admin.jsx
import { useState, useEffect } from 'react'
import './Admin.css'

export default function Admin() {
  const [eventos, setEventos] = useState([])
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")
  const [editId, setEditId] = useState(null)

  // 👉 Verificar se o usuário está logado
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      alert("Acesso não autorizado!")
      window.location.href = "/login"
      return
    }

    listarEventos()
  }, [])

  // 🔵 LISTAR
  const listarEventos = async () => {
    const res = await fetch("http://localhost:3000/events")
    const data = await res.json()
    setEventos(data)
  }

  // 🟢 ADICIONAR
  const adicionarEvento = async (e) => {
    e.preventDefault()

    const res = await fetch("http://localhost:3000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, date, location })
    })

    await res.json()
    listarEventos()
    setTitle("")
    setDate("")
    setLocation("")
  }

  // 🟡 EDITAR
  const editarEvento = (evento) => {
    setEditId(evento.id)
    setTitle(evento.title)
    setDate(evento.date)
    setLocation(evento.location)
  }

  const salvarEdicao = async (e) => {
    e.preventDefault()

    const res = await fetch(`http://localhost:3000/events/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        date,
        location
      })
    })

    await res.json()
    listarEventos()
    setEditId(null)
    setTitle("")
    setDate("")
    setLocation("")
  }

  // 🔴 DELETAR
  const removerEvento = async (id) => {
    if (!confirm("Tem certeza?")) return

    await fetch(`http://localhost:3000/events/${id}`, { method: "DELETE" })
    listarEventos()
  }

  return (
    <section className="admin">
      <h2>Painel do Administrador</h2>

      <form onSubmit={editId ? salvarEdicao : adicionarEvento} className="admin-form">
        <h3>{editId ? "Editar Evento" : "Adicionar Novo Evento"}</h3>

        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <input 
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />

        <input 
          type="text"
          placeholder="Local"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
        />

        <button type="submit">{editId ? "Salvar Alterações" : "Adicionar"}</button>
      </form>

      <div className="eventos-lista">
        <h3>Eventos Cadastrados</h3>

        {eventos.map(ev => (
          <div key={ev.id} className="evento-item">
            <p>
              <strong>{ev.title}</strong>  
              <br />
              {ev.date} — {ev.location}
            </p>

            <div className="actions">
              <button onClick={() => editarEvento(ev)} className="edit">Editar</button>
              <button onClick={() => removerEvento(ev.id)} className="delete">Excluir</button>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
