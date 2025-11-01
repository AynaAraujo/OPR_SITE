import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/agenda">Agenda</Link></li>
            <li><Link to="/galeria">Galeria</Link></li>
            <li><Link to="/institucional">Institucional</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
