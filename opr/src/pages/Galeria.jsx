import './Galeria.css'
import foto1 from '../assets/photos/foto1.jpg'
import foto2 from '../assets/photos/foto2.jpg'
import foto3 from '../assets/photos/foto3.jpg'

// vídeos locais 
import video1 from '../assets/videos/video1.mp4'

export default function Galeria() {
  return (
    <section className="galeria">

      <h2>Galeria Multimídia</h2>
      <p className="galeria-desc">
        Registros de concertos, ensaios, vídeos e áudios que contam a história viva da OPR.
      </p>

      {/* FOTOS */}
      <div className="galeria-grid">
        <img src={foto1} alt="Imagem 1" />

        <div className="galeria-bottom">
          <img src={foto2} alt="Imagem 2" />
          <img src={foto3} alt="Imagem 3" />
        </div>
      </div>

      {/* VÍDEOS LOCAIS */}
      <h3>Vídeos</h3>
      <div className="galeria-videos">

        <video controls>
          <source src={video1} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

      </div>

      {/* SPOTIFY */}
      <h3>Músicas no Spotify</h3>
      <p className="galeria-desc">Ouça os álbuns e faixas oficiais da Orquestra Popular do Recife.</p>

      <div className="galeria-spotify">

        {/* Álbum – exemplo  */}
        <iframe 
          src="https://open.spotify.com/embed/track/4eAs0TtLDApOrvv0rVvk0c
"
          width="100%" 
          height="352" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy">
        </iframe>

        {/* Outra faixa/álbum do perfil */}
        <iframe 
          src="https://open.spotify.com/embed/album/1PtOCrHkbybGTzUFEmi02J
"
          width="100%" 
          height="352" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy">
        </iframe>

      </div>

    </section>
  )
}
