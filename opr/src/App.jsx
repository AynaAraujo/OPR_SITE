import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import Galeria from './pages/Galeria'
import Institucional from './pages/Institucional'

export default function App() {
  return (
    <Router>
      <Header />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/institucional" element={<Institucional />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
