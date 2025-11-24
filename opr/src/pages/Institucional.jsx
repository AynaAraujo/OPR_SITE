import './Institucional.css'
import oprImage from '../assets/institucional.jpg' // coloque uma imagem sua aqui

export default function Institucional() {
  return (
    <section className="institucional">

      <div className="institucional-header">
        <h1>Orquestra Popular do Recife</h1>
        <p>Patrimônio Cultural Imaterial do Recife</p>
      </div>

      <div className="institucional-content">
        <div className="institucional-text">
          <h2>Quem Somos</h2>
          <p>
            Fundada em <strong>1975</strong>, por iniciativa de <strong>Ariano Suassuna</strong>, 
            a Orquestra Popular do Recife nasceu com a missão de preservar e divulgar os ritmos 
            tradicionais de Pernambuco. Desde 1977, sua direção musical esteve sob responsabilidade 
            do Maestro <strong>Ademir Araújo (Formiga)</strong>, que consolidou o estilo marcante e identitário da orquestra.
          </p>

          <p>
            A OPR tornou-se referência ao unir pesquisa musical, arranjos originais e repertório baseado
            em gêneros como <strong>frevo, maracatu, coco, ciranda, caboclinho e reisado</strong>, mantendo viva
            a essência da cultura pernambucana.
          </p>

          <p>
            Ao longo das décadas, participou de projetos educativos, apresentações culturais, festivais,
            gravações e ações sociais que levaram música e identidade cultural a diversas comunidades. 
            Com turnês nacionais e internacionais, reafirmou seu papel como símbolo da música popular brasileira.
          </p>

          <p>
            Em <strong>2025</strong>, a OPR foi declarada <strong>Patrimônio Cultural Imaterial do Recife</strong>, 
            reconhecimento que reforça sua importância histórica e sua contribuição para a cultura pernambucana.
          </p>
        </div>

        <div className="institucional-img">
          <img src={oprImage} alt="Orquestra Popular do Recife" />    
          <div className="foto-descricao">
            Orquestra Popular do Recife e Maestro Formiga |    
            <div className="foto-creditos">      
              Crédito: Divulgação
            </div>         
          </div>
        </div>
      </div>

    </section>
  )
}
