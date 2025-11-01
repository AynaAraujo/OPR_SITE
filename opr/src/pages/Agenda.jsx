import './Agenda.css'
import EventCard from '../components/EventCard'

export default function Agenda() {
  const eventos = [
    { title: 'Show no Marco Zero', date: '10/12/2025', location: 'Recife - PE' },
    { title: 'Festival de Inverno', date: '15/07/2026', location: 'Garanhuns - PE' }
  ]

  return (
    <section className="agenda">
      <h2>Agenda de Eventos</h2>
      <div className="eventos">
        {eventos.map((e, i) => (
          <EventCard key={i} {...e} />
        ))}
      </div>
    </section>
  )
}
