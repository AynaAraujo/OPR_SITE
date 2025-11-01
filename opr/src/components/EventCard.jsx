import './EventCard.css'

export default function EventCard({ title, date, location }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p><strong>Data:</strong> {date}</p>
      <p><strong>Local:</strong> {location}</p>
    </div>
  )
}
