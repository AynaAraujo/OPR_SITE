import './Home.css'
import oprBanner from '../assets/home-banner.jpg'  // coloque sua imagem aqui

export default function Home() {
  return (
    <section className="home">

      {/* HERO */}
      <div className="home-hero">
        <div className="hero-text">
          <h1>Orquestra Popular do Recife</h1>
          <p>
            Preservando a tradição pernambucana com a força da música popular.
          </p>
          <a href="/agenda" className="cta">Ver Agenda</a>
        </div>
        <div className="hero-image">
          <img src={oprBanner} alt="Orquestra Popular do Recife" />
        </div>
      </div>

      {/* QUEM SOMOS */}
      <div className="home-who">
        <h2>Quem Somos</h2>
        <p>
          Fundada em 1975 pelo escritor Ariano Suassuna e sob a regência histórica
          do Maestro Formiga, a OPR nasceu para valorizar a música popular pernambucana
          e transformar vidas por meio da arte.
        </p>
      </div>

      {/* HISTÓRIA */}
      <div className="home-history">
        <h2>Nossa História</h2>
        <ul className="timeline">
          <li>
            <strong>1975</strong> — Idealização por Ariano Suassuna  
          </li>
          <li>
            <strong>1977</strong> — Assunção do Maestro Formiga e início dos ensaios  
          </li>
          <li>
            <strong>Anos 80-90</strong> — Projetos educativos, carnavais, gravações  
          </li>
          <li>
            <strong>2025</strong> — Reconhecimento como Patrimônio Cultural Imaterial do Recife
          </li>
        </ul>
      </div>

      {/* REPERTÓRIO */}
      <div className="home-repertoire">
        <h2>Nosso Repertório</h2>
        <p>
          Trabalhamos com ritmos tradicionais como <strong>frevo, maracatu, coco, ciranda, reisado</strong> e muito mais.
        </p>
      </div>

      {/* RECONHECIMENTO */}
      <div className="home-recognition">
        <h2>Reconhecimento</h2>
        <p>
          A OPR foi declarada <strong>Patrimônio Cultural Imaterial do Recife</strong>, 
          reforçando seu papel na preservação da cultura pernambucana.
        </p>
      </div>

       {/* CONTATO */}
      <div className="home-contact">
        <h2>Entre em Contato</h2>
        <p>Envie uma mensagem para a Orquestra Popular do Recife. Retornaremos o mais breve possível!</p>

        <form 
          className="contact-form" 
          onSubmit={async (e) => {
            e.preventDefault();

            const nome = e.target.nome.value;
            const email = e.target.email.value;
            const mensagem = e.target.mensagem.value;

            const response = await fetch('http://localhost:3000/contato', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ nome, email, mensagem })
            });

            const data = await response.json();

            if (response.ok) {
              alert("Sua mensagem foi enviada com sucesso!");
              e.target.reset(); // limpa o formulário
            } else {
              alert("Erro: " + data.error);
            }
          }}
        >
          <input 
            type="text"
            name="nome"
            placeholder="Seu nome"
            required
          />

          <input 
            type="email"
            name="email"
            placeholder="Seu email"
            required
          />

          <textarea 
            name="mensagem"
            placeholder="Sua mensagem"
            rows="5"
            required
          />

          <button type="submit">Enviar Mensagem</button>
        </form>


        <p className="email-direct">
          Ou envie diretamente para:  
          <a href="mailto:orqpopulardorecife@gmail.com">
            orqpopulardorecife@gmail.com
          </a>
          <p>
            <a href="mailto:pluralprojetos.pe@gmail.com">
              pluralprojetos.pe@gmail.com
            </a>
          </p>
          
        </p>
      </div>

    </section>
  )
}
