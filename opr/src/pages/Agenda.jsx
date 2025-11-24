import { useEffect, useState } from 'react'
import axios from 'axios'
import EventCard from '../components/EventCard'
import './Agenda.css'

export default function Agenda() {
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/events')
      .then(response => {
        setEventos(response.data)
      })
      .catch(error => {
        console.error("Erro ao buscar eventos:", error)
      })
  }, [])

  return (
    <section className="agenda">
      <h2>Agenda de Eventos</h2>
      
      {eventos.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        <div className="eventos">
          {eventos.map((e) => (
            <EventCard
              key={e.id}
              title={e.title}
              date={e.date}
              location={e.location}
            />
          ))}
        </div>
      )}

    </section>
  )
}
