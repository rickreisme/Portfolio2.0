/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import imgIntro from "./assets/SVGs/Hand coding-amico.svg"
import imgSobre from "./assets/SVGs/Programmer-pana.svg"

function App() {
  return (
    <div className='container'>
      <header>
        <a href='' id='logo'> <span>&lt;</span>rickreisme<span>/&gt;</span></a>
      
        <div className='paginas'>
          <a href='.sobre' id='link-pags'> <span>&lt;Sobre Mim/&gt;</span> </a>
          <a href='.experiencia' id='link-pags'> <span>&lt;Experiência/&gt;</span> </a>
          <a href='.meus-projetos' id='link-pags'> <span>&lt;Meus Projetos/&gt;</span> </a>
          <a href='.contato' id='link-pags'> <span>&lt;Contato/&gt;</span> </a>
        </div>
      </header>

      <div className='intro'>
        <div className='saudacao'>
          <h1>Olá, eu sou <span>Rick Reis</span>!</h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>

        <div className='imagem-intro'>
          <img src={imgIntro}></img>
        </div>
      </div>

      <div className='sobre'>
        <div className='imagem-sobre'>
            <img src={imgSobre}></img>
          </div>
      </div>

      <div className='experiencia'></div>

      <div className='meus-projetos'></div>

      <div className='contato'></div>

      <footer></footer>
    </div>
  );
}

export default App;
