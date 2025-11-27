import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      })

      const data = await response.json()

      if (data.success) {
        // salva status de login
        localStorage.setItem("adm_logado", "true")

        // redireciona
        navigate("/admin")
      } else {
        setErro("Email ou senha incorretos.")
      }

    } catch (err) {
      console.log(err)
      setErro("Erro ao conectar ao servidor.")
    }
  }

  return (
    <section className="login-page">

      <div className="login-box">

        <h2>Área Administrativa</h2>
        <p className="login-desc">Acesse o painel de gerenciamento da OPR.</p>

        {erro && <p className="erro">{erro}</p>}

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
