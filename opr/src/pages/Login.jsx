import './Login.css'
import { useState } from 'react'

export default function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    // Aqui depois você vai colocar sua rota de autenticação
    console.log("Tentando logar:", { email, senha })
  }

  return (
    <section className="login-page">

      <div className="login-box">

        <h2>Área Administrativa</h2>
        <p className="login-desc">Acesse o painel de gerenciamento da OPR.</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input 
            type="email" 
            placeholder="Digite seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input 
            type="password" 
            placeholder="Digite sua senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
        
      </div>

    </section>
  )
}
