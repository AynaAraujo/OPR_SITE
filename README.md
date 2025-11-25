# 🎼 Novo Site da Orquestra Popular do Recife (OPR)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Protótipo%20Finalizado-success" alt="Status do Projeto">
  <img src="https://img.shields.io/badge/Disciplina-IHC%20(Interação%20Humano--Computador)-blueviolet" alt="Disciplina">
  <img src="https://img.shields.io/badge/Padrão-ISO%209241%20%7C%20WCAG-blue" alt="Padrões">
</p>

## 📝 Visão Geral do Projeto

Este repositório contém o protótipo de alta fidelidade e a documentação técnica (Design de Projeto e Relatório Consolidado) para o desenvolvimento do novo site da **Orquestra Popular do Recife (OPR)**.

O projeto foi desenvolvido como trabalho prático da disciplina de **Interação Humano-Computador (IHC)**, com o objetivo de criar uma plataforma digital que seja **acessível**, **funcional** e **representativa** da identidade cultural da OPR.

O foco principal é aprimorar a experiência do usuário (UX) em áreas críticas, como a consulta à agenda de eventos e a integração de colaboradores através de uma nova seção, a "Rede OPR".

## ✨ Princípios e Metodologia

[cite_start]O desenvolvimento do design seguiu rigorosamente os princípios da **Engenharia da Usabilidade** e do **Design Centrado no Usuário (DCU)**[cite: 1169]:

* **Metodologia Base:** Ciclo de Vida da Engenharia da Usabilidade[cite: 1101].
* **Padrões Adotados:** ISO 9241 (Ergonomia da Interação) e Padrões de Acessibilidade (WCAG)[cite: 1143, 1144, 1148].
* **Design Iterativo:** O desenvolvimento foi conduzido de maneira incremental, por meio da criação de protótipos de baixa, média e alta fidelidade[cite: 1115, 1116, 1158].

| Objetivo de Usabilidade (CU) | Métrica-Chave | Meta Planejada |
| :--- | :--- | :--- |
| **Eficácia** (Localizar Eventos) | [cite_start]Taxa de Sucesso na Localização de Eventos[cite: 1122]. | [cite_start]95% dos usuários em menos de 1 minuto (ou em até 3 cliques)[cite: 1123]. |
| **Eficiência** (Cadastro Rede OPR) | [cite_start]Tempo para Cadastro na Rede OPR[cite: 1119]. | [cite_start]Abaixo de 3 minutos[cite: 1120]. |
| **Satisfação** (Galeria de Mídia) | [cite_start]Nota média em Questionário de Satisfação[cite: 1125, 1126]. | [cite_start]Nota média de 4,5[cite: 1126]. |

## 🛠️ Tecnologias e Implementação

Este repositório contém os *assets* de design e a documentação que suportam a implementação do front-end.

* **Prototipagem:** O protótipo de média fidelidade foi feito em *wireframes* interativos (ex.: Figma).
* **Consistência:** Um Guia de Estilos define a paleta de cores, tipografia e elementos visuais, garantindo a consistência multicanal (site, redes sociais).
* **Acessibilidade:** O design incorpora alto contraste, textos alternativos e navegação compatível com leitores de tela.

## 📂 Estrutura do Repositório

| Diretório/Arquivo | Conteúdo |
| :--- | :--- |
| `docs/` | Documentação oficial do projeto (Design de Projeto e Relatório Consolidado). |
| `prototipo/` | Assets de Design e Imagens de referência. |

## 🚀 Como Rodar o Projeto (Front-end + Back-end)

A aplicação está dividida em:

- **Frontend** (React + Vite)
- **Backend** (Node.js + Express + SQLite)

### 🔧 Pré-requisitos

Certifique-se de ter instalado no Windows:

- **Node.js** (versão 18+)
- **npm** (vem junto com o Node)
- **Git** (opcional, mas recomendado)

---

## ▶️ **1. Rodando o Front-end**

1. Abra um terminal dentro da pasta do projeto:
   
cd opr

2. Instale as dependências:

npm install


3. Execute o servidor de desenvolvimento:

npm run dev


📌 O site ficará disponível em:

👉 http://localhost:5173

---

## ▶️ **2. Rodando o Back-end (API + SQLite)**

1. Entre na pasta do backend:

cd backend


2. Instale as dependências:

npm install


3. Inicie o servidor:

node server.js


📌 A API ficará disponível em:

👉 http://localhost:3000

---

## ▶️ **3. Rodando Front e Back ao mesmo tempo**

No Windows, você pode abrir **dois terminais** no VS Code:

- Terminal 1 → `npm run dev`
- Terminal 2 → `node backend/server.js`

Ou, se preferir:

📌 Clique em **Terminal > New Terminal** para abrir vários.

---


## 👥 Desenvolvedores

* **Ayna Mariah**  
* **Igor Balbino**

---

## 👩‍🏫 Professora

* **Profa. Tarciana**  
  *Disciplina: Interação Humano-Computador (IHC)*

